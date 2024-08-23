import BookingForm from "@/components/PropertyComponents/SinglePropertyComponents/BookingForm";

import PropertyContent from "@/components/PropertyComponents/SinglePropertyComponents/PropertyContent";
import PropertyImageGrid from "@/components/PropertyComponents/SinglePropertyComponents/PropertyImageGrid";
import { getSinglePropertyBySlug } from "@/serverAction/PropertiesAPI";
import React from "react";

type PropertySinglePageProps = {
  params: {
    slug: string;
  };
};
const PropertySinglePage = async ({ params }: PropertySinglePageProps) => {
  const slug = params.slug;
  const getSingleProperty = await getSinglePropertyBySlug(slug);
  const images = getSingleProperty.images;
 
  return (
    <main>
      <section className="container">
        <PropertyImageGrid images={images} />
      </section>
      <section className="container grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <PropertyContent content={getSingleProperty} />
        </div>
        <div className="col-span-1">
          <BookingForm propertyId={getSingleProperty.propertyId} PropertySlug={slug}/>
        </div>
      </section>
    </main>
  );
};

export default PropertySinglePage;
