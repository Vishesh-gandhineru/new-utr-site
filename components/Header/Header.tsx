import React from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'

import Image from 'next/image'
import LoginCard from '../LoginComponents/LoginCard'
import { User } from 'lucide-react'
import { MenuIcon } from 'lucide-react'
import MobileNav from './MobileNav'

const MainMenu = () => {

  const menuItems = [
    { name: 'Concierge', href: '/concierge' },
    { name: 'Explore our Collections', href: '/collections' },
    { name: 'Compare Properties', href: '/compare' },
    { name: 'About Us', href: '/about' },
    { name: 'List a Property', href: '/list' },
  ]
  
  return (
    <div className="my-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image src="/Logo.svg" alt='under the roof stays logo' width="188" height="45" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm md:items-center capitalize text-black">
          {menuItems.map((item) => {
           return  <Link href={item.href} className='hover:text-orange' >{item.name}</Link>             
          })}         
        <div className="hidden md:block">
          <LoginButton />
         
        </div>
        </nav>
        {/* The mobile Nav component is client side */}
        <MobileNav />
      </div>
    </div>
  )
}

export default MainMenu