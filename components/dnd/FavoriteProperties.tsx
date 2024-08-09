import React, { DragEvent } from "react";
import { CardType } from "@/types/types";
import FavCard from "./FavCard";
import {motion} from "framer-motion";

type FavoritePropertiesProps = {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

export default function FavoriteProperties({ cards, setCards }: FavoritePropertiesProps) {
  const favoriteCards = cards.filter((c) => !c.column);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
    e.dataTransfer.setData("sourceColumn", "favorite");
  };

  return (
    <motion.div 
    layout
    className="mb-4">
      <h3 className="font-medium text-neutral-900 mb-3">Favorite Properties</h3>
      <div className="flex gap-3">
        {favoriteCards.map((card) => (
          <FavCard
            key={card.id}
            {...card}
            handleDragStart={handleDragStart}
            handleRemove={() => {}}
          />
        ))}
      </div>
    </motion.div>
  );
}
