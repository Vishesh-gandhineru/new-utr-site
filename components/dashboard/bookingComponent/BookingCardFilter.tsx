"use client"
import React from 'react';
import { Select } from 'antd';
import { useSearchParams , useRouter } from 'next/navigation';




const BookingCardFilter = () =>{ 
    const router = useRouter();
    const searchParams = useSearchParams();
    const status = searchParams.get("status");
    
    const onChange = (value: string) => {
      console.log(`selected ${value}`);
      const params = new URLSearchParams(searchParams);
      params.set('status', value);
      router.push(`?${params.toString()}` , {scroll: false});
    };
    
    return (


  <Select
    className='w-[180px]'
    placeholder="Select a status"
    optionFilterProp="label"
    defaultValue={status}
    onChange={onChange}
    options={[
      {
        value: 'confirmed',
        label: 'Confirmed',
      },
      {
        value: 'pending',
        label: 'Pending',
      },
      {
        value: 'failed',
        label: 'Failed',
      },
    ]}
  />
)};

export default BookingCardFilter;