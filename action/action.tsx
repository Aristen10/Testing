'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export async function CreateProduit(formData:FormData) {
    const name = formData.get('name') as string
    const priceString = formData.get('price');
    const price=parseInt(priceString as string) 

    if(!name || !price){
        
        return console.log("erreur fdp")

    }
    await prisma.produit.create({
    data:{
            name:name,
            price:price

    }
       
        })
     revalidatePath("/app/Produits")
}