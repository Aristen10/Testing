import React from 'react'
import prisma from '@/lib/prisma'
import Link from 'next/link'
interface PoductProps{
    key:string
    name:string,
    price:number
}

const Card = ({name,price,key}:PoductProps) => {
  return (
    <div className='w-3xs h-60 flex bg-[#212E53] rounded-[8px] flex-col  gap-3 justify-center items-center hover:scale-105  transition delay-150 duration-200 ease-in-out'>
        <p>{name}</p>
        <p>{price}</p>


        <Link href={`/Post/${key}`} className='p-1 bg-[#4A919E] rounded-xl hover:bg-blue-400 w-24 flex justify-center items-center font-medium hover:scale-105  transition delay-150 duration-300 ease-in-out'>Voir plus</Link>
    </div>
  )
}

export default Card