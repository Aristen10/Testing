'use client'

import { useTransition } from 'react'
import { deletePost } from '@/action/action'
import Link from 'next/link'

interface ProductProps {
  id: string       
  name: string
  price: number
}

const Card = ({ id, name, price }: ProductProps) => {
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    if (!confirm(`Supprimer "${name}" ?`)) return

    startTransition(async () => {
      await deletePost(id)
    })
  }

  return (
    <div className='w-3xs h-60 flex bg-[#212E53] rounded-[8px] flex-col gap-3 justify-center items-center hover:scale-105 transition delay-150 duration-200 ease-in-out'>
      <p>{name}</p>
      <p>{price}</p>

      <Link
        href={`/Post/${id}`}
        className='p-1 bg-[#4A919E] rounded-xl hover:bg-blue-400 w-24 flex justify-center items-center font-medium hover:scale-105 transition delay-150 duration-300 ease-in-out'
      >
        Voir plus
      </Link>

      <button
        onClick={handleDelete}
        disabled={isPending}
        className='bg-red-400 hover:bg-red-600 px-4 py-1 rounded-xl disabled:opacity-50'
      >
        {isPending ? 'Suppression...' : 'Supprimer'}
      </button>
    </div>
  )
}

export default Card