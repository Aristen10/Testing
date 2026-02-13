'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
//Creation Produit
export async function CreateProduit(formData:FormData) {
    const name = formData.get('name') as string
    const priceString = formData.get('price');
    const price=parseInt(priceString as string) 

    if(!name || !price){
        
        return console.log("erreur ")

    }
    await prisma.produit.create({
    data:{
            name:name,
            price:price

    }
       
        })

     revalidatePath("/Produits")
}
//suppression
export async function deletePost(id: string) {
  try {
        await prisma.produit.delete({
        where: { id },
        })
        revalidatePath("/Produits")
    }
catch {
    return { error: "Erreur suppression" }
  }
}
//Modification

  

export async function updateProduit(id: string, Data: FormData) {
  const name = Data.get('name') as string
  const priceString = Data.get('price') as string
  const price = parseFloat(priceString)
try{
    await prisma.produit.update({
    where : {id},
    data:{name,price}

  })
  revalidatePath("/Produits")
  
}
catch{
     return { error: "Erreur lors de la modification" }
  }

}