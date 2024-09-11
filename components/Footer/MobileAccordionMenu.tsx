"use client";
import { Collapse, CollapseProps } from "antd";
import React from "react";
import { Arrow } from "../CustomIcons";
import { divide } from "lodash";

const MobileAccordionMenu = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "TRENDING LOCATIONS",
      children: (
        <div className="text-white font-light text-base font-Switzer grid grid-cols-3">
            <div className=" space-y-1">
          <li>Goa</li>
          <li>Mumbai</li>
          <li>Alibaug</li>
          <li>Lonavla</li>
          <li>Karjat</li>
          <li>Wayanad</li>
            </div>
            <div className=" space-y-1">
          <li>Goa</li>
          <li>Mumbai</li>
          <li>Alibaug</li>
          <li>Lonavla</li>
          <li>Karjat</li>
          <li>Wayanad</li>
            </div>
            <div className=" space-y-1">
          <li>Goa</li>
          <li>Mumbai</li>
          <li>Alibaug</li>
          <li>Lonavla</li>
          <li>Karjat</li>
          <li>Wayanad</li>
            </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "COLLECTIONS",
      children:  <div className="text-white font-light text-base  font-Switzer grid grid-cols-2">
      <div className=" space-y-1">
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>    
      </div>
      
      <div className=" space-y-1">
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>
    <li>Name of Collection</li>    
      </div>
      
  </div>,
    },
  ];
  return (
    <Collapse
      defaultActiveKey={["0"]}
      items={items}
      accordion
      expandIconPosition={"end"}
      expandIcon={({ isActive }) => (
        <div className="grid h-6 w-6 place-content-center rounded-full border border-white">
          <Arrow
            className={`h-3 w-3 rotate-90 stroke-white ${isActive ? "-rotate-90" : ""}`}
          />
        </div>
      )}
      className="footerAccordion border !bg-transparent !p-0"
      bordered={false}
    />
  );
};

export default MobileAccordionMenu;
