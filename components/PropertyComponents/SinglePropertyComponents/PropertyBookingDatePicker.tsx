"use client"

import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { DatePicker, Tooltip } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { set } from 'lodash';

const { RangePicker } = DatePicker;

interface DateRange {
  checkin: string | null;
  checkout: string | null;
}


type PropertyBookingDatePickerProps = {
  className?: string;
  
  dateRange: DateRange;
  setDateRange: Dispatch<SetStateAction<DateRange>>;
};




const PropertyBookingDatePicker = ({className, dateRange , setDateRange} : PropertyBookingDatePickerProps) => {

  const [bookedDates, setBookedDates] = useState<string[]>([]);

  useEffect(() => {
    const storedDates = sessionStorage.getItem('dateRange');
    if (storedDates) {
      setDateRange(JSON.parse(storedDates));
   
    }

    // Simulating fetching booked dates from an API or database
    const fetchedBookedDates = [''];
    setBookedDates(fetchedBookedDates);
  }, []);

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    
    if (dates && dates[0] && dates[1]) {
      const [checkin, checkout] = dates;
      const start = checkin.startOf('day');
      const end = checkout.startOf('day');

      // Check if any booked date is within the selected range
      const isRangeValid = !bookedDates.some(date => {
        const bookedDate = dayjs(date).startOf('day');
        return bookedDate.isAfter(start) && bookedDate.isBefore(end);
      });

      if (isRangeValid) {
        const newDateRange = {
          checkin: checkin.format('YYYY-MM-DD'),
          checkout: checkout.format('YYYY-MM-DD'),
        };
        setDateRange(newDateRange);
    
        sessionStorage.setItem('dateRange', JSON.stringify(newDateRange));
      } else {
        // If range is not valid, reset the selection
        setDateRange({ checkin: null, checkout: null });
        sessionStorage.removeItem('dateRange');
      }
    } else {
      setDateRange({ checkin: null, checkout: null });
      sessionStorage.removeItem('dateRange');
    }
  };

  const disabledDate = (current: Dayjs) => {
    // Disable dates before today
    if (current && current < dayjs().startOf('day')) {
      return true;
    }

    // Disable booked dates
    return bookedDates.includes(current.format('YYYY-MM-DD'));
  };

  const isLastAvailableDate = (date: Dayjs) => {
    const nextDay = date.add(1, 'day');
    return bookedDates.includes(nextDay.format('YYYY-MM-DD'));
  };

  return (
    <RangePicker
      value={[
        dateRange.checkin ? dayjs(dateRange.checkin) : null,
        dateRange.checkout ? dayjs(dateRange.checkout) : null,
      ]}
      className={className}
      onChange={handleDateChange}
      disabledDate={disabledDate}
      renderExtraFooter={() => "Select your check-in and check-out dates"}
      cellRender={(current) => {
        const currentDate = dayjs(current);
        const isCheckin = currentDate.format('YYYY-MM-DD') === dateRange.checkin;
        const isCheckout = currentDate.format('YYYY-MM-DD') === dateRange.checkout;
        const isBooked = bookedDates.includes(currentDate.format('YYYY-MM-DD'));
        const isLastAvailable = isLastAvailableDate(currentDate);
        
        if (isCheckin || isCheckout) {
          return (
            <Tooltip title={isCheckin ? "Check-in" : "Check-out"}>
              <div className="ant-picker-cell-inner" style={{ background: '#1890ff', color: '#fff' }}>
                {currentDate.date()}
              </div>
            </Tooltip>
          );
        }
        if (isBooked) {
          return (
            <Tooltip title="Booked">
              <div className="ant-picker-cell-inner" style={{ background: '#ff4d4f', color: '#fff' }}>
                {currentDate.date()}
              </div>
            </Tooltip>
          );
        }
        if (isLastAvailable) {
          return (
            <Tooltip title="Check-out only">
              <div className="ant-picker-cell-inner" style={{ background: '#faad14', color: '#fff' }}>
                {currentDate.date()}
              </div>
            </Tooltip>
          );
        }
        return <div className="ant-picker-cell-inner">{currentDate.date()}</div>;
      }}
    />
  );
};

export default PropertyBookingDatePicker;