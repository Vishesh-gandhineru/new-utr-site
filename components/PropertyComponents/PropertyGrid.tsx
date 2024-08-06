
import React from 'react'
import PropertyCard from './PropertyCard'
import { getProperties } from '@/serverAction/PropertiesAPI'

const PropertyGrid = async ({className} : {className:string}) => {
 const getProperty = await getProperties({limit:5});
  return (
    <div className={className}>
        {getProperty.properties.map((property : any)=> {
          const {slug , images , propertyId , general} = property;
          const {name , city , address , state , country} = general;
         return <PropertyCard key={propertyId} propertyId={propertyId} images={images} name={name} city={city} address={address} state={state} country={country} slug={slug}/>
        })}
    </div>
  )
}

export default PropertyGrid