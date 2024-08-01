import React from 'react'

type PropertyCardProps = {
    images: Array<{}>;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    };


const PropertyCard = ({images , name , address , city , state , country} : PropertyCardProps) => {
  return (
    <div>PropertyCard</div>
  )
}

export default PropertyCard