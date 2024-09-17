"use client";
import React, { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";
import PropertyCardLoading from "./PropertyCardLoading";
import { getProperties } from "@/serverAction/PropertiesAPI";

type PropertyGridProps = {
  className: string;
  initialProperties?: any;
};

const PropertyGrid = ({ className, initialProperties }: PropertyGridProps) => {
  const searchParams = useSearchParams();

  // Helper function to parse a value or array from URL params
  const parseValueFromParam = (paramValue: string | null) => {
    if (!paramValue) return null;
    try {
      return JSON.parse(paramValue);
    } catch (error) {
      return paramValue;
    }
  };

  // Extract filters dynamically from URL
  const getFiltersFromURL = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const filters: Record<string, any> = {};
    params.forEach((value, key) => {
      filters[key] = parseValueFromParam(value);
    });
    return filters;
  }, [searchParams]);

  // Prepare filters for the API call
  const prepareFilters = (filters: any) => ({
    ...filters,
    rate: filters.rate ? {
      minAmount: filters.rate[0] || 0,
      maxAmount: filters.rate[1] || 0,
    } : undefined,
    limit: 9,
  });

  // Use TanStack Query for data fetching
  const { data, error , isFetching , isFetched } = useQuery({
    queryKey: ['properties', searchParams.toString()],
    queryFn: async () => {
      const filters = getFiltersFromURL();
      const modifiedFilters = prepareFilters(filters);
      return await getProperties(modifiedFilters);
    },
    initialData: { properties: initialProperties.properties, total_count: initialProperties.total_count },
  });

  const properties = data?.properties || [];
  const propertiesNotFound = data?.total_count === 0;

  console.log('isFetching', isFetching);

  return (
    <div className={className}>
      {isFetching && Array(9).fill(0).map((_, index) => (
        <PropertyCardLoading key={index} />
      ))}
      {!isFetching && properties.map((property: any) => (
        <PropertyCard key={property.propertyId} property={property} />
      ))}
      {propertiesNotFound && <p>No properties found.</p>}
      {error && <p>Error: {(error as Error).message}</p>}
    </div>
  );
};

export default PropertyGrid;