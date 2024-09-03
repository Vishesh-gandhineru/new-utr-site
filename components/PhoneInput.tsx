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
  isDisable : boolean
};

const PhoneInput = ({setPhoneNumber , setCountryCode , isDisable} : PhoneInputProps) => {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const [value, setValue] = useState<SetStateAction<string | undefined>>("+91");

  


  const frameworks = CountryCode;

  const content = (
    <div className="h-full">
      <Command>
        <CommandList>
          <ScrollArea className="h-72">
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.code}
                  value={framework.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : framework.dial_code || "");
                    setCountryCode(framework.dial_code || "");
                    setOpen(false);
                  }}
                >
                  <div className="flex justify-between items-center w-full px-2">
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
      <Popover content={content} trigger="click" open={open} arrow={false} onOpenChange={setOpen}>
        <button className="bg-white border-[1px] rounded-none border-[#d9d9d9] border-r-0 rounded-l-[5px]  px-3">
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
        }} placeholder="Phone Number" type="number" maxLength={10} className=" !rounded-none !rounded-r-[5px]" onChange={(e)=> {setPhoneNumber(e.target.value)}} />
    </div>
  );
};

export default PhoneInput;
