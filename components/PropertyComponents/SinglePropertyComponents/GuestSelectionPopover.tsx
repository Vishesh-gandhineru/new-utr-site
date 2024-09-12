"use client";

import React from "react";
import { Popover, Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { cn } from "@/lib/utils";
import { GuestCounts } from "@/types/types";
import useGuestCount from "@/context/useGuestCount";



type GuestSelectionPopoverProps = {
  className?: string;
};

const GuestSelectionPopover: React.FC<GuestSelectionPopoverProps> = ({
  className,
}) => {
  const { guestCounts, addGuest } = useGuestCount(); // zustand hook

  const handleIncrement = (type: keyof GuestCounts) => {
    addGuest({ ...guestCounts, [type]: guestCounts[type] + 1 });
  };

  const handleDecrement = (type: keyof GuestCounts) => {
    addGuest({ ...guestCounts, [type]: Math.max(0, guestCounts[type] - 1) });
  };

  const getGuestSummary = (): string => {
    const pluralRules: Record<keyof GuestCounts, (count: number) => string> = {
      adults: (count) => (count === 1 ? "Adult" : "Adults"),
      children: (count) => (count === 1 ? "Child" : "Children"),
      infants: (count) => (count === 1 ? "Infant" : "Infants"),
      pets: (count) => (count === 1 ? "Pet" : "Pets"),
    };

    const summary = Object.entries(guestCounts)
      .filter(([_, count]) => count > 0)
      .map(([type, count]) => {
        const label = pluralRules[type as keyof GuestCounts](count);
        return `${count} ${label}`;
      });

    return summary.length > 0 ? summary.join(", ") : "Add Guest";
  };

  const content = (
    <div className="w-full">
      {(Object.keys(guestCounts) as Array<keyof GuestCounts>).map((type) => (
        <div key={type} className="mb-4 flex items-center justify-between">
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
      className="!w-full"
    >
      <Button
        className={cn(
          "border-gray-300 !flex w-full !items-center !justify-start rounded-md border !p-0 px-2 py-2 !text-start !font-Switzer !text-[18px]",
          className,
          [
            guestCounts.adults > 0 ||
            guestCounts.children > 0 ||
            guestCounts.infants > 0 ||
            guestCounts.pets > 0
              ? "!text-black"
              : "!text-gray",
          ],
        )}
      >
        <span>{guestCounts ? getGuestSummary() : "Add Guest"}</span>
      </Button>
    </Popover>
  );
};

export default GuestSelectionPopover;
