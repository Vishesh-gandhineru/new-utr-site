"use client";

import React from "react";
import useCompareProperty from "@/context/usePropertyCompare";
import PropertyCard from "@/components/PropertyComponents/PropertyCard";

const page = () => {
  const { compareItems } = useCompareProperty();
  return (
    <main>
      <section className="container">
        <div className="grid grid-cols-4 gap-8">
          {compareItems.map((property: any) => {
            return (
              <PropertyCard
                key={property.propertyId}
                propertyId={property.propertyId}
                images={property.images}
                name={property.name}
                city={property.city}
                address={property.address}
                state={property.state}
                country={property.country}
                slug={property.slug}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default page;
