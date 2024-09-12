"use client";
import React from "react";
import LocationSearch from "../LocationSearch";
import DataRangePicker from "../ui/DatePicker";
import GuestSelectionPopover from "../PropertyComponents/SinglePropertyComponents/GuestSelectionPopover";
import { Arrow } from "../CustomIcons";
import Link from "next/link";

import { useLocationStore } from "@/context/useFilterStore";

const HomeFilterBar = () => {
  const { storedLocation } = useLocationStore();
  return (
    <div className="flex w-full items-center divide-x-[1px] divide-[#938E7D] text-nowrap rounded-2xl bg-white pr-5 shadow-lg lg:w-[1100px]">
      <div className="w-[40%] px-8 py-4">
        <p className="filterLabel">Where</p>
        <LocationSearch />
      </div>
      <div className="w-[60%] space-y-2 px-8">
        <p className="filterLabel">Check-in / Checkout</p>
        <DataRangePicker />
      </div>
      <div className="w-[40%] px-8">
        <p className="filterLabel">Guests</p>
        <GuestSelectionPopover className="w-full !border-none !bg-transparent" />
      </div>
      <Link
        href={
          storedLocation?.PropertySlug
            ? `/properties/${storedLocation.PropertySlug}`
            : `/properties?location=${storedLocation?.value}`
        }
        className="grid h-10 w-10 place-content-center rounded-full border-none bg-orange p-3 transition-all duration-200 hover:scale-110"
      >
        <Arrow className="h-4 w-4 stroke-white" />
      </Link>
    </div>
  );
};

export default HomeFilterBar;
