"use client"
import React from 'react'
import PropertyImageCarousel from './PropertyImageCarousel';
import { Button, Tooltip } from 'antd';
import { HeartIcon , Columns3 } from 'lucide-react';
import useFavProperty from '@/context/useFavProperty';
import useCompareProperty from '@/context/usePropertyCompare';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type PropertyCardProps = {
    images: { displayPriority: number; url: string; type: string; _id: string }[];
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    slug: string;
    propertyId: string;
    };


const PropertyCard = ({images , name , address , city , state , country , slug, propertyId} : PropertyCardProps) => {

  const { addFavorite, removeFavorite, isFavorite } = useFavProperty();
  const { addToCompare, removeFromCompare, isInCompare , compareItems } = useCompareProperty();

  const isFav = isFavorite(propertyId);
  const isCompared = isInCompare(propertyId);
  const handleAddFavorite = () => {
    if(isFav){
      removeFavorite(propertyId);
      return;
    }

    addFavorite({propertyId , id:propertyId ,images , name , address , city , state , country , slug, column: null});
  };

  const handleAddToCompare = () => {
    if(isCompared){
      removeFromCompare(propertyId);
      return;
    }

    if (compareItems.length <= 3 ) {
      addToCompare({propertyId,images , name , address , city , state , country , slug , column: null , id: propertyId});
    }
  }


  return (
    <div className=' relative rounded-xl overflow-hidden'>
      <PropertyImageCarousel images={images} />
      <div className='border-2 rounded-b-xl p-5 space-y-3'>

        <h2>{name}</h2>
        <p>Address : {address}</p>
        <p>City: {city}</p>
        <p>State : {state}</p>
        <p>Country : {country}</p>
        <Button href={`/properties/${slug}`}>Book now</Button>
      </div>
      <Tooltip title="Favorite">
      <button className=' absolute top-3 right-3' onClick={handleAddFavorite}>
     <HeartIcon className={cn('w-8 h-8 stroke-white fill-white' , [
        isFav ? 'fill-red-500' : ''
     ])} />
      </button>
      </Tooltip>
      <Tooltip title="Compare">
      <button className=' absolute top-3 left-3' onClick={handleAddToCompare}>
      <Columns3 className={cn('w-8 h-8 stroke-white' , [
        isCompared ? 'fill-blue-500' : ''
      ])} />
      </button>

      </Tooltip>
    </div>
  )
}

export default PropertyCard