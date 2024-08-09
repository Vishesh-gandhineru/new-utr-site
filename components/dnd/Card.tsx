import React, { DragEvent , DragEventHandler } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardType } from "@/types/types";

type CardProps = CardType & {
  handleDragStart: (e: DragEvent<HTMLDivElement>, card: CardType) => void;
  handleRemove: (cardId: string) => void;
};

export default function Card({
  title,
  id,
  column,
  name,
  images,
  address,
  city,
  state,
  country,
  slug,
  propertyId,
  handleDragStart,
  handleRemove,
}: CardProps) {
  return (
    <motion.div
      layout
      layoutId={id}
      draggable="true"
      onDragStart={(e : any) => handleDragStart(e, { title, id, column,
        propertyId,
        name,
        images,
        address,
        city,
        state,
        country,
        slug})}
      className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing relative"
    >
      <div className="w-full h-[200px] relative mb-8">
        <Image src={images[0].url} fill alt="" className="absolute object-cover object-center"/>
      </div>
      <div className="text-white">
      <p >Name : {name}</p>
      <p >Description</p>
      <p >Location : {city}, {state} , {country} </p>
      <h2 className="text-sm text-neutral-100">Item :</h2>
      <p>Swimming Pool</p>
      <p>Garage</p>
      <p>Bedrooms</p>
      <p>Bathrooms</p>
      <p>Living</p>
      <p>Area</p>

      </div>

      <button
        onClick={() => handleRemove(id)}
        className="rounded bg-red-500 px-2 py-1 text-xs text-white absolute top-3 right-3"
      >
        <X />
      </button>
    </motion.div>
  );
}
