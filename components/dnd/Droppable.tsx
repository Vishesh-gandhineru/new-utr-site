"use client"

import React, { useEffect, useState } from 'react';
import {UniqueIdentifier, useDroppable} from '@dnd-kit/core';
import { getSinglePropertyBySlug } from '@/serverAction/PropertiesAPI';


type DroppableProps = {
    id : UniqueIdentifier;
    slug: string | null;
}



export function Droppable({ id , slug} : DroppableProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  const [propertyData , setPropertyData] = useState<any >(null);
  // const [propertySlug , setPropertySlug] = useState(slug);
  
  const fetchPropertyData = async (propertySlug : string) => {

      try{
          const response = await getSinglePropertyBySlug(propertySlug);
          setPropertyData(response);
      }
      catch(error){
        throw error;
      }
  }

  useEffect(() => {
    if(slug){
      fetchPropertyData(slug);
    }
  }, [slug])

 
  return (
    <div ref={setNodeRef} style={style} className='border-dotted border-[2px] border-primary h-fit w-full p-5'>
      {
        propertyData ? (
          <div>
            <div className='relative h-32 w-52'>
              <img src={propertyData?.images[0].url} alt={propertyData?.general.name} className='w-full h-full object-cover'/>
            </div>
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-bold'>{propertyData?.general.name}</h3>
              <p>{propertyData?.rates[0]?.baseAmount}</p>
            </div>
            <div>
              <p>{propertyData?.general.region}</p>
              <p>{propertyData?.general.state}</p>
              <p>{propertyData?.general.city}</p>
            </div>
          </div>
        ) : (
          <div>Drag and Drop Property</div>
        )
      }
    </div>
  );
}