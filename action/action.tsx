'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
//Creation Produit
export async function CreateProduit(formData:FormData) {
    const name = formData.get('name') as string
    const priceString = formData.get('price') as string;
    const stockString = formData.get('stock') as string
     const price=parseInt(priceString) 
    const stock = parseInt(stockString)
    

    if(!name || !price){
        
        return console.log("erreur ")

    }
    await prisma.produit.create({
    data:{
            name:name,
            price:price,
            stock:stock

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

  

export async function updateProduit(id: string, formData: FormData) {
  const name = formData.get('name') as string
  const priceString = formData.get('price') as string
  const stockString = formData.get('stock') as string
  const price = parseFloat(priceString)
  const stock = parseInt(stockString)
try{
    await prisma.produit.update({
    where : {id},
    data:{name,price,stock}

  })
  revalidatePath("/Produits")
  
}
catch{
     return { error: "Erreur lors de la modification" }
  }

}