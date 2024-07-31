"use client";

import React from "react";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

const NumberInput: React.FC = () => (
  <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
);

export default NumberInput;
