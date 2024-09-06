"use client";

import React, { useState, useEffect } from 'react';
import { Popover, Button } from 'antd';
import { PlusOutlined, MinusOutlined, UserOutlined } from '@ant-design/icons';
import { cn } from '@/lib/utils';

interface GuestCounts {
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

type GuestSelectionPopoverProps = {
  className?: string;
  guestCounts: GuestCounts;
  setGuestCounts: React.Dispatch<React.SetStateAction<GuestCounts>>;
};

const GuestSelectionPopover: React.FC<GuestSelectionPopoverProps> = ({
  className,
  guestCounts,
  setGuestCounts
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const storedCounts = sessionStorage.getItem('guestCounts');
      if (storedCounts) {
        setGuestCounts(JSON.parse(storedCounts));
      }
    }
  }, [setGuestCounts]);

  useEffect(() => {
    if (isMounted) {
      sessionStorage.setItem('guestCounts', JSON.stringify(guestCounts));
    }
  }, [guestCounts, isMounted]);

  const handleIncrement = (type: keyof GuestCounts) => {
    setGuestCounts((prev) => {
      const newCounts = { ...prev, [type]: prev[type] + 1 };
      sessionStorage.setItem('guestCounts', JSON.stringify(newCounts));
      return newCounts;
    });
  };

  const handleDecrement = (type: keyof GuestCounts) => {
    setGuestCounts((prev) => {
      const newCounts = { ...prev, [type]: Math.max(0, prev[type] - 1) };
      sessionStorage.setItem('guestCounts', JSON.stringify(newCounts));
      return newCounts;
    });
  };

  const getGuestSummary = (): string => {
    const pluralRules: Record<keyof GuestCounts, (count: number) => string> = {
      adults: (count) => count === 1 ? 'Adult' : 'Adults',
      children: (count) => count === 1 ? 'Child' : 'Children',
      infants: (count) => count === 1 ? 'Infant' : 'Infants',
      pets: (count) => count === 1 ? 'Pet' : 'Pets',
    };

    const summary = Object.entries(guestCounts)
      .filter(([_, count]) => count > 0)
      .map(([type, count]) => {
        const label = pluralRules[type as keyof GuestCounts](count);
        return `${count} ${label}`;
      });

    return summary.length > 0 ? summary.join(', ') : 'Add Guest';
  };

  const content = (
    <div className="w-full">
      {(Object.keys(guestCounts) as Array<keyof GuestCounts>).map((type) => (
        <div key={type} className="flex justify-between items-center mb-4">
          <span className="capitalize">{type}</span>
          <div className="flex items-center">
            <Button
              icon={<MinusOutlined />}
              onClick={() => handleDecrement(type)}
              disabled={guestCounts[type] === 0}
              className="border-gray-300 text-gray-600"
            />
            <span className="mx-2 w-8 text-center">{guestCounts[type]}</span>
            <Button
              icon={<PlusOutlined />}
              onClick={() => handleIncrement(type)}
              className="border-gray-300 text-gray-600"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Popover
      content={content}
      title="Select Guests"
      trigger="click"
      placement="bottom"
      className='!w-full'
    >
      <Button className={cn("w-full !flex !justify-start !items-center !text-[18px] !font-Switzer  px-2 py-2 border border-gray-300 rounded-md !text-start !p-0", className , [
        guestCounts.adults > 0 || guestCounts.children > 0 || guestCounts.infants > 0 || guestCounts.pets > 0 ? '!text-black' : '!text-gray'
      ])}>
        <span>{isMounted ? getGuestSummary() : 'Add Guest'}</span>
      </Button>
    </Popover>
  );
};

export default GuestSelectionPopover;