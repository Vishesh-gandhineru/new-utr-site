"use client";

import React from "react";
import { Heart, Star, WeatherIcon, CompareIcon } from "../CustomIcons";
import Image from "next/image";
import { Tooltip } from "antd";
import getSymbolFromCurrency from 'currency-symbol-map'
import { motion } from 'framer-motion';
import { DotLottieReact, DotLottieReactProps } from '@lottiefiles/dotlottie-react';

interface VillaCardProps {
  name: string;
  propertyId: string;
  city: string;
  state: string;
  rating: number;
  guests: number;
  rooms: number;
  baths: number;
  pricePerNight: number;
  imageUrl: Array<{ url: string }>;
  slug: string;
  currency: string;
}

export default function PropertyCard({
  name,
  city,
  state,
  rating,
  guests,
  rooms,
  baths,
  pricePerNight,
  imageUrl,
  currency,
  slug,
}: VillaCardProps) {

  const [dotLottie, setDotLottie] = React.useState(null);

  const dotLottieRefCallback = (dotLottie : any) => {
    setDotLottie(dotLottie);
  };

  function play(){
    if(dotLottie){
      dotLottie.play();
    }
  }

  return (
    <div>
      {/* image section  */}
      <div className="relative">
        <div className="relative h-[200px] w-full">
          <Image
            src={imageUrl[0].url}
            alt={name}
            fill
            className="rounded-[10px] object-cover object-center"
          />
           <DotLottieReact
      src="/lottie/HeartDotLottie.lottie" 
      dotLottieRefCallback={dotLottieRefCallback}     
      className="w-full h-full absolute top-0 left-0 pointer-events-none"
    />
        </div>
        <div>
          <Tooltip title="Save" mouseEnterDelay={0.3} placement="bottom">
            <button onClick={play} className="glassmorphism absolute right-2 top-2 grid h-[40px] w-[40px] place-content-center rounded-full border-[1px]">
              <Heart className="h-5 w-full stroke-white" />
            </button>
          </Tooltip>
          <Tooltip title="Weather" mouseEnterDelay={0.3}>
            <button className="glassmorphism absolute bottom-2 right-2 grid h-[40px] w-[40px] place-content-center rounded-full border-[1px]">
              <WeatherIcon className="h-5 w-full stroke-white" />
            </button>
          </Tooltip>
        </div>
      </div>
      {/* card Content section  */}
      <div className="my-5">
        {/* title , location and ratings - flex , justify between */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl capitalize text-[#203E3C]">{name}</h3>
            <h4 className="text-sm capitalize text-[#657C48]">
              {city}, {state}
            </h4>
          </div>
          <div className="flex items-center justify-center gap-2 font-Switzer text-sm text-[#657C48]">
            <Star className="h-4 w-4" />
            {rating}
          </div>
        </div>
        {/* guest , price and compare button */}
        <div className="mt-3 flex items-center justify-between">
          {/* guest and price */}
          <div className="">
            <h4 className="text-sm text-[#657C48]">
              {guests} Guests: {rooms} Rooms & {baths} Baths
            </h4>
            <div>
              <h3 className="text-[#203E3C]">
                {getSymbolFromCurrency(currency)}{pricePerNight} {" "}
                <span className="text-sm font-normal text-[#657C48]">
                  /Night + Taxes
                </span>
              </h3>
            </div>
          </div>
          {/* compare button */}
          <Tooltip title="Compare" mouseEnterDelay={0.3}>
            <button className="rounded-lg border border-[#C2D6A8] p-1">
              <CompareIcon className="h-8 w-8" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
