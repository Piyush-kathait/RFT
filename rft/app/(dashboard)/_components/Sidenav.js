"use client"
import { File, Files, Shield, ShieldPlus, Upload } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function Sidenav() {
  const menuList = [
    {
      id: 1,
      name: "upload",
      icon: Upload,
      path: '/upload'
    },
    {
      id: 2,
      name: "files",
      icon: File,
      path: '/files'
    },
    {
      id: 3,
      name: "upgrade",
      icon: ShieldPlus,
      path: '/upgrade'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className='shadow-sm border-r h-full bg-secondary'>
      <div className='border-b h-16 p-4 flex items-center'>
        <div className='relative h-full w-full'>
          <Image
            src='/invertlogo.svg'
            fill
            alt='logo'
            className='object-contain'
          />
        </div>
      </div>

      <div className='flex flex-col w-full'>
        {menuList.map((item, index) => (
          <button
            key={item.id}
            className={`flex gap-2 p-4 px-6 hover:bg-primary hover:text-secondary w-full items-center
             ${activeIndex === index ? 'bg-blue-50 text-gray-800' : 'text-primary'}`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon className='w-5 h-5' />
            <h2 className='text-sm'>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidenav