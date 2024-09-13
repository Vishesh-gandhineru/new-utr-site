import React from 'react'
import Image from 'next/image'
type PropertyImageGridProps = {
    images: Array<{ displayPriority: number; s3_url: string; url : string ; type: string; _id: string }>;
}

const PropertyImageGrid = ({images} : PropertyImageGridProps) => {

  return (
    <div className='grid lg:grid-cols-3 gap-8'>
      <div className=' lg:col-span-2 w-full h-[300px] lg:h-[400px] relative'>
   
        <Image src={images[0].url} alt='' fill sizes='100%'
        className=' object-cover object-center absolute rounded-2xl' />        
       
      </div>
      <div className='hidden lg:col-span-1 lg:grid grid-cols-2 grid-rows-3 gap-6'>
       {images.slice(1).map((image , index) => {
          return (
            <div className='w-full h-full relative' key={index}>   
            <Image src={image.url} alt='' fill sizes='100%'
            className=' object-cover object-center absolute rounded-2xl' />
              
           
          </div>
          )
       }) }
      </div>
    </div>
  )
}

export default PropertyImageGrid