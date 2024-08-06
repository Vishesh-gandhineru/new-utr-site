"use client"
import React from 'react'
import PropertyImageCarousel from './PropertyImageCarousel';
import { Button, Tooltip } from 'antd';
import { HeartIcon , Columns3 } from 'lucide-react';
import useFavProperty from '@/context/useFavProperty';
import useCompareProperty from '@/context/usePropertyCompare';
import { cn } from '@/lib/utils';
import {motion} from 'framer-motion';
import useWindowSize from '@/hooks/useWindowsize';

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


const DragablePropertyCard = ({images , name , address , city , state , country , slug, propertyId} : PropertyCardProps) => {

  const { addFavorite, removeFavorite, isFavorite } = useFavProperty();
  const { addToCompare, removeFromCompare, isInCompare } = useCompareProperty();
  const {width , height} = useWindowSize();

  const isFav = isFavorite(propertyId);
  const isCompared = isInCompare(propertyId);
  const handleAddFavorite = () => {
    if(isFav){
      removeFavorite(propertyId);
      return;
    }

    addFavorite({propertyId,images , name , address , city , state , country , slug});
  };

  const handleAddToCompare = () => {
    if(isCompared){
      removeFromCompare(propertyId);
      return;
    }

    addToCompare({propertyId,images , name , address , city , state , country , slug});
  }


  return (
    <motion.div drag dragConstraints={{
        top: -50,
        left: 800,
        right: 0,
        bottom: 50,
      }}  className=' relative rounded-xl overflow-hidden cursor-grab active:cursor-grabbing bg-white'>
      <PropertyImageCarousel images={images} />
      <div className='border-2 rounded-b-xl p-5 space-y-3'>
        <h2>{name}</h2>
        <p>Address : {address}</p>
        <p>City: {city}</p>
        <p>State : {state}</p>
        <p>Country : {country}</p>
        <Button>Book now</Button>
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
    </motion.div>
  )
}

export default DragablePropertyCard