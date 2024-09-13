import BookingForm from "@/components/PropertyComponents/SinglePropertyComponents/BookingForm";

import PropertyContent from "@/components/PropertyComponents/SinglePropertyComponents/PropertyContent";
import PropertyImageGrid from "@/components/PropertyComponents/SinglePropertyComponents/PropertyImageGrid";
import ShareButton from "@/components/PropertyComponents/SinglePropertyComponents/ShareButton";
import { getSinglePropertyBySlug } from "@/serverAction/PropertiesAPI";
import React from "react";

import { Heart , Share2 } from "lucide-react";
import PropertyHeader from "@/components/PropertyComponents/SinglePropertyComponents/PropertyHeader";

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
    <div className="space-y-5 lg:space-y-8">
     <PropertyHeader property={getSingleProperty.general} slug={slug} />
      <section>
        <PropertyImageGrid images={images} />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyContent content={getSingleProperty} />
        </div>
        <div className="lg:col-span-1">
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
