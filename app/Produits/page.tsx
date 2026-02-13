import React from 'react'
import { prisma } from '../../lib/prisma'
import { CreateProduit } from '@/action/action'
import Card from '../components/Card'
import AddProduitModal from '../components/AddProduitModal'


export default async function page() {
    

    const produits = await prisma.produit.findMany()
  return (
    <div className='flex items-center justify-center flex-col'>
    <div className='flex items-center justify-center py-2 px-8 rounded-bl-3xl rounded-tr-3xl border border-blue-800 text-2xl font-semibold'>Voici la Liste de tout les produits disponibles</div>
        <div className='grid grid-cols-4  gap-10 px-64 py-8'>
            {produits.map(p => (
                <Card
                  key={p.id}      
                  id={p.id}       
                  name={p.name}
                  price={p.price}
                />

            ))}
        </div>
    
       <AddProduitModal />
       
            
        

    
</div>
  )
}

