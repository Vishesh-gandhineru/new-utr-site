import React from "react";
import PropertyBookingDatePicker from "./PropertyBookingDatePicker";
import GuestSelectionPopover from "./GuestSelectionPopover";


const BookingForm = () => {
  return (
    <div className=" space-y-5 border-[1px] border-primary rounded-2xl p-6 ">
      <PropertyBookingDatePicker  className="w-full" />
      <GuestSelectionPopover className="w-full" />
      <button className="w-full p-2 bg-primary text-sm rounded-lg text-white">Check Availability</button>
    </div>
  );
};

export default BookingForm;
