"use client"

import React, { useState } from 'react';
import { DatePicker, Tooltip } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs, { Dayjs  } from 'dayjs';

const { RangePicker } = DatePicker;

interface DateRange {
  start: string;
  end: string;
}

interface PropertyBookingDatePickerProps {
  bookedDateRanges?: DateRange[];
}

const PropertyBookingDatePicker: React.FC<PropertyBookingDatePickerProps> = ({ bookedDateRanges = [] }) => {
  const [selectedDates, setSelectedDates] = useState<[Dayjs | null, Dayjs | null] | null>(null);

  // Function to disable dates
  const disabledDate = (current: Dayjs): boolean => {
    // Disable past dates
    if (current && current < dayjs().startOf('day')) {
      return true;
    }

    // Disable booked date ranges
    for (const range of bookedDateRanges) {
      if (current.isBetween(range.start, range.end, null, '[]')) {
        return true;
      }
    }

    return false;
  };

  // Custom render function for date cells
  const dateRender = (current: Dayjs): React.ReactNode => {
    const isCheckIn = selectedDates && dayjs(current).isSame(selectedDates[0], 'day');
    const isCheckOut = selectedDates && dayjs(current).isSame(selectedDates[1], 'day');

    let tooltipTitle = '';
    if (isCheckIn) {
      tooltipTitle = 'Check-in';
    } else if (isCheckOut) {
      tooltipTitle = 'Check-out';
    }

    const dateContent = (
      <div className={`ant-picker-cell-inner ${isCheckIn || isCheckOut ? 'bg-blue-500 text-white rounded-full' : ''}`}>
        {current.date()}
      </div>
    );

    return tooltipTitle ? (
      <Tooltip title={tooltipTitle} color={isCheckIn ? 'green' : 'red'}>
        {dateContent}
      </Tooltip>
    ) : (
      dateContent
    );
  };

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null): void => {
    setSelectedDates(dates);
  };

  return (
    <div className="w-full max-w-md">
      <RangePicker
        className="w-full"
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        defaultPickerValue={dayjs()}
        size='large'
        cellRender={dateRender}
        onChange={handleDateChange}
        suffixIcon={<CalendarOutlined className="text-blue-500" />}
      />
    </div>
  );
};

export default PropertyBookingDatePicker;