"use client"
import React, { useCallback, useEffect, useState } from 'react'

import PropertyCard from './PropertyCard'
import { useSearchParams } from 'next/navigation'
import { getProperties } from '@/serverAction/PropertiesAPI'
import { filter } from 'lodash'

type PropertyGridProps = {
  className: string
  initialProperties?: any

}


interface RateFilter {
  minAmount: number;
  maxAmount: number;
}

interface FilterValues {
  rate: [number , number] ;
  rating: number[];
  amenities: string[];
  travelerExperience: string[];
  freebies: string[];
  meals: string[];
  landmarkActivities: string[];
}

const PropertyGrid = ({className , initialProperties} : PropertyGridProps) => {
 const [properties, setProperties] = useState(initialProperties.properties);
 const [FetchedProperty, setFetchedProperty] = useState(initialProperties.properties);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState<string | null>(null);
 const searchParams = useSearchParams()

  // Helper function to parse a value or array from URL params
  const parseValueFromParam = (paramValue: string | null) => {
    if (!paramValue) return null;

    try {
      // Try to parse as JSON (for arrays or objects)
      return JSON.parse(paramValue);
    } catch (error) {
      // If not JSON, return the string itself
      return paramValue;
    }
  };

  // Extract filters dynamically from URL
  const getFiltersFromURL = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    const filters: Record<string, any> = {};

    // Loop through all URL search parameters and parse them
    params.forEach((value, key) => {
      filters[key] = parseValueFromParam(value);
    });
    console.log(filters);
    return filters;
  }, []);

 async function fetchFilteredProperties(filters: any) {
  setIsLoading(true);
  try {
    const getFilteredProperty = await getProperties({...filters , limit:5});
    return setFetchedProperty(getFilteredProperty);
  }
  catch (error) {
      console.log(error);
  }
  
 }

 useEffect(() => {
   const filters = getFiltersFromURL();
   if (filters.length > 0) {
     const modifiedFilters = {
        ...filters,
        rate: {
          minAmount: filters?.rate[0] ,
          maxAmount:  filters?.rate[1],
      },
      };  
  
      console.log(modifiedFilters); 
      fetchFilteredProperties(modifiedFilters)
   }
 }, [searchParams]);

//  console.log(FetchedProperty);


  
  return (
    <div className={className}>
        {properties.map((property : any)=> {
          const {propertyId } = property;       
         return <PropertyCard key={propertyId}  property={property} />
        })}
    </div>
  )
}

export default PropertyGrid