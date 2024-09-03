"use client"
import React, { use, useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

interface DateRange {
  checkin: string | null;
  checkout: string | null;
}

const DateRangePicker: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({ checkin: null, checkout: null });
  const handleDateChange = (
    dates: [Dayjs | null, Dayjs | null] | null,
    dateStrings: [string, string]
  ) => {
    if (dates) {
      const [checkin, checkout] = dateStrings;
      const dateRange: DateRange = {
        checkin,
        checkout
      };
      
      // Update session storage
      sessionStorage.setItem('dateRange', JSON.stringify(dateRange));
      
      console.log('Date range updated in session storage:', dateRange);
    } else {
      // Clear session storage if no date is selected
      sessionStorage.removeItem('dateRange');
      console.log('Date range cleared from session storage');
    }
  };

  // useEffect(() => {
  //   // Fetch date range from session storage
  //   const storedDateRange = sessionStorage.getItem('dateRange');
  //   if (storedDateRange) {
  //     setDateRange(JSON.parse(storedDateRange));
  //     console.log('Date range fetched from session storage:', storedDateRange);
  //   }
  // }, []);

  return (
  
      <RangePicker
        onChange={handleDateChange}
        placeholder={['Check-in', 'Check-out']}
        
        // value={[
        //   dateRange.checkin ? dayjs(dateRange.checkin) : null,
        //   dateRange.checkout ? dayjs(dateRange.checkout) : null,
        // ]}
        className="w-full filterOptions !border-none !bg-transparent !p-0 !shadow-none !border-orange dateFilter"
      />
 
  );
};

export default DateRangePicker;