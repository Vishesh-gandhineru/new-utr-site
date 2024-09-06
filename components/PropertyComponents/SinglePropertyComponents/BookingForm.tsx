"use client";
import React, { useState } from "react";
import PropertyBookingDatePicker from "./PropertyBookingDatePicker";
import GuestSelectionPopover from "./GuestSelectionPopover";
import { GetPropertyquote, checkAvailability } from "@/serverAction/BookingAPI";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

type DateRange = {
  checkin: string | null;
  checkout: string | null;
};

type GuestCounts = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
};

const defaultGuestCounts: GuestCounts = {
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
};

type BookingFormProps = {
  propertyId: string;
  PropertySlug: string;
};

const BookingForm = ({ propertyId, PropertySlug }: BookingFormProps) => {
  const [dateRange, setDateRange] = useState<DateRange>({
    checkin: null,
    checkout: null,
  });
  const [guestCounts, setGuestCounts] =
    useState<GuestCounts>(defaultGuestCounts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [QuotationData, setQuotationData] = useState<Record<string, any> | null>(null);

  const AvailabilityBody = {
    propertyId: propertyId, //required
    slug: PropertySlug, //required
    checkIn: dateRange.checkin, //required format = YYYY-MM-DD
    checkOut: dateRange.checkout, //required format = YYYY-MM-DD
    adults: guestCounts.adults, //required format = int
    children: guestCounts.children, //optional or send 0 format = int
    babies: guestCounts.infants, //optional or send 0 format = int
    pets: guestCounts.pets, //optional or send 0 format = int
    currency: "INR",
    rateplanId: null
  };

  const handleCheckAvailability = async () => {
    setLoading(true);
    try {
      const response = await GetPropertyquote(AvailabilityBody);
      setLoading(false);
      console.log(response);
      if (response.statusCode === 409) {
        return setError("No availability found");
      }
      if (response.available){
        setSuccess(true);
      }
      return setQuotationData(response);
    } catch (error) {
      console.error(error);
    }
  };


  
  return (
    <div className="rounded-2xl border-[1px] border-green p-8 space-y-4">
      <div>
        <h2 className="font-Switzer font-semibold">₹1000 <span className="text-[10px] font-Switzer font-normal text-light_green">/Night + Taxs</span></h2>
      </div>
      <PropertyBookingDatePicker
        className="w-full !border-gray !bg-transparent !shadow-none !text-[18px] !px-5 !py-3"
        dateRange={dateRange}
        setDateRange={setDateRange}
        PropertySlug={PropertySlug}
      />
      <GuestSelectionPopover
        className="w-full !border-gray !px-5 !py-5 !bg-transparent !shadow-none"
        guestCounts={guestCounts}
        setGuestCounts={setGuestCounts}
      />
      <div className="border border-gray p-5 rounded-lg flex  justify-between items-center">
        <div className=" space-y-2">
        <p className="filterLabel">Apply & save $6,000</p>
        <h3 className="filterOptions">DIWALIFIREWORKS</h3>
        </div>
        <button className="text-sm underline font-Switzer font-medium">Apply</button>
      </div>
      <button className="text-[12px] underline text-light_green w-full text-center">See more coupons & offers</button>
      <button
        className="relative w-full rounded-[20px] bg-green  text-xl text-white font-Switzer font-semibold capitalize tracking-wider p-6"
        onClick={handleCheckAvailability}
      >
        Check Availability{" "}
        {loading && (
          <Spin
            className="!absolute right-20"
            indicator={<LoadingOutlined spin />}
          />
        )}
      </button>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      {success && <p className="text-sm text-green-500 text-center">Property is available</p>}
      {QuotationData && 
      <div>
      <h2>Total : {QuotationData.breakdown.total}</h2>
      </div>}
    </div>
  );
};

export default BookingForm;
