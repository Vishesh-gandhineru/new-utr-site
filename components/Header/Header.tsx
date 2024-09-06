
import React from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'

import Image from 'next/image'
import LoginCard from '../LoginComponents/LoginCard'

const MainMenu = () => {
  
  return (
    <div className="my-8">
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
          <LoginButton />
         
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