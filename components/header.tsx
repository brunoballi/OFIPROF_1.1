"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface HeaderProps {
  activeTab?: "home" | "categorias"
  title?: string
}

export default function Header({ activeTab, title }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="header-background text-black p-4 shadow-md relative z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-black mr-1"
              onClick={() => router.back()}
              aria-label="Volver atrás"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Link href="/home" className="text-2xl font-bold">
              OFIPROF
              <span className="block text-xs text-gray-800">Oficios y profesionales de confianza a un click</span>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-black">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/home" className="text-lg font-medium hover:text-gray-600">
                  Home
                </Link>
                <Link href="/categorias" className="text-lg font-medium hover:text-gray-600">
                  Categorías
                </Link>
                <Link href="/busqueda" className="text-lg font-medium hover:text-gray-600">
                  Buscar
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop tabs */}
          {activeTab && (
            <div className="hidden md:flex space-x-2">
              <Link
                href="/home"
                className={`px-4 py-2 rounded-t-md ${
                  activeTab === "home" ? "bg-green-600 text-white" : "bg-[#6d8fd6] hover:bg-[#5a7bc0] text-black"
                }`}
              >
                Home
              </Link>
              <Link
                href="/categorias"
                className={`px-4 py-2 rounded-t-md ${
                  activeTab === "categorias" ? "bg-green-600 text-white" : "bg-[#6d8fd6] hover:bg-[#5a7bc0] text-black"
                }`}
              >
                Categorías
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
