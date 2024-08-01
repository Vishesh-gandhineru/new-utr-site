import React from 'react'
import PropertyCard from './PropertyCard'
import { getProperties } from '@/serverAction/PropertiesAPI'

const PropertyGrid = async () => {
 const getProperty = await getProperties({limit:10});
const Properties = getProperty?.properties;
const {images , propertyId , slug , general} = Properties;
const {name , address , city , state , country} = general || [];
  return (
    <div>
        <PropertyCard images={images} name={name} city={city} address={address} state={state} country={country}/>
    </div>
  )
}

export default PropertyGrid