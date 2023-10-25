"use client"

import React from "react"
import Link from "next/link"
import { AiOutlineHome } from 'react-icons/ai'
import { usePathname } from "next/navigation"



const Header = () => {

  const pathname = usePathname()

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: 'AiOutlineHome'
    },
    {
      label: 'About',
      href: '/about',
      icon: 'FcAbout'
    },
    {
      label: 'Post',
      href: '/posts',
      icon: 'FcAbout'
    },
    {
      label: 'Crud',
      href: '/crud',
      icon: 'FcAbout'
    },
  ]

  return (
    <div>
      <ul className='flex items-center justify-center gap-10 h-20 bg-gray-500 text-white mb-10'>
        {
          navItems.map(item => (
            <li 
              key={item.label}
            >
              <Link 
                href={item.href}
                className={pathname === `${item.href}` ? 'border-b-5 text-red-500' : ''}
              >
                {React.createElement(item.icon)} { item.label }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Header