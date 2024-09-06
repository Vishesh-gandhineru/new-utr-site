import BookingForm from "@/components/PropertyComponents/SinglePropertyComponents/BookingForm";

import PropertyContent from "@/components/PropertyComponents/SinglePropertyComponents/PropertyContent";
import PropertyImageGrid from "@/components/PropertyComponents/SinglePropertyComponents/PropertyImageGrid";
import ShareButton from "@/components/PropertyComponents/SinglePropertyComponents/ShareButton";
import { getSinglePropertyBySlug } from "@/serverAction/PropertiesAPI";
import React from "react";

import { Heart , Share2 } from "lucide-react";

type PropertySinglePageProps = {
  params: {
    slug: string;
  };
};
const PropertySinglePage = async ({ params }: PropertySinglePageProps) => {
  const slug = params.slug;
  const getSingleProperty = await getSinglePropertyBySlug(slug);
  const images = getSingleProperty.images;
  const shareUrl = `https://undertheroofstays/properties/${slug}`;
  const {name , city , maxOccupancy , state} = getSingleProperty.general;

  return (
    <div>
      <section className="flex justify-between items-center mb-8">
        <div className=" space-y-3">
        <h1 className="font-Span capitalize text-green">{name}</h1>
        <div className="flex gap-3 capitalize items-center">
          <p className="text-[14px] text-light_green">{city}, {state}</p>
          <span className="bg-light_green w-[1px] h-4" />
          <p className="text-[14px] text-light_green">{maxOccupancy} Guests</p>
        </div>
        </div>
        <div className="flex gap-16 items-center">
        <div className="flex  items-center gap-2 text-gray hover:text-green group">
          <span className=" w-fit p-2 border border-gray rounded-full grid place-content-center">
          <Heart className=" stroke-gray w-5 h-5 group-hover:stroke-green" />
          </span>
          Save
        </div>          
      <ShareButton url={shareUrl} title={name} />      
        </div>
      </section>
      <section className="my-8">
        <PropertyImageGrid images={images} />
      </section>
      <section className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <PropertyContent content={getSingleProperty} />
        </div>
        <div className="col-span-1">
          <BookingForm propertyId={getSingleProperty.propertyId} PropertySlug={slug}/>
          <div className="flex justify-between items-center mt-2">
            <button className="text-[12px] underline font-normal">Call us for easy booking</button>
            <button className="text-[12px] underline font-normal">Read booking and cancellation policy</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertySinglePage;
