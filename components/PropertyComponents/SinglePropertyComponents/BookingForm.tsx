"use client";
import React, { useState } from "react";
import PropertyBookingDatePicker from "./PropertyBookingDatePicker";
import GuestSelectionPopover from "./GuestSelectionPopover";
import { GetPropertyquote, checkAvailability } from "@/serverAction/BookingAPI";
import { LoadingOutlined } from "@ant-design/icons";
import { CollapseProps, Spin } from "antd";
import useGuestCount from "@/context/useGuestCount";
import { useQuery } from "@tanstack/react-query";
import getSymbolFromCurrency from "currency-symbol-map";
import { Popover, Divider } from "antd";
import { Collapse } from "antd";

type DateRange = {
  checkin: string | null;
  checkout: string | null;
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

  const { guestCounts } = useGuestCount(); // zustand hook

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
    rateplanId: null,
  };

  const {
    data: QuotationData,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: [AvailabilityBody],
    queryFn: () => GetPropertyquote(AvailabilityBody),
    enabled: false,
  });

  const success = QuotationData?.available || false;
  const errorMessage = QuotationData?.message;
  const breakdown = QuotationData?.breakdown || [];
  console.log(QuotationData);

  return (
    <div className="space-y-4 rounded-2xl border-[1px] border-green p-8">
      <div>
        <h2 className="font-Switzer font-semibold">
          ₹1000{" "}
          <span className="font-Switzer text-[10px] font-normal text-light_green">
            /Night + Taxs
          </span>
        </h2>
      </div>
      <PropertyBookingDatePicker
        className="w-full !border-gray !bg-transparent !px-5 !py-3 !text-[18px] !shadow-none h-[72px]"
        dateRange={dateRange}
        setDateRange={setDateRange}
        PropertySlug={PropertySlug}
      />
      <div className="border rounded-lg h-[72px] border-gray !px-5 !py-3 ">
      <p className="filterLabel">Guests</p>
      <GuestSelectionPopover className="w-full !border-gray !bg-transparent !px-0 !py-0 !shadow-none !border-none" />
      </div>
      <div className="flex h-[72px] items-center justify-between rounded-lg border border-gray px-5 py-3">
        <div className="space-y-1">
          <p className="filterLabel">Apply & save $6,000</p>
          <h3 className="filterOptions">DIWALIFIREWORKS</h3>
        </div>
        <button className="font-Switzer text-sm font-medium underline">
          Apply
        </button>
      </div>
      <button className="w-full text-center text-[12px] text-light_green underline">
        See more coupons & offers
      </button>
      {success && (
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-gray">Total</p>
            <Popover
              content={<PriceBreakDown breakdown={breakdown} currency={QuotationData?.currency}/>}
              trigger={"click"}
              className="!p-0"
            >
              <button className="!m-0 text-center text-sm underline">
                See Breakdown
              </button>
            </Popover>
          </div>
          <div>
            <p className="text-right font-medium">
              {getSymbolFromCurrency(QuotationData?.currency)}{" "}
              {QuotationData?.breakdown?.total}
            </p>
            <p className="text-sm text-gray">Inclusive of all Taxes</p>
          </div>
        </div>
      )}

      <button
        className="relative w-full rounded-[20px] bg-green p-6 font-Switzer text-xl font-semibold capitalize tracking-wider text-white"
        onClick={() => {
          if (!success) refetch();
          if (success) {
            console.log("Reserve");
          }
        }}
      >
        {success ? "Reserve" : "Check Availability"}
        {isLoading && (
          <Spin
            className="!absolute right-20"
            indicator={<LoadingOutlined spin />}
          />
        )}
      </button>
      {!success && (
        <p className="text-center text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default BookingForm;

function PriceBreakDown({breakdown, currency} : {breakdown: any , currency: string}) {

  const {adr , charges , dailyRates , rentOnly , requiredSecurityDeposit , taxes , total } = breakdown;
  const {total : totalCharges , itemized : chargesItem} = charges;
  const {total : totalTaxes , itemized : taxesItem} = taxes;

  const CurrencySymbol = getSymbolFromCurrency(currency);

  interface ChargeItem {
    name: string;
    value: number;
    chargeName: string;
  }

  interface TaxItem {
    name: string;
    value: number;
    taxName: string;
  }


  const ChargesItem: CollapseProps["items"] = [
    {
      key: "1",
      label:(<div className="flex justify-between items-center">Charges <span>{CurrencySymbol} {totalCharges}</span></div>),
      children: (
        <div>
          <h3 className="mb-2 text-lg font-semibold">Charges</h3>
          {chargesItem.map((charge : ChargeItem, index : number) => (
            <div key={index} className="mb-1 flex justify-between">
              <span>{charge.chargeName}</span>
              <span>{CurrencySymbol} {charge.value.toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-2 flex justify-between font-semibold">
            <span>Total Charges</span>
            <span>{CurrencySymbol} {totalCharges}</span>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (<div className="flex justify-between items-center">Taxes <span>{CurrencySymbol} {totalTaxes}</span></div>),
      children: (
        <div>
          <h3 className="mb-2 text-lg font-semibold">Taxes</h3>
          {taxesItem.map((tax : TaxItem, index : number) => (
            <div key={index} className="mb-1 flex justify-between">
              <span>{tax.name}</span>
              <span>{CurrencySymbol} {tax.value.toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-2 flex justify-between font-semibold">
            <span>Total Taxes</span>
            <span>{CurrencySymbol} {totalTaxes}</span>
          </div>
        </div>
      ),
    }
  ];

  

  return (
    <div className="w-[400px] overflow-hidden rounded-lg">
      <div className="p-3">
        <h2 className="text-2xl font-bold">Price Breakdown</h2>
        <Divider className="!my-3" />
        {/* Rent */}
        <div className="mb-0">
          <h3 className="mb-1 text-lg font-semibold">Rent</h3>
          <div className="flex justify-between">
            <span>Rent Only</span>
            <span>{CurrencySymbol} {rentOnly}</span>
          </div>
          <div className="text-gray-600 mt-1 text-sm flex justify-between items-center">
            Average Daily Rate <span>
            {CurrencySymbol} {adr}
              </span> 
          </div>
        </div>
        <Divider className="!my-3" />
        {/* Charges & taxs */}
        <div>
          <Collapse items={ChargesItem}  />
        </div>    
        <Divider className="my-4" />
        {/* Total */}
        <div className="flex items-center justify-between text-xl font-bold">
          <span>Grand Total</span>
          <span>{CurrencySymbol} {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
