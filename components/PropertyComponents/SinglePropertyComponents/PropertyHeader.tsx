import { Heart, Star } from "lucide-react";
import React from "react";
import ShareButton from "./ShareButton";
import { Breadcrumb } from "antd";

type PropertyHeaderProps = {
  property: {
    name: string;
    city: string;
    maxOccupancy: number;
    state: string;
  };
  slug: string;
};

const PropertyHeader = ({ property, slug }: PropertyHeaderProps) => {
  const { name, city, maxOccupancy, state } = property;
  const shareUrl = `https://undertheroofstays/properties/${slug}`;
  return (
    <section className="grid lg:grid-cols-3 lg:gap-8 gap-5">
      <div className="lg:col-span-2 space-y-[20px]">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Home",
            },
            {
              title: <a href="">Properties</a>,
            },
            {
              title: <p className="capitalize">{name}</p>,
            },
          ]}
        />
        <div className="flex items-end justify-between">
          <div className="space-y-3">
            <h1 className="font-Span capitalize text-green">{name}</h1>
            <div className="flex items-center gap-3 capitalize">
              <p className="text-[14px] text-light_green">
                {city}, {state}
              </p>
              <span className="h-4 w-[1px] bg-light_green" />
              <p className="text-[14px] text-light_green">
                {maxOccupancy} Guests
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray">
            <Star className="w-5" /> 4.8
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 flex items-end lg:justify-end gap-12">
        <div className="group flex items-center gap-2 text-gray hover:text-green text-sm">
          <span className="grid w-fit place-content-center rounded-full border border-gray p-1">
            <Heart className="h-4 w-4 stroke-gray group-hover:stroke-green" />
          </span>
          Save
        </div>
        <ShareButton url={shareUrl} title={name} />
      </div>
    </section>
  );
};

export default PropertyHeader;
