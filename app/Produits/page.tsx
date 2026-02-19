import React from 'react'
import { prisma } from '../../lib/prisma'
import { CreateProduit } from '@/action/action'
import Card from '../components/Card'
import AddProduitModal from '../components/AddProduitModal'
import ScrollReveal from '../components/ScrollReveal'
import Footer from '../components/Footer'


export default async function page() {
    

    const produits = await prisma.produit.findMany()
  return (
    <div className='flex items-center justify-center flex-col'>
   x
        <ScrollReveal>
          <div className='grid xl:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2 gap-10 px-64 py-8'>
            {produits.map(p => (
                <Card
                  key={p.id}      
                  id={p.id}       
                  name={p.name}
                  price={p.price}
                  stock={p.stock}
                />

            ))}
        </div>
        
      </ScrollReveal>

    
       <AddProduitModal />
       <Footer/>
       
    
</div>
  )
}

