'use client'

import { useState } from 'react'
import { CreateProduit } from '@/action/action'

export default function AddProduitModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
     
      <button
        onClick={() => setIsOpen(true)}
        className='flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-colors'
      >
        <span className='text-xl leading-none'>+</span>
        Ajouter un produit
      </button>

     
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className='bg-blue-500 rounded-2xl shadow-xl p-8 w-full max-w-md relative'>

           
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none'
            >
              ×
            </button>

            <h2 className='text-xl font-bold text-gray-800 mb-6'>Nouveau produit</h2>

            <form
              action={async (formData) => {
                await CreateProduit(formData)
                setIsOpen(false)
              }}
              className='flex flex-col gap-4 '
            >
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium text-white'>Nom</label>
                <input
                  type='text'
                  name='name'
                  placeholder='Nom du produit'
                  required
                  className='border border-blue-400 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium text-white'>Prix</label>
                <input
                  type='number'
                  name='price'
                  placeholder='Prix'
                  required
                  className='border border-blue-400 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500'
                />
              </div>

              <div className='flex gap-3 mt-2'>
                <button
                  type='button'
                  onClick={() => setIsOpen(false)}
                  className='flex-1 py-2 border border-gray-300 text-white rounded-xl hover:bg-gray-50 transition-colors'
                >
                  Annuler
                </button>
                <button
                  type='submit'
                  className='flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors'
                >
                  Envoyer
                </button>
               
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  )
}
