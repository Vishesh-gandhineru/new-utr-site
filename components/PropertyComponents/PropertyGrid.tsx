
import React from 'react'
import PropertyCard from './PropertyCard'
import { getProperties } from '@/serverAction/PropertiesAPI'


const PropertyGrid = async ({className} : {className:string}) => {
 const getProperty = await getProperties({limit:5});

  return (
    <div className={className}>
        {getProperty.properties.map((property : any)=> {
          const {slug , images , propertyId , general} = property;
          const {name , city , address , state , country , maxOccupancy} = general;
          const {baseAmount , currency} = property.rates[0] || {baseAmount:0 , Currency:"USD"};
         return <PropertyCard key={propertyId} propertyId={propertyId} property={property} imageUrl={images} name={name} city={city} state={state} slug={slug} rating={5} guests={maxOccupancy} baths={5} rooms={5} pricePerNight={baseAmount} currency={currency}/>
        })}
    </div>
  )
}

export default PropertyGrid