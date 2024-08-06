"use client";

import React from "react";
import useCompareProperty from "@/context/usePropertyCompare";
import PropertyCard from "@/components/PropertyComponents/PropertyCard";
import useFavProperty from "@/context/useFavProperty";
import DragablePropertyCard from "@/components/PropertyComponents/DragablePropertyCard";

const page = () => {
  const { compareItems } = useCompareProperty();
  const { favorites } = useFavProperty();
  return (
    <main>
      <section className="container grid grid-cols-3 gap-5">
        <div className="grid grid-cols-3 gap-8 col-span-2">
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
        <div className=" col-span-1 w-[80%] m-auto">
          <h1>Your fav properties</h1>
          <div className="grid grid-cols-1">
            {favorites.map((property: any) => {
              return (
                <DragablePropertyCard
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
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
