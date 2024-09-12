"use client"

import { Anchor } from "antd";

import React from 'react'

const ContentAnchor = () => {
  return (
    <div>
        <Anchor
        direction="horizontal"
        className="!border !border-y border-gray !border-x-0 !py-3 before:!border-none PropertyAnchor bg-white"
        targetOffset={50}
        items={[
          {
            key: 'About',
            href: '#About',
            title: 'About',
          },
          {
            key: 'Amenities',
            href: '#Amenities',
            title: 'Amenities',
          },
          {
            key: 'Meals',
            href: '#Meals',
            title: 'Meals',
          },
          {
            key: 'Rules',
            href: '#Rules',
            title: 'Rules',
          },
          {
            key: 'Activities',
            href: '#Activities',
            title: 'Activities',
          },
          {
            key: 'Reviews',
            href: '#Reviews',
            title: 'Reviews',
          },
          {
            key: 'FAQs',
            href: '#FAQs',
            title: 'FAQs',
          },
          
        ]}
      />
    </div>
  )
}

export default ContentAnchor