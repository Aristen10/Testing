import React from 'react'
import { prisma } from '../../lib/prisma'
import { CreateProduit } from '@/action/action'
import Link from 'next/link'


export default async function page() {
    

    const produits = await prisma.produit.findMany()
  return (
    <>
    <div className='flex items-center justify-center p-2 border border-blue-950'>Voici la Liste de tout les produits disponibles</div>
    
        {produits.map(p => (
           <ul key={p.id}>
                
                <li>
                    {p.name}
                </li>
                 <li>
                    {p.price}
                </li>
                <Link href={`/Post/${p.id}`} className='p-2 bg-blue-600 rounded-xl hover:bg-blue-400 '>Voir plus</Link>
           
            </ul>

        ))}
       
            <form action={CreateProduit} className='bg-blue-300 p-5 flex   flex-col gap-3'>
                <label htmlFor=""  className='flex'>Name</label>
                <input type="text" name='name' placeholder='  name' className='pb-2 border border-blue-400 rounded-2xl'/>

                 <label htmlFor="">Price</label>
                <input type="number" name='price' placeholder=' price' className='pb-2 border border-blue-400 rounded-2xl'/>

                <button type='submit'  className='p-3 font-bold bg-blue-400 hover:bg-blue-500 rounded-4xl'>Envoyer</button>

            </form>
        

    
</>
  )
}

