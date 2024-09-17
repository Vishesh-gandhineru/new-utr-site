'use client';

import React, { useCallback, useState } from 'react';
import { Form, Slider, Select, Button, Checkbox } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';

const { Option } = Select;

interface FilterValues {
  rate: [number, number];
  rating: number[];
  amenities: string[];
  travelerExperience: string[];
  freebies: string[];
  meals: string[];
  landmarkActivities: string[];
}

const FilterLabelCss = "text-base font-[600] text-gray-800";
const RatingCss = "flex items-center gap-1 border border-gray py-1 px-2 rounded-full text-sm";

const PropertyFilterComponent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form] = Form.useForm<FilterValues>();
  const [rangeRate, setRangeRate] = useState<[number, number]>([5000, 80000]);

  const initialValues: FilterValues = {
    rate: [5000, 80000],
    rating: [],
    amenities: [],
    travelerExperience: [],
    freebies: [],
    meals: [],
    landmarkActivities: []
  };

  const travelerExperienceOptions = [
    { label: 'Sustainable travel', value: 'sustainable-travel' },
    { label: 'Sea travel', value: 'sea-travel' },
    { label: 'Wellness travel', value: 'wellness-travel' },
    { label: 'Cultural immersion', value: 'cultural-immersion' },
    { label: 'Cultural travel', value: 'cultural-travel' },
  ];

  const clearAllFilters = useCallback(() => {
    form.resetFields();
    setRangeRate(initialValues.rate)
    router.push('/properties', { scroll: false });
  }, [form, router]);

  const onFinish = useCallback((values: FilterValues) => {
    const params = new URLSearchParams(searchParams);

    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, JSON.stringify(value));
      } else if (typeof value === 'string' && value.trim() !== '') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`/properties?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical" initialValues={initialValues}>
      <div className='space-y-5'>
        <div className='border border-black rounded-xl h-20 w-full grid place-content-center'>
          MAP
        </div>
        <Form.Item
          name="rate"
          label={<h4 className={FilterLabelCss}>Your budget (per night)</h4>}
          extra={<p className='text-gray mt-1'>₹{rangeRate[0].toLocaleString('en-IN')} - ₹{rangeRate[1].toLocaleString('en-IN')}</p>}
        >
          <Slider
            range
            min={5000}
            max={200000}
            className='PriceSliderFilter'
            onChangeComplete={value => setRangeRate(value as [number, number])}
          />
        </Form.Item>
        <Form.Item
          name="amenities"
          label={<h4 className={FilterLabelCss}>Amenities</h4>}
        >
          <Select mode="multiple" className='w-full' placeholder="Select Amenities" notFoundContent={<p>No Amenities Found</p>}>
            {['Swimming Pool', 'Gym', 'Spa', 'Free WiFi', 'Free Parking', 'Restaurant', 'Bar', 'Room Service'].map(amenity => (
              <Option key={amenity} value={amenity}>{amenity}</Option>
            ))}
          </Select>
        </Form.Item>
        {['travelerExperience', 'freebies', 'meals', 'landmarkActivities'].map(fieldName => (
          <Form.Item
            key={fieldName}
            name={fieldName}
            label={<h4 className={FilterLabelCss}>{fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>}
          >
            <Checkbox.Group options={travelerExperienceOptions} className='!flex !justify-normal !flex-col !gap-3 ExperienceCheckboxFilter !capitalize' />
          </Form.Item>
        ))}
        <div className='flex justify-between sticky bottom-0 py-3 bg-white'>
          <Button type="primary" htmlType="submit" className='!rounded-full !bg-green'>
            Search
          </Button>
          <Button onClick={clearAllFilters} className='!rounded-full !bg-transparent !border-gray !text-gray'>
            Clear All
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default PropertyFilterComponent;