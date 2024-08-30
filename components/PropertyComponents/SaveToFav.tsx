"use client"

import useFavProperty from '@/context/useFavProperty';
import { cn } from '@/lib/utils';
import { Tooltip } from 'antd';
import { motion } from 'framer-motion';
import React , {useEffect, useState} from 'react'
import { Heart } from '../CustomIcons';

type SaveToFavProps = {
    propertyId: string;
    property: any;
    play: () => void;
    setIsHeartClicked: (isHeartClicked: boolean) => void;
    isHeartClicked: boolean;

}

const SaveToFav = ({propertyId , property, play , setIsHeartClicked , isHeartClicked} : SaveToFavProps) => {
    
    const { addFavorite, removeFavorite, isFavorite } = useFavProperty();
    const [HeartIsHovered, setHeartIsHovered] = useState<boolean>(false);
    const [Favorite, setFavorite] = useState(false);
    const [HeartClassName, setHeartClassName] = useState("h-5 w-full stroke-white fill-transparent transition-all ease-in-out duration-500");

    const isFav = isFavorite(propertyId);

    const handleAddFavorite = () => {
        console.log(isFav , propertyId , "isFav");
        if (isFav) {
          removeFavorite(propertyId);
          return;
        }
    
        addFavorite({
            propertyId,
            id: propertyId,
            name: property.general.name,
            images: property.images,
            address: property.general.address,
            city: property.general.city,
            state: property.general.state,
            country: property.general.country,
            slug: property.slug,
        });
      };
    
      useEffect(() => {
        setHeartClassName(cn("h-5 w-full stroke-white fill-transparent transition-all ease-in-out duration-500", [
          HeartIsHovered && "fill-[#FB5946] stroke-[#FB5946]" ,
          isFav ? "fill-[#FB5946] stroke-[#FB5946]" : "stroke-white fill-transparent"
        ]));
      }, [HeartIsHovered, isHeartClicked, isFav]);

  return (
    <Tooltip title="Save" mouseEnterDelay={0.3} placement="bottom">
            <button
              onClick={() => {
                handleAddFavorite();
                play();
              }}
              className="glassmorphism absolute right-2 top-2 grid h-[40px] w-[40px] place-content-center rounded-full border-[1px]"
            >
              <motion.span
                initial={{ scale: 1 }}
                onMouseEnter={() => setHeartIsHovered(true)}
                onMouseLeave={() => setHeartIsHovered(false)}
                onClick={() => setIsHeartClicked(!isHeartClicked)}
                animate={{ scale: HeartIsHovered ? 1.2 : 1 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <Heart
                  className={HeartClassName}
                />
              </motion.span>
            </button>
          </Tooltip>
  )
}

export default SaveToFav