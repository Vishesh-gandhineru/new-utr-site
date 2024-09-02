"use client"
import React, { useState } from 'react'
import LocationSearch from '../LocationSearch'
import AddGuest from '../AddGuest'
import DataRangePicker from '../ui/DatePicker'
import { Button } from 'antd'
import { MotionDiv } from '@/utils/FramerMotion'
import { cn } from '@/lib/utils'
import GuestSelectionPopover from '../PropertyComponents/SinglePropertyComponents/GuestSelectionPopover'



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
 const [open , setOpen] = React.useState(false);
 const [guestCounts, setGuestCounts] = useState<GuestCounts>(defaultGuestCounts);
  
 return (
    // <div className='flex items-center gap-12 p-5 border-2 border-blue-300 rounded-xl justify-between max-w-fit relative'>
    //   <div onClick={() => setOpen(true)}>
    //     <LocationSearch/>
    //   </div>
    //     <DataRangePicker />
    //     <GuestSelectionPopover className="w-fit" guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
    //     <Button type="primary">Search</Button>
    //     {/* <MotionDiv layout className={cn('w-full absolute bg-white top-[105%] z-50 left-0 border-[1px] border-primary rounded-xl  duration-200 transition-all ease-in-out' , [
    //       open ? 'h-fit p-3 border-primary' : 'h-0 border-transparent'
    //     ])}>
    //      <MotionDiv  className={cn( [
    //       open ? 'block' : 'hidden'
    //      ])}>
    //      <div className="grid grid-cols-3 gap-4">
    //           <div className="space-y-2">
    //             <div className="p-2 bg-gray-200 rounded-md">Location closeby</div>
    //             <div className="p-2 bg-gray-200 rounded-md">Popular City1</div>
    //             <div className="p-2 bg-gray-200 rounded-md">Popular City2</div>
    //           </div>
    //           <div className="space-y-2">
    //             <div className="p-2 bg-gray-200 rounded-md">Location closeby</div>
    //             <div className="p-2 bg-gray-200 rounded-md">Popular City1</div>
    //             <div className="p-2 bg-gray-200 rounded-md">Popular City2</div>
    //           </div>
    //           <div className="space-y-2">
    //             <div className="p-2 bg-gray-200 rounded-md">Blog</div>
    //             <div className="p-2 bg-gray-200 rounded-md">Video</div>
    //             <div className="p-2 bg-gray-200 rounded-md">Video</div>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-6 gap-4 mt-4">
    //           <div className="p-2 bg-gray-200 rounded-md">History search1</div>
    //           <div className="p-2 bg-gray-200 rounded-md">History search2</div>
    //           <div className="p-2 bg-gray-200 rounded-md">History search3</div>
    //           <div className="p-2 bg-gray-200 rounded-md">History search3</div>
    //           <div className="p-2 bg-gray-200 rounded-md">History search3</div>
    //           <div className="p-2 bg-gray-200 rounded-md">History search3</div>
    //         </div>
    //      </MotionDiv>
    //     </MotionDiv> */}
    // </div>   
      <div className="w-[1100px]  bg-white rounded-2xl shadow-lg flex text-nowrap  items-center divide-x-[1px] divide-[#938E7D] pr-5">
        <div className="w-[40%]  px-8 py-4">
          <p className="filterLabel">Where</p>
          <p className="filterOptions">Search Destinations</p>
        </div>
        <div className="w-[30%] px-8 ">
          <p className="filterLabel">Check-in</p>
          <p className="filterOptions">Select Dates</p>
        </div>
        <div className="w-[30%] px-8 ">
          <p className="filterLabel">Check-out</p>
          <p className="filterOptions">Select Dates</p>
        </div>
        <div className="w-[40%] px-8">
          <p className="filterLabel">Guests</p>
          <p className="filterOptions">2 Guests, 1 Room</p>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
  )
}

export default HomeFilterBar