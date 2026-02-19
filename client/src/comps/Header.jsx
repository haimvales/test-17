import React from 'react'
import { Children } from 'react';

export default function Header({children, titel}) {
  return (
    <div className='border-b h-10 border-gray-200  flex justify-center items-center '>
        <h1 className='font-medium  '>{titel}</h1>
    </div>
  )
}
