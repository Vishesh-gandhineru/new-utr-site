"use client"
import React, { useState } from "react";
import PropertyBookingDatePicker from "./PropertyBookingDatePicker";
import GuestSelectionPopover from "./GuestSelectionPopover";
import { checkAvailability } from "@/serverAction/BookingAPI";


type DateRange = {
  checkin: string | null;
  checkout: string | null;
}


type GuestCounts =  {
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

type BookingFormProps = {
  propertyId: string;
  PropertySlug: string;

}

const BookingForm = ({propertyId , PropertySlug} : BookingFormProps) => {
  const [dateRange, setDateRange] = useState<DateRange>({ checkin: null, checkout: null });
  const [guestCounts, setGuestCounts] = useState<GuestCounts>(defaultGuestCounts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [availabilityData, setAvailabilityData] = useState(null);
 

  
 const AvailabilityBody = {
  "propertyId": propertyId, //required
  "slug": PropertySlug, //required
  "checkIn":dateRange.checkin,  //required format = YYYY-MM-DD
  "checkOut": dateRange.checkout,  //required format = YYYY-MM-DD
  "adults": guestCounts.adults,  //required format = int
  "children": guestCounts.children, //optional or send 0 format = int
  "babies": guestCounts.infants, //optional or send 0 format = int
  "pets": guestCounts.pets//optional or send 0 format = int
}


console.log(AvailabilityBody , "AvailabilityBody");
const handleCheckAvailability = async () => {
  setLoading(true);
  try {
    const response = await checkAvailability(AvailabilityBody)
    setLoading(false);
    console.log(response);    
    return setAvailabilityData(response);
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div className=" space-y-5 border-[1px] border-primary rounded-2xl p-6 ">
      <PropertyBookingDatePicker  className="w-full" dateRange={dateRange} setDateRange={setDateRange} />
      <GuestSelectionPopover className="w-full" guestCounts={guestCounts} setGuestCounts={setGuestCounts}/>
      <button className="w-full p-2 bg-primary text-sm rounded-lg text-white" onClick={handleCheckAvailability}>Check Availability</button>
    </div>
  );
};

export default BookingForm;
