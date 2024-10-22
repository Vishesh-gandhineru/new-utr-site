import React from "react";
import Image from "next/image";
type PropertyImageGridProps = {
  images: Array<{
    displayPriority: number;
    s3_url: string;
    url: string;
    type: string;
    _id: string;
  }>;
};

const PropertyImageGrid = ({ images }: PropertyImageGridProps) => {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="relative h-[300px] w-full lg:col-span-2 lg:h-[400px]">
        <Image
          src={images[0].s3_url}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          className="absolute rounded-2xl object-cover object-center"
        />
      </div>
      <div className="hidden grid-cols-2 grid-rows-3 justify-between gap-6 lg:col-span-1 lg:grid">
        {images.slice(0, 6).map((image, index) => {
          return (
            <div className="relative h-full w-full" key={index}>
              <Image
                src={image.s3_url}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                className="absolute rounded-2xl object-cover object-center"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyImageGrid;
