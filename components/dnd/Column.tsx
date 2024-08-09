import React, { useState, DragEvent } from "react";
import Card from "./Card";
import { CardType, ColumnType } from "@/types/types";
import { motion } from "framer-motion";

type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

export default function Column({
  title,
  headingColor,
  cards,
  column,
  setCards,
}: ColumnProps) {
  const [active, setActive] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
    e.dataTransfer.setData("sourceColumn", card.column ?? "favorite");
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    const sourceColumn = e.dataTransfer.getData("sourceColumn") as ColumnType | "";

    const cardToMove = cards.find((c) => c.id === cardId);
    const targetCard = cards.find((c) => c.column === column);
    if (!cardToMove) return;

    setCards((prevCards) =>
      prevCards.map((c) => {
        if (c.id === cardId) {
          // Move the dragged card to the target column
          return { ...c, column };
        } else if (c.column === column) {
          // Move the existing card in the target column to null
          return { ...c, column: null };
        } else {
          return c;
        }
      })
    );

    setActive(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleRemove = (cardId: string) => {
    setCards((prev) =>
      prev.map((c) =>
        c.id === cardId ? { ...c, column: null } : c
      )
    );
  };

  const cardInColumn = cards.find((c) => c.column === column);

  return (
    <motion.div 
    layout
    className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {cardInColumn ? 1 : 0}
        </span>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {cardInColumn && (
          <Card
            {...cardInColumn}
            handleDragStart={handleDragStart}
            handleRemove={handleRemove}
          />
        )}
      </div>
    </motion.div>
  );
}
