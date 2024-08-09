"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Define the shape of a favorite item
interface FavoriteItem {
propertyId: string | number
id: string  | number
name: string
images: { displayPriority: number; url: string; type: string; _id: string }[]
address: string
city: string
state: string
country: string
slug: string
column: number | null
}

// Define the shape of our store
interface FavoriteStore {
  favorites: FavoriteItem[]
  addFavorite: (item: FavoriteItem) => void
  removeFavorite: (itemId: string | number) => void
  isFavorite: (itemId: string | number) => boolean
}

const useFavProperty = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (item) => set((state) => ({ 
        favorites: [...state.favorites, item] 
      })),
      removeFavorite: (itemId) => set((state) => ({ 
        favorites: state.favorites.filter((item) => item.propertyId !== itemId) 
      })),
      isFavorite: (itemId) => 
        get().favorites.some((item) => item.propertyId === itemId),
    }),
    {
      name: 'favorite-storage', // name of the item in the storage (must be unique)
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          return str ? JSON.parse(str) : null;
        },
        setItem: (name, value) => localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    }
  )
)

export default useFavProperty