"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { getProperties } from '@/serverAction/PropertiesAPI';
import PropertyCard from './PropertyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




const PropertySlider =  ({className} : {className:string}) => {
  
    const {data : getProperty  , isLoading} = useQuery({
        queryKey: ['properties'],
        queryFn: () => getProperties({ limit: 5 }),
    });

   
     return (
    <Swiper
      spaceBetween={25}
      slidesPerView={4}
     
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}    
    >
     {getProperty?.properties.map((property : any)=> {
             const { propertyId } = property;
            return (
                <SwiperSlide key={propertyId}>
                    <PropertyCard key={propertyId}  property={property} />
                </SwiperSlide>
            )
           })}
    </Swiper>

    
     )
   }

export default PropertySlider