"use client";
import React, { ChangeEvent, useState, useRef } from "react";
import { Input, InputNumber, Popover } from "antd";

const AddGuest = () => {
  const [Guests, setGuests] = useState([{ adults: 0, children: 0, pets: 0 }]);
  const adults = useRef(null);
  const handleAddGuest = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };
  const handleIncrement = (id: string) => {
    // console.log(id)
    const AdultsInputElement = adults.current;
    if (id === "adults") {
      console.log(AdultsInputElement);
    } else if (id === "children") {
      console.log("children");
    } else if (id === "pets") {
      console.log("pets");
    }
  };
  const handleDecrement = (id:string) => {};

 const addonAfter = (id : string) => (
    <button className="h-full w-full" onClick={() => handleIncrement(id)}>+</button>
 )
 const addonBefore = (id : string) => (
    <button className="h-full w-full" onClick={() => handleDecrement(id)}>-</button>
 )
  const content = () => {
    return (
      <div className="space-y-4 px-3 py-3">
        <div className="flex items-center justify-between space-x-8">
          <label htmlFor="adults">Adults</label>
          <Input
            ref={adults}
            type="number"
            name="Adults"
            id="adults"
            className="max-w-[120px] !rounded-none !border-0 !border-b-[1px] !text-center"
            min={1}
            onChange={handleAddGuest}
            addonAfter={
                addonAfter("adults")
            }
            addonBefore={addonBefore("adults")}
          />
        </div>
        <div className="flex items-center justify-between space-x-8">
          <label htmlFor="Children">Children</label>
          <Input
            type="number"
            name="Children"
            id="children"
            className="max-w-[120px] !rounded-none !border-0 !border-b-[1px] !text-center"
            min={1}
            onChange={handleAddGuest}
             addonAfter={
                addonAfter("children")
            }
            addonBefore={addonBefore("children")}
          />
        </div>
        <div className="flex items-center justify-between space-x-8">
          <label htmlFor="pets">Pets</label>
          <Input
            type="number"
            name="pets"
            id="pets"
            className="max-w-[120px] !rounded-none !border-0 !border-b-[1px] !text-center"
            min={1}
            onChange={handleAddGuest}
            addonAfter={
                addonAfter("pets")
            }
            addonBefore={addonBefore("pets")}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Popover content={content} trigger={"click"}>
        <button>Add Guest</button>
      </Popover>
    </div>
  );
};

export default AddGuest;
