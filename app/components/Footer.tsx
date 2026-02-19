'use client'

import Link from 'next/link'
import { Package } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="
      w-full
      border-t border-zinc-200 dark:border-zinc-800
      bg-white dark:bg-black
      mt-10
    ">
      <div className="
        max-w-7xl mx-auto
        px-6 py-8
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
      ">
        
        
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-600 text-white">
            <Package size={20} />
          </div>
          <span className="text-lg font-bold text-zinc-800 dark:text-white">
            GStock
          </span>
        </div>

       
        <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="#" className="hover:text-blue-600 transition">
            Accueil
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Produits
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        
        <p className="text-sm text-zinc-500 text-center md:text-right">
          © {new Date().getFullYear()} GStock. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
