"use client";

import Link from "next/link";
import { useState } from "react";
import { Package, LayoutDashboard, ShoppingCart, Users, Settings, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm border-b">
      <div className="mx-6 sm:mx-12 flex items-center justify-between py-4">

        
        <Link href="/" className="flex items-center space-x-2">
          <Package className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-semibold text-gray-800">
           GStock
          </span>
        </Link>

        
        <nav className="hidden md:flex items-center space-x-8 text-gray-600 font-medium">

          <Link href="/dashboard" className="flex items-center gap-2 hover:text-blue-600 transition">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

          <Link href="/Produits" className="flex items-center gap-2 hover:text-blue-600 transition">
            <Package size={18} />
            Produits
          </Link>

          <Link href="/commandes" className="flex items-center gap-2 hover:text-blue-600 transition">
            <ShoppingCart size={18} />
            Commandes
          </Link>

          <Link href="/parametres" className="flex items-center gap-2 hover:text-blue-600 transition">
            <Settings size={18} />
            Paramètres
          </Link>

        </nav>

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu className="text-gray-700"/>
        </button>

      </div>

  
        <div
        className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
        <div className="bg-gray-700 border-t shadow-sm px-6 py-4 space-y-4">
            <Link href="/dashboard" className="block text-white">Dashboard</Link>
            <Link href="/produits" className="block text-white">Produits</Link>
            <Link href="/commandes" className="block text-white">Commandes</Link>
            <Link href="/fournisseurs" className="block text-white">Fournisseurs</Link>
            <Link href="/parametres" className="block text-white">Paramètres</Link>
        </div>
        </div>
      
    </header>
  );
}
