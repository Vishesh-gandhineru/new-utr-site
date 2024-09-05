"use client"
import React, { useEffect, useState } from 'react'
import LocationSearch from '../LocationSearch'
import AddGuest from '../AddGuest'
import DataRangePicker from '../ui/DatePicker'
import { Button } from 'antd'
import { MotionDiv } from '@/utils/FramerMotion'
import { cn } from '@/lib/utils'
import GuestSelectionPopover from '../PropertyComponents/SinglePropertyComponents/GuestSelectionPopover'
import { Arrow } from '../CustomIcons'
import Link from 'next/link'
import { LocationType } from '@/types/types'
import { useLocationStore } from '@/context/useFilterStore'



type GuestCounts =  {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const defaultGuestCounts: GuestCounts = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
};



const HomeFilterBar = () => {
 const [guestCounts, setGuestCounts] = useState<GuestCounts>(defaultGuestCounts);
 const {storedLocation}  = useLocationStore();
 console.log(storedLocation)

 return (  
      <div className="w-[1100px]  bg-white rounded-2xl shadow-lg flex text-nowrap  items-center divide-x-[1px] divide-[#938E7D] pr-5">
        <div className="w-[40%]  px-8 py-4">
          <p className="filterLabel">Where</p>
          <LocationSearch/>
        </div>
        <div className="w-[60%] px-8 space-y-2">
          <p className="filterLabel">Check-in / Checkout</p>
          <DataRangePicker />
        </div>
        <div className="w-[40%] px-8">
          <p className="filterLabel">Guests</p>
          <GuestSelectionPopover className="w-full !border-none !bg-transparent " guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
        </div>
        <Link href={storedLocation?.PropertySlug ? `/properties/${storedLocation.PropertySlug}` : `/properties/location=${storedLocation?.value}`} className="bg-orange p-3 rounded-full transition-all duration-200 border-none w-10 h-10 grid place-content-center hover:scale-110">
         <Arrow className="w-4 h-4 stroke-white"/>
        </Link>
      </div>
  )
}

export default HomeFilterBar