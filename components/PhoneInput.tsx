"use client";

import React, { SetStateAction, useState } from "react";
import { Popover, Input, Form } from "antd";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { ScrollArea } from "./ui/scroll-area";
import { CountryCode } from "@/utils/countryCodeWithImage";

type PhoneInputProps = {
  setPhoneNumber: (value: string) => void;
  setCountryCode: (value: string) => void;
  isDisable: boolean;
};

const PhoneInput = ({
  setPhoneNumber,
  setCountryCode,
  isDisable,
}: PhoneInputProps) => {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [value, setValue] = useState<SetStateAction<string | undefined>>("+91");

  const frameworks = CountryCode;

  const content = (
    <div className="h-full w-[350px]">
      <Command>
        <CommandList>
          <ScrollArea className="h-72">
            <CommandInput placeholder="Search country..." className="font-Switzer" />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.code}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    setValue(
                      currentValue === value ? "" : framework.dial_code || "",
                    );
                    setCountryCode(framework.dial_code || "");
                    setOpen(false);
                  }}
                >
                  <div className="flex w-full items-center justify-between px-2 font-Switzer">
                    <div>
                      {framework.emoji} {framework.name}
                    </div>
                    <div>{framework.dial_code}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </CommandList>
      </Command>
    </div>
  );

  return (
    <div className="flex max-w-full">
      <Popover
      placement="bottomLeft"
        content={content}
        trigger="click"
        open={open}
        arrow={false}
        onOpenChange={setOpen}
      >
        <button className="rounded-none w-14 text-2xl rounded-l-[5px] border-[1px] border-r-0 border-[#d9d9d9] bg-white px-3">
          {" "}
          {value
            ? frameworks.find((framework) => framework.dial_code === value)
                ?.emoji
            : "🌍"}
        </button>
      </Popover>

      <Input
        disabled={isDisable}
        count={{
          show: true,
          max: 10,
        }}
        placeholder="Enter your mobile number"
        type="number"
        maxLength={10}
        className="!rounded-none !rounded-r-[5px] !h-[50px]  "
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
    </div>
  );
};

export default PhoneInput;
