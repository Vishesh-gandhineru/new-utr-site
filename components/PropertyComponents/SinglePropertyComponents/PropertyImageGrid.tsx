import React from 'react'
import Image from 'next/image'
type PropertyImageGridProps = {
    images: Array<{ displayPriority: number; s3_url: string; url : string ; type: string; _id: string }>;
}

const PropertyImageGrid = ({images} : PropertyImageGridProps) => {

  return (
    <div className='grid grid-cols-3 gap-8'>
      <div className=' col-span-2 w-full h-[400px] relative'>
   
        <Image src={images[0].url} alt='' fill
        className=' object-cover object-center absolute rounded-2xl' />        
       
      </div>
      <div className=' col-span-1 grid grid-cols-2 grid-rows-2 gap-6'>
       {images.slice(1).map((image) => {
          return (
            <div className='w-full h-full relative'>   
            <Image src={image.url} alt='' fill
            className=' object-cover object-center absolute rounded-2xl' />
              
           
          </div>
          )
       }) }
      </div>
    </div>
  )
}

export default PropertyImageGrid