import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { RangePickerProps } from 'antd/es/date-picker';

const { RangePicker } = DatePicker;

interface DateRange {
  checkin: string | null;
  checkout: string | null;
}

const DateRangePicker: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange>({ checkin: null, checkout: null });

  useEffect(() => {
    const storedDates = sessionStorage.getItem('dateRange');
    if (storedDates) {
      setDateRange(JSON.parse(storedDates));
    }
  }, []);

  const handleDateChange = (
    dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null,
    dateStrings: [string, string]
  ) => {
    if (dates) {
      const [checkin, checkout] = dateStrings;
      const newDateRange: DateRange = { checkin, checkout };
      setDateRange(newDateRange);
      sessionStorage.setItem('dateRange', JSON.stringify(newDateRange));
    } else {
      setDateRange({ checkin: null, checkout: null });
      sessionStorage.removeItem('dateRange');
    }
  };

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().startOf('day');
  };

  return (
    <RangePicker
      onChange={handleDateChange}
      placeholder={['Check-in', 'Check-out']}
      disabledDate={disabledDate}
      value={dateRange.checkin && dateRange.checkout ? [dayjs(dateRange.checkin), dayjs(dateRange.checkout)] : null}
      className="w-full filterOptions !border-none !bg-transparent !p-0 !shadow-none border-orange dateFilter"
    />
  );
};

export default DateRangePicker;