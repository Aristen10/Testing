'use client'
import { useTransition } from 'react'
import { deletePost } from '@/action/action'
import Link from 'next/link'
import UpdateProduitModal from './UpdateProduitModal'
import { RiDeleteBin5Fill } from "react-icons/ri"

interface ProductProps {
  id: string
  name: string
  price: number
  stock: number
}

const Card = ({ id, name, price, stock }: ProductProps) => {
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    startTransition(async () => {
      await deletePost(id)
    })
  }

  return (
    <div className="
      w-72
      bg-white dark:bg-zinc-900
      rounded-2xl
      p-5
      shadow-md
      border border-zinc-200 dark:border-zinc-800
      hover:shadow-xl hover:-translate-y-1
      transition-all duration-300
      flex flex-col gap-4
    ">
      
      {/* Header */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-white line-clamp-1">
          {name}
        </h3>
        <p className="text-2xl font-bold text-blue-600">
          {price} Ar
        </p>
      </div>

      {/* Stock badge */}
      <div>
        <span className={`
          text-xs px-3 py-1 rounded-full font-medium
          ${stock > 0
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-red-100 text-red-600'}
        `}>
          {stock > 0 ? `Stock: ${stock}` : 'Rupture'}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mt-auto">
        <Link
          href={`/Post/${id}`}
          className="
            text-sm font-medium
            px-4 py-2
            rounded-lg
            bg-blue-600 text-white
            hover:bg-blue-700
            transition
          "
        >
          Voir plus
        </Link>

        <button
          onClick={handleDelete}
          disabled={isPending}
          className="
            flex items-center gap-2
            px-3 py-2
            text-sm
            bg-red-500 hover:bg-red-600
            text-white
            rounded-lg
            disabled:opacity-50
            transition
          "
        >
          <RiDeleteBin5Fill />
          {isPending ? '...' : ''}
        </button>
      </div>

      {/* Update modal */}
      <UpdateProduitModal
        id={id}
        currentName={name}
        currentPrice={price}
        cuurrentStock={stock}
      />
    </div>
  )
}

export default Card
