"use client";

import React, { useEffect, useMemo, useRef, useState , createContext , useContext } from "react";
import { Select, Space, Spin } from "antd";
import type { SelectProps } from "antd";
import debounce from "lodash/debounce";
import { locations } from "@/utils/DefaultLocation";
import { getPropertiesByLocation } from "@/serverAction/PropertiesAPI";
import { Search } from "lucide-react";
import { useLocationStore } from "@/context/useFilterStore";
import useWindowSize from "@/hooks/useWindowsize";


// Create a context for options
const OptionsContext = createContext<{
  options: LocationValue[];
  setOptions: React.Dispatch<React.SetStateAction<LocationValue[]>>;
} | null>(null);

// Create a provider component
export const OptionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [options, setOptions] = useState<LocationValue[]>(locations as unknown as LocationValue[]);
  
  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

// Create a custom hook to use the options context
export const useOptions = () => {
  const context = useContext(OptionsContext);
  if (!context) {
    throw new Error("useOptions must be used within an OptionsProvider");
  }
  return context;
};









export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}




function DebounceSelect<ValueType extends LocationValue = any>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const { options, setOptions } = useOptions(); // Use the context for options
  const [fetching, setFetching] = useState(false);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]); // Update options using context
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          return;
        }

        setOptions(newOptions); // Update options using context
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout, setOptions]);

  return (
    <Select
      suffixIcon={" "}
      className="font-Switzer"
      showSearch
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
      optionRender={(option) => (
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1 justify-between text-wrap">
            <span className="text-[16px] font-semibold font-Switzer">{option.data.label}</span>
            <span className="text-sm">{option.data.PropertyAddress}</span>
          </div>
          <div className="text-[12px] text-gray-600">{option.data.state}</div>
        </div>
      )}
    />
  );
}

// Usage of DebounceSelect
interface LocationValue {
  key: string;
  label: string;
  value: string;
  state: string;
  city: string;
  PropertyName: string;
  PropertyAddress: string;
  PropertySlug : string;
}

async function fetchLocationList(Location: string): Promise<LocationValue[]> {
  if (Location === "") {
    return locations.map((location) => ({
      key: location.value,
      label: location.label,
      value: location.value,
      state: location.state,
      city: "",
      PropertyName: "",
      PropertyAddress: "",
      PropertySlug : ""
    }));
  }
  const GetLocation = await getPropertiesByLocation(Location);
  if (Array.isArray(GetLocation) && GetLocation.length > 0) {
    return GetLocation.map((location: any) => ({
      key: location.propertyId,
      label: location.general.name,
      value: location.general.name,
      state: location.general.state,
      city: location.general.city,
      PropertyName: location.general.name,
      PropertyAddress: location.general.address,
      PropertySlug: location.slug
    }));
  } else {
    return locations.map((location) => ({
      key: location.value,
      label: location.label,
      value: location.value,
      state: location.state,
      city: "",
      PropertyName: "",
      PropertyAddress: "",
      PropertySlug : ""
    }));;
  }
}

const App: React.FC = () => {
  // const [value, setValue] = useState<LocationValue[]>([]);
  const {storedLocation , setStoredLocation} = useLocationStore();
  const {options} = useOptions();
  const {width} = useWindowSize();
  useEffect(() => {   
    const storedLocation = sessionStorage.getItem("location");
    if (storedLocation) {
      return setStoredLocation(JSON.parse(storedLocation));
    }

  }, []);


  return (

      <DebounceSelect
        showSearch
        value={storedLocation}
        placeholder={<p className="filterOptions">{width > 768 ? "Search Destinations"  : "Place" }</p>}
        fetchOptions={fetchLocationList}
        onChange={(newValue: any) => {
          const fullValue = options.find(option => option.value === newValue.value);
          if (fullValue) {
            setStoredLocation(fullValue);
            sessionStorage.setItem("location", JSON.stringify(fullValue));
          }
        }}
        className="w-[300px] LocationSearch text-[18px] font-Switzer"
      />
  );
};

const LocationSearch = () => {
  return (
    <OptionsProvider><App /></OptionsProvider>
  );
}




export default LocationSearch;
