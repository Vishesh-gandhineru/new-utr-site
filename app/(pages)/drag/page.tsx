"use client"

import React, {useState} from 'react';
import {DndContext, DragEndEvent} from '@dnd-kit/core';

import { Droppable } from '@/components/dnd/Droppable';
import { Draggable } from '@/components/dnd/Draggable';
import useFavProperty from '@/context/useFavProperty';
import { AnimatePresence , Reorder } from 'framer-motion';
import Image from 'next/image';

export default function App() {
  const [isDropped, setIsDropped] = useState(false);

  const {favorites} = useFavProperty();

    // create a state for the compare item
    const [CompareItem, setCompareItem] = useState([
      {
        id:"drop1",
        slug: null
      },
      {
        id:"drop2",
        slug: null
      },
      {
        id:"drop3",
        slug: null
      }
    ]);



  function handleDragEnd(event : DragEndEvent) {
    const {over} = event
    if (over) {
      setCompareItem((prev) => {
        return prev.map((item) => {
          if (item.id === over.id) {
            return {
              ...item,
              slug: event.active.data.current?.slug
            }
          }
          return item
        })
      })
    }
  }

  
  return (
    <DndContext onDragEnd={handleDragEnd}>
        <section className=' space-y-7'>
<div className='flex gap-4'>
  {
    favorites.map((item) => {
      return (
        <Draggable key={item.propertyId} id={item.propertyId} slug={item.slug}>
          <div>
            <div className=' relative w-52 h-52'>
              <Image fill sizes='100%' src={item.images[0].url} alt={item.slug} className=' object-cover object-center'/>
            </div>
            {item.slug}
          </div>
          </Draggable>
      )
    })
  }
      

        </div>       
        <Reorder.Group axis="x" values={CompareItem} onReorder={setCompareItem}>
          <div className='grid grid-cols-3 gap-20'>
        {CompareItem.map((item) => {
            return (    
              <Reorder.Item key={item.id} value={item}>
              <Droppable  id={item.id} slug={item.slug} />             
            </Reorder.Item>          
            )
          })}     

          </div>
    </Reorder.Group>  
   
    
        
        </section>
    </DndContext>
  );
  
  
}