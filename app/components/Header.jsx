import React from "react"
import Link from "next/link"
import { AiOutlineHome } from 'react-icons/ai'



const Header = () => {

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
                className='hover:bg-red-400 hover:text-white p-5 rounded-md opacity-50'
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