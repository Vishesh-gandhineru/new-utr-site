import React from 'react'
import Image from 'next/image'
type PropertyImageGridProps = {
    images: string[]
}

const PropertyImageGrid = ({images} : PropertyImageGridProps) => {
  return (
    <div className='grid grid-cols-3 gap-8'>
      <div className=' col-span-2 w-full h-full relative'>
   
        <Image src="https://placehold.co/1200x800" alt='' fill
        className=' object-cover object-center absolute rounded-2xl' />
          
       
      </div>
      <div className=' col-span-1 grid grid-cols-2 grid-rows-2 gap-6'>
        {Array.from({length: 4}, (_, i) => {
          return (
            <div className='w-full h-[200px] gap-8 relative'>
              <Image src="https://placehold.co/200x200" alt='' 
              fill 
              className=' object-cover object-center absolute rounded-2xl' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PropertyImageGrid