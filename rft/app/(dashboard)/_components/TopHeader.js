import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
    return (
      <div className='flex p-5 border-b items-center justify-between md:justify-end h-16 bg-secondary'>
        <AlignJustify   className='md:hidden text-primary' />
        
        <div className='h-16 p-4  md:hidden absolute left-0 right-0 mx-auto w-fit'>
          <Image 
            src='/invertlogo.svg' 
            width={150} 
            height={100} 
            alt='logo'
            className='h-full w-auto object-contain'
          />
        </div>
  
        <UserButton className='border-s-'/>
      </div>
    )
  }

export default TopHeader