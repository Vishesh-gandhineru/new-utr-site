"use client";
import PropertyGrid from "@/components/PropertyComponents/PropertyGrid";
import React from "react";
import useFavProperty from "@/context/useFavProperty";
import PropertyCard from "@/components/PropertyComponents/PropertyCard";
const page = () => {
  const { favorites } = useFavProperty();
  return (
    <main>
      <section className="container">
        <div className="grid grid-cols-4 gap-5">
        {favorites.map((property: any) => {
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
