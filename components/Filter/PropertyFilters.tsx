'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Form, InputNumber, Slider, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Star } from 'lucide-react';

const { Option } = Select;

interface RateFilter {
  minAmount: number;
  maxAmount: number;
}

interface BookingLimitFilter {
  minOccupancy: number;
  maxOccupancy: number;
  maxPetAllowed: number;
  maxAdultsAllowed: number;
  maxChildrenAllowed: number;
}

interface Filters {
  rate: RateFilter;
  bookingLimit: BookingLimitFilter;
  amenities: string[];
}

const FilerLableCss = "text-base font-[600] text-gray-800";
const RatingCss = "flex items-center gap-1 border border-gray py-1 px-2 rounded-full text-sm";

const PropertyFilterComponent = () => {
  return (
  <div className='space-y-8'>
  {/* map */}
    <div className='border border-black rounded-xl h-20 w-full grid place-content-center'>
      MAP
    </div>
    <div>
      <h4 className={FilerLableCss}>Your budget (per night)</h4>
      <p className='text-gray mt-1'>₹5,000 - ₹2,00,000</p>
      <Slider defaultValue={10000} min={5000} max={20000} className='PriceSliderFilter !mt-5' />
    </div>
    <div className='space-y-3'>
      <h4 className={FilerLableCss}>Rating</h4>
      <div className='flex gap-2 text-gray'>
        <button className={RatingCss} value={1}><Star className='w-3 h-3 fill-gray stroke-gray' /> 1</button>
        <button className={RatingCss} value={2}><Star className='w-3 h-3 fill-gray stroke-gray' /> 2</button>
        <button className={RatingCss} value={3}><Star className='w-3 h-3 fill-gray stroke-gray' /> 3</button>
        <button className={RatingCss} value={4}><Star className='w-3 h-3 fill-gray stroke-gray' /> 4</button>
        <button className={RatingCss} value={5}><Star className='w-3 h-3 fill-gray stroke-gray' /> 5</button>
      </div>
    </div>
    <div className='space-y-3'>
      <h4 className={FilerLableCss}>Amenities</h4>
      <div>     
        <Select mode="multiple" className='w-full' placeholder="Select Amenities" notFoundContent={<p>No Amenities Found</p>}>
          <Option value="1">Swimming Pool</Option>
          <Option value="2">Gym</Option>
          <Option value="3">Spa</Option>
          <Option value="4">Free WiFi</Option>
          <Option value="5">Free Parking</Option>
          <Option value="6">Restaurant</Option>
          <Option value="7">Bar</Option>
          <Option value="8">Room Service</Option>
        </Select>

      </div>
    </div>
    <div>
      <h4 className={FilerLableCss}>Traveler Experience</h4>
    </div>
    <div>
      <h4 className={FilerLableCss}>Landmark & Activities</h4>
    </div>
    <div>
      <h4 className={FilerLableCss}>Meals</h4>
    </div>
  </div>
  );
};

export default PropertyFilterComponent;