"use client"

import React, { SetStateAction, useState } from 'react';
import { Button, Popover , Input } from 'antd';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { ScrollArea } from './ui/scroll-area';
import { CountryCode } from '@/utils/countryCodeWithImage';





const PhoneInput: React.FC = () => {

    const [open, setOpen] = useState<SetStateAction<boolean>>(false)
    const [value, setValue] = useState<SetStateAction<string | undefined>>("+91")
    const [countryCode, setCountryCode] = useState<SetStateAction<string | undefined>>("+91")

    console.log("countryCode", countryCode)
  
    const frameworks = CountryCode;

    const content = (
        <div>
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
                        setValue(currentValue === value ? "" : framework.dial_code)
                        setCountryCode(currentValue === value ? "" : framework.dial_code)
                        setOpen(false)
                      }}
                    >
                      <div className="flex justify-between items-center w-full px-2">
                          <div>{framework.emoji} {framework.name}</div>
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


    return(
        <div className='flex max-w-[300px]'>

  <Popover content={content} trigger="click">
    <Button className='bg-white border-2 border-black' type="primary"> {value
            ? frameworks.find((framework) => framework.dial_code === value)?.emoji
            : "🌍"}</Button>
  </Popover>
  <Input placeholder="Phone Number" type='number' maxLength={10}/>
        </div>
)};

export default PhoneInput;