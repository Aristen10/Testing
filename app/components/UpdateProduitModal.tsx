'use client'

import { useState, useTransition } from 'react'
import { updateProduit } from '@/action/action'

interface Props {
  id: string
  currentName: string
  currentPrice: number
}

export default function UpdateProduitModal({ id, currentName, currentPrice }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(formData: FormData) {
    setError(null)

    startTransition(async () => {
       await updateProduit(id, formData)
      
    })
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-colors'
      >
        ✏️ Modifier
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

            <h2 className='text-xl font-bold text-white mb-6'>Modifier le produit</h2>

            <form action={handleSubmit} className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium text-white'>Nom</label>
                <input
                  type='text'
                  name='name'
                  defaultValue={currentName}
                  required
                  className='border border-blue-400 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label className='text-sm font-medium text-white'>Prix</label>
                <input
                  type='number'
                  name='price'
                  step='0.01'
                  defaultValue={currentPrice}
                  required
                  className='border border-blue-400 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500'
                />
              </div>

              {error && <p className='text-red-200 text-sm'>❌ {error}</p>}

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
                  disabled={isPending}
                  className='flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50'
                >
                  {isPending ? 'Sauvegarde...' : 'Confirmer'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </>
  )
}