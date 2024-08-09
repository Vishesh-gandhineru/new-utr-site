import React, { DragEvent } from "react";

import { motion } from "framer-motion";

import { CardType } from "@/types/types";
import Image from "next/image";

type CardProps = CardType & {
  handleDragStart: (e: DragEvent<HTMLDivElement>, card: CardType) => void;
  handleRemove: (cardId: string) => void;
};

export default function FavCard({
  title,
  id,
  column,
  propertyId,
  name,
  images,
  address,
  city,
  state,
  country,
  slug,
  handleDragStart,
}: CardProps) {
  return (
    <motion.div
      layout
      layoutId={id}
      draggable="true"
      onDragStart={(e : any) => handleDragStart(e, {
        title, id, column,
        propertyId,
        name,
        images,
        address,
        city,
        state,
        country,
        slug
      })}
      className="w-full cursor-grab rounded border border-neutral-700 bg-green-800 p-3 active:cursor-grabbing relative"
    >
      <div className="w-full h-[100px] relative">
        <Image src={images[0].url} fill alt="" className=" absolute object-cover object-center" />
      </div>
      <p className="text-sm text-neutral-100">Name : {name}</p>
      <p className="text-sm text-neutral-100">Description</p>
      <p className="text-sm text-neutral-100">Location : {city}</p>
      <p className="text-sm text-neutral-100">Items</p>

     
    </motion.div>
  );
}
