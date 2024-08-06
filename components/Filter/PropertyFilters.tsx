'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Form, InputNumber, Slider, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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

const PropertyFilterComponent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form] = Form.useForm<Filters>();

  const [filters, setFilters] = useState<Filters>({
    rate: { minAmount: 0, maxAmount: 1000 },
    bookingLimit: {
      minOccupancy: 1,
      maxOccupancy: 10,
      maxPetAllowed: 0,
      maxAdultsAllowed: 4,
      maxChildrenAllowed: 4,
    },
    amenities: [],
  });

  useEffect(() => {
    const updatedFilters: Filters = { ...filters };

    searchParams.forEach((value, key) => {
      if (key === 'amenities') {
        updatedFilters.amenities = value.split(',');
      } else if (key.startsWith('rate.') || key.startsWith('bookingLimit.')) {
        const [category, subKey] = key.split('.') as [keyof Filters, string];
        if (category === 'rate' || category === 'bookingLimit') {
          (updatedFilters[category] as any)[subKey] = Number(value);
        }
      }
    });

    setFilters(updatedFilters);
    form.setFieldsValue(updatedFilters);
  }, [searchParams]);

  const updateURL = (values: Filters) => {
    const params = new URLSearchParams();

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'amenities' && value.length > 0) {
        params.append(key, value.join(','));
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (subValue !== undefined && subValue !== null) {
            params.append(`${key}.${subKey}`, subValue.toString());
          }
        });
      }
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const onFinish = (values: Filters) => {
    setFilters(values);
    updateURL(values);
  };

  const amenityOptions: string[] = [
    'Wi-Fi', 'Pool', 'Gym', 'Parking', 'Air Conditioning',
    'TV', 'Kitchen', 'Washer', 'Dryer', 'Heating'
  ];

  return (
    <Form<Filters> form={form} onFinish={onFinish} layout="vertical" initialValues={filters}>
      <Form.Item label="Rate" style={{ marginBottom: 0 }}>
        <Form.Item name={['rate', 'minAmount']} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
          <InputNumber min={0} max={10000} placeholder="Min Amount" />
        </Form.Item>
        <Form.Item name={['rate', 'maxAmount']} style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
          <InputNumber min={0} max={10000} placeholder="Max Amount" />
        </Form.Item>
      </Form.Item>

      <Form.Item name={['bookingLimit', 'minOccupancy']} label="Min Occupancy">
        <Slider min={1} max={20} />
      </Form.Item>

      <Form.Item name={['bookingLimit', 'maxOccupancy']} label="Max Occupancy">
        <Slider min={1} max={20} />
      </Form.Item>

      <Form.Item name={['bookingLimit', 'maxPetAllowed']} label="Max Pets Allowed">
        <Slider min={0} max={5} />
      </Form.Item>

      <Form.Item name={['bookingLimit', 'maxAdultsAllowed']} label="Max Adults Allowed">
        <Slider min={1} max={10} />
      </Form.Item>

      <Form.Item name={['bookingLimit', 'maxChildrenAllowed']} label="Max Children Allowed">
        <Slider min={0} max={10} />
      </Form.Item>

      <Form.Item name="amenities" label="Amenities">
        <Select mode="multiple" placeholder="Select amenities">
          {amenityOptions.map(amenity => (
            <Option key={amenity} value={amenity}>{amenity}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
          Apply Filters
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PropertyFilterComponent;