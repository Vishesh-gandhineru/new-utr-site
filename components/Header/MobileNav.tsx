'use client'

import { MenuIcon, User, X } from 'lucide-react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const menuItems = [
    { name: 'Concierge', href: '/concierge' },
    { name: 'Explore our Collections', href: '/collections' },
    { name: 'Compare Properties', href: '/compare' },
    { name: 'About Us', href: '/about' },
    { name: 'List a Property', href: '/list' },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <div className="flex gap-5">
        <button className="text-orange p-2 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 border border-orange">
          <User className="w-5 h-5" />
        </button>
        <button
          className="text-white p-2 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900 bg-orange"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-orange z-50 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-5 right-5 text-white p-2 rounded-full hover:text-gray-900 focus:outline-none focus:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white text-2xl font-bold hover:text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}