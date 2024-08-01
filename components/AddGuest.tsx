"use client";
import React, { ChangeEvent, useState, useRef } from "react";
import { Button, Input, InputNumber, Popover } from "antd";
import { set } from "lodash";

const AddGuest = () => {
  const [adults, setAdults] = useState<number | null>(0);
  const [children, setChildren] = useState<number | null>(0);
  const [pets, setPets] = useState<number|null>(0);
 const GuestText = `${adults} Adults, ${children} Children, ${pets} Pets`
  const content = () => {
    return (
      <div className="space-y-4 px-3 py-3">
        <div className="flex items-center justify-between space-x-8">
          <label htmlFor="adults">Adults</label>
          <InputNumber
            type="number"
            name="Adults"
            id="adults"
            className="max-w-[80px] !rounded-none !border-0 !border-b-[1px] !text-center"
            min={1}
            onChange={(value)=> {setAdults(value)}}
     
          />
        </div>
        <div className="flex items-center justify-between space-x-8">
          <label htmlFor="Children">Children</label>
          <InputNumber           
            type="number"
            name="Children"
            id="children"
            className="max-w-[80px] !rounded-none !border-0 !border-b-[1px] !text-center"
            min={1}
            onChange={(value) => {setChildren(value)}}

          />
        </div>
        <div className="flex items-center justify-between space-x-8">
          <label htmlFor="pets">Pets</label>
          <InputNumber
            type="number"
            name="pets"
            id="pets"
            className="max-w-[80px] !rounded-none !border-0 !border-b-[1px] !text-center"
            min={1}
            onChange={(value) => {setPets(value)}}
         
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Popover content={content} trigger={"click"}>
        <Button>{GuestText}</Button>
      </Popover>
    </div>
  );
};

export default AddGuest;
