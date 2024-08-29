"use client"
import { Select } from "antd"



import React from 'react'

const CurrencyPicker = () => {

    const handleChange = (value : string) => {
    console.log(`selected ${value}`);
    }
  return (
    <Select
      defaultValue="INR"
      className="w-fit"
      onChange={handleChange}
      options={[
        { value: 'INR', label: '🇮🇳 INR' },
        { value: 'USD', label: '🇺🇸 USD' },
        { value: 'GBP', label: '🇬🇧 GBP' },
        { value: 'EUR', label: '🇪🇺 EUR' },
      ]}
    />
  )
}

export default CurrencyPicker