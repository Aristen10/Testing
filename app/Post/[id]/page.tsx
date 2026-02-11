import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link'; 
import prisma from '@/lib/prisma';
import { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string) {
  try {
    return await prisma.produit.findUnique({ where: { id } });
  } catch (error) {
    console.error('❌ Erreur Prisma:', error);
    return null;
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  return { 
    title: product ? `${product.name} - ${product.price}Ar` : 'Produit introuvable' 
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        
    
        <Link href="/Post" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Retour à la liste
        </Link>

       
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
          <div className="bg-blue-600 p-8 text-white">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="opacity-80">ID: {product.id}</p>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-500 font-medium">Prix unitaire</span>
              <span className="text-4xl font-black text-blue-600">{product.price?.toFixed(2)} Ar</span>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/products/${product.id}/edit`}
                className="flex-1 text-center bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
              >
                Modifier
              </Link>
              
             
              <button className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl font-bold hover:bg-red-100 transition-colors">
                Supprimer
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}