"use client"

import React from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'
import useFavProperty from '@/context/useFavProperty'
import useCompareProperty from '@/context/usePropertyCompare'

const MainMenu = () => {
  const { favorites } = useFavProperty();
  const {compareItems} = useCompareProperty();
  const favCount = favorites.length;
  const compareCount = compareItems.length;
  return (
    <nav className='flex border-2 p-5 justify-between my-6 rounded-2xl' >
        <ul className='flex gap-6 uppercase'>
            <Link href='/'>home</Link>
            <Link href="/about">about</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/favorite">Favorites {favCount == 0 ? "" : `(${favCount})`}</Link>
            <Link href='/compare'>Compare {compareCount == 0 ? "" : `(${compareCount})`}</Link>
        </ul>
        <LoginButton />
    </nav>
  )
}

export default MainMenu