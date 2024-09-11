"use client";
import { Collapse, CollapseProps } from "antd";
import React from "react";
import { Plus, Minus } from "lucide-react";

const Faqs = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit integer fringilla?",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fringilla maximus augue, ac semper erat luctus in. Vestibulum blandit
          ultricies magna, at tincidunt justo ultrices eu. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae. Nam
          quis placerat nunc. In suscipit risus erat, sit amet convallis dolor
          faucibus non. Sed porta tortor ante, quis porttitor leo posuere sit
          amet.
        </div>
      ),
    },
    {
      key: "2",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit integer fringilla?",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fringilla maximus augue, ac semper erat luctus in. Vestibulum blandit
          ultricies magna, at tincidunt justo ultrices eu. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae. Nam
          quis placerat nunc. In suscipit risus erat, sit amet convallis dolor
          faucibus non. Sed porta tortor ante, quis porttitor leo posuere sit
          amet.
        </div>
      ),
    },
    {
      key: "3",
      label:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit integer fringilla?",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          fringilla maximus augue, ac semper erat luctus in. Vestibulum blandit
          ultricies magna, at tincidunt justo ultrices eu. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae. Nam
          quis placerat nunc. In suscipit risus erat, sit amet convallis dolor
          faucibus non. Sed porta tortor ante, quis porttitor leo posuere sit
          amet.
        </div>
      ),
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
          <Plus className="h-3 w-3" />
        </div>
      )}
      className="!rounded-none !border !border-l-0 !border-r-0 !bg-transparent !p-0 !text-base"
    />
  );
};

export default Faqs;
