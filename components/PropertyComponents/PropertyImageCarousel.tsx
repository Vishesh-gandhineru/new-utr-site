"use client";

import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

type PropertyImageCarouselProps = {
  images: { displayPriority: number; url: string; type: string; _id: string }[];
};

const PropertyImageCarousel = ({ images }: PropertyImageCarouselProps) => (
  <>
    <Carousel arrows infinite={true} draggable>
      {images.map((item) => {
        return (
          <div key={item._id}>
            <img src={item.url || "https://placehold.co/600x400"} className="w-full h-[250px] object-cover object-center pointer-events-none" />
          </div>
        );
      })}
    </Carousel>
  </>
);

export default PropertyImageCarousel;