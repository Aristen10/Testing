import React from 'react'
import { prisma } from '../../lib/prisma'


export default async function page() {
    

    const produits = await prisma.produit.findMany()
  return (
    <>
    <div className='flex items-center justify-center p-2 border border-b-blue-950'>Voici la Liste de tout les produits disponibles</div>
    
        {produits.map(p => (
           <ul>
                <li>
                    {p.id}
                </li>
                <li>
                    {p.name}
                </li>
                 <li>
                    {p.price}
                </li>
           
            </ul>

        ))}

    
</>
  )
}

