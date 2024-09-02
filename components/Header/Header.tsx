"use client"

import React from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'
import useFavProperty from '@/context/useFavProperty'
import useCompareProperty from '@/context/usePropertyCompare'
import CurrencyPicker from './CurrencyPicker'
import Image from 'next/image'

const MainMenu = () => {
  const { favorites } = useFavProperty();
  const {compareItems} = useCompareProperty();
  const favCount = favorites.length;
  const compareCount = compareItems.length;
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image src="/Logo.svg" alt='under the roof stays logo' width="188" height="45" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm md:items-center capitalize text-black">
          <Link href="/concierge" className='hover:text-orange' >Concierge</Link>
          <Link href="/collections" className='hover:text-orange' >Explore our Collections</Link>
          <Link href="/compare" className='hover:text-orange' >Compare Properties</Link>
          <Link href="/about" className='hover:text-orange' >About Us</Link>
          <Link href="/list" className='hover:text-orange'>List a Property</Link>
        <div className="hidden md:block">
          <Link href="/login" className="inline-flex items-center justify-center px-6 py-2 border rounded-full border-orange text-orange  hover:bg-orange hover:text-white transition-colors duration-300">
            Log in / Sign up
          </Link>
        </div>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainMenu