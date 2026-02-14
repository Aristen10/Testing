'use client'
import { useTransition } from 'react'
import { deletePost } from '@/action/action'
import Link from 'next/link'
import UpdateProduitModal from './UpdateProduitModal'
import { RiDeleteBin5Fill } from "react-icons/ri";

interface ProductProps {
  id: string       
  name: string
  price: number
  stock: number
}

const Card = ({ id, name, price,stock }: ProductProps) => {
  const [isPending, startTransition] = useTransition()

  function handleDelete() { 

    startTransition(async () => {
      await deletePost(id)
    })
  }

  return (
    <div className='w-3xs h-60 flex bg-[#212E53] rounded-[8px] flex-col gap-3 justify-center items-center hover:scale-105 transition delay-150 duration-200 ease-in-out'>
      <p>{name}</p>
      <p>{price} Ar</p>

      <Link
        href={`/Post/${id}`}
        className='p-1 bg-[#4A919E] rounded-xl hover:bg-blue-400 w-24 flex justify-center items-center font-medium hover:scale-105 transition delay-150 duration-300 ease-in-out'
      >
        Voir plus
      </Link>

      <button
        onClick={handleDelete}
        disabled={isPending}
        className="group flex items-center gap-2 px-4 py-3 
                  bg-red-500 hover:bg-red-600 text-white
                  rounded-xl shadow-md
                  disabled:opacity-50
                  transition-all duration-200
                  hover:scale-105 active:scale-95">
                <RiDeleteBin5Fill 
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
  />
  
  {isPending ? 'Suppression...' : 'Supprimer'}
</button>
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