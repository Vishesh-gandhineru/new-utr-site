"use client";

import React, {  useState } from "react";
import { Star, CompareIcon } from "../CustomIcons";
import Image from "next/image";
import { Tooltip } from "antd";
import getSymbolFromCurrency from "currency-symbol-map";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Carousel } from "antd";

import SaveToFav from "./SaveToFav";
import WeatherButton from "./WeatherButton";
import Link from "next/link";

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
  imageUrl: Array<{
    displayPriority: number;
    url: string;
    type: string;
    _id: string;
  }>;
  slug: string;
  currency: string;
  property: any;
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
  propertyId,
  property,
  imageUrl,
  currency,
  slug,
}: VillaCardProps) {
  const [dotLottie, setDotLottie] = useState(null);
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);
  const dotLottieRefCallback = (dotLottie: any) => {
    setDotLottie(dotLottie);
  };

  function play() {
    if (!isHeartClicked) {
      //@ts-ignore
      dotLottie.play();
    }
  }




  return (
    <div className="w-full">
      {/* image section  */}
      <div className="relative">
        <Carousel
          draggable
          className="overflow-hidden !rounded-[10px] !border-none w-full max-w-[100vw]"
        >
          {imageUrl.map((image, index) => {
            return (
              <div key={index} className="relative h-[200px] w-full !block">
                <Image
                  src={image.url || "https://placehold.co/600x400"}
                  alt={name}
                  fill
                  className="object-cover object-center"
                  placeholder="blur"
                  blurDataURL="/blurImage.webp"
                />
              </div>
            );
          })}
        </Carousel>
        <DotLottieReact
          src="/lottie/HeartDotLottie.lottie"
          dotLottieRefCallback={dotLottieRefCallback}
          speed={1.5}
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
        />
        <div>
          <SaveToFav propertyId={propertyId} property={property} play={play} isHeartClicked={isHeartClicked} setIsHeartClicked={setIsHeartClicked} />
          <WeatherButton />
        </div>
      </div>
      {/* card Content section  */}
      <div className="my-5">
        {/* title , location and ratings - flex , justify between */}
        <div className="flex justify-between">
          <div>
            <Link href={`properties/${slug}`}>
            <h3 className="text-xl capitalize text-[#203E3C]">{name}</h3>
            </Link>
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
                {getSymbolFromCurrency(currency)}
                {pricePerNight}{" "}
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
