import React from 'react'
import { prisma } from '../../lib/prisma'
import { CreateProduit } from '@/action/action'
import Link from 'next/link'
import Card from '../components/Card'
import AddProduitModal from '../components/AddProduitModal'


export default async function page() {
    

    const produits = await prisma.produit.findMany()
  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex items-center justify-center py-2 px-8 rounded-bl-3xl rounded-tr-3xl border border-blue-800 text-2xl font-semibold'>Voici la Liste de tout les produits disponibles</div>
        <div className='grid grid-cols-4  gap-10 px-64 py-8'>
            {produits.map(p => (
                <Card key={p.id}  name={p.name} price={p.price}/>

            ))}
        </div>
    
       {/*<div className='w-md'>
            <form action={CreateProduit} className='bg-blue-300 p-5 flex   flex-col gap-3 rounded-sm'>
                <label htmlFor=""  className='flex'>Name</label>
                <input type="text" name='name' placeholder='  name' className='pb-2 border border-blue-400 rounded-2xl'/>

                 <label htmlFor="">Price</label>
                <input type="number" name='price' placeholder=' price' className='pb-2 border border-blue-400 rounded-2xl'/>

                <button type='submit'  className='p-3 font-bold bg-blue-400 hover:bg-blue-500 rounded-4xl'>Envoyer</button>

            </form>


       </div>*/}
       <AddProduitModal />
       
            
        

    
</div>
  )
}

