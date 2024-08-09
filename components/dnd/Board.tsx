"use client"
import React, { useState } from "react";
import Column from "./Column";
import FavoriteProperties from "./FavoriteProperties";
import { CardType } from "@/types/types";
import {motion} from "framer-motion";
import useFavProperty from "@/context/useFavProperty";

const DEFAULT_CARDS: CardType[] = [];

// const FAVORITE_PROPERTIES: CardType[] = [
//   { title: "Fav Property 1", id: "4", column: null },
//   { title: "Fav Property 2", id: "5", column: null },
//   { title: "Fav Property 3", id: "6", column: null },
// ];


export default function Board() {

   const {favorites} = useFavProperty();

    const [cards, setCards] = useState<CardType[] | any>([...DEFAULT_CARDS, ...favorites]);
    
    console.log(cards);
  return (
    <motion.div layout className="flex flex-col h-full w-full gap-3 overflow-scroll p-12">
        <div className="w-full mb-9">
      <FavoriteProperties cards={cards} setCards={setCards} />
        </div>
      <div className="flex h-full w-full gap-3">
        <Column
          title="Compare 1"
          column="compare1"
          headingColor="text-neutral-900"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Compare 2"
          column="compare2"
          headingColor="text-neutral-900"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Compare 3"
          column="compare3"
          headingColor="text-neutral-900"
          cards={cards}
          setCards={setCards}
        />
      </div>
    </motion.div>
  );
}
