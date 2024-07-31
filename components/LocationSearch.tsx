"use client";

import React, { useMemo, useRef, useState } from "react";
import { Select, Space, Spin } from "antd";
import type { SelectProps } from "antd";
import debounce from "lodash/debounce";
import { locations } from "@/utils/DefaultLocation";
import { getPropertiesByLocation } from "@/serverAction/PropertiesAPI";

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, "options" | "children"> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}




function DebounceSelect<
  ValueType extends {
    key: string | number;
    label: string;
    value: string ;
    state?: string;
    PropertyName?: string;
    PropertyAddress? : string;
  } = any,
>({
  fetchOptions,
  debounceTimeout = 800,
  ...props
}: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>(locations as unknown as ValueType[]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select
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
           <span>{option.data.label}</span> <span>{option.data.PropertyName}</span>
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
  PropertyName: string;
  PropertyAddress: string;
}

async function fetchLocationList(Location: string): Promise<LocationValue[]> {
  if (Location === "") {
    return locations.map((location) => ({
      key: location.value,
      label: location.label,
      value: location.value,
      state: location.state,
      PropertyName: "",
      PropertyAddress: "",
    }));
  }
  const GetLocation = await getPropertiesByLocation(Location);
  console.log(GetLocation);
  return GetLocation.map((location: any) => ({
    key: location.propertyId,
    label: location.general.city,
    value: location.general.propertyId,
    state: location.general.state,
    PropertyName: location.general.name,
    PropertyAddress: location.general.address,
  }));
}

const App: React.FC = () => {
  const [value, setValue] = useState<LocationValue[]>([]);

  return (
    <DebounceSelect
    showSearch
      value={value}
      placeholder="search Location"
      fetchOptions={fetchLocationList}
      onChange={(newValue) => {
        setValue(newValue as LocationValue[]);
      }}
      className="w-[300px]"
    />
  );
};




export default App;
