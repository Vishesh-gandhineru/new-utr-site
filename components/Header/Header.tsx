import React from 'react'
import LoginButton from './LoginButton'
const Header = () => {
  return (
    <nav className='flex border-2 p-5 justify-between my-6 rounded-2xl' >
        <ul className='flex gap-6 uppercase'>
            <li>home</li>
            <li>about</li>
            <li>content</li>
        </ul>
        <LoginButton />
    </nav>
  )
}

export default Header