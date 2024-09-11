
import React from 'react'
import PropertyCard from './PropertyCard'
import { getProperties } from '@/serverAction/PropertiesAPI'


const PropertyGrid = async ({className , PostPerPage} : {className:string , PostPerPage : number }) => {
 const getProperty = await getProperties({limit:PostPerPage});
 
  return (
    <div className={className}>
        {getProperty.properties.map((property : any)=> {
          const {propertyId } = property;       
         return <PropertyCard key={propertyId}  property={property} />
        })}
    </div>
  )
}

export default PropertyGrid