"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import Header from "@/components/header"
import Breadcrumbs from "@/components/breadcrumbs"
import ProfessionalCard from "@/components/professional-card"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setShowSuggestions(e.target.value.length > 0)
  }

  const suggestions = ["Plomero", "Electricista", "Gasista", "Albañil", "Carpintero"]

  const breadcrumbItems = [{ label: "Inicio", href: "/home" }]

  return (
    <div className="app-background">
      <Header activeTab="home" />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-6">
        <div className="relative mx-auto max-w-md">
          <input
            type="text"
            placeholder="Buscar oficio o profesional..."
            className="w-full p-3 pr-10 border border-gray-300 rounded-md shadow-sm"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

          {showSuggestions && (
            <div className="absolute z-10 w-full bg-white mt-1 rounded-md shadow-md">
              {suggestions
                .filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((suggestion, index) => (
                  <Link
                    key={index}
                    href={`/categorias/${suggestion.toLowerCase()}`}
                    className="block p-2 hover:bg-gray-100"
                  >
                    {suggestion}
                  </Link>
                ))}
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-center mt-10 mb-6 text-black">Profesionales Destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProfessionalCard
            name="Juan Pérez"
            profession="Plomero"
            location="Villa Urquiza"
            rating={5}
            comment="Excelente servicio."
            imageUrl="/placeholder.svg?height=120&width=120"
            profileUrl="/perfil/juan-perez"
          />

          <ProfessionalCard
            name="Laura Gómez"
            profession="Electricista"
            location="Palermo"
            rating={4}
            comment="Muy responsable."
            imageUrl="/placeholder.svg?height=120&width=120"
            profileUrl="/perfil/laura-gomez"
          />

          <ProfessionalCard
            name="Carlos Díaz"
            profession="Gasista"
            location="Flores"
            rating={5}
            comment="Precio justo y excelente trabajo."
            imageUrl="/placeholder.svg?height=120&width=120"
            profileUrl="/perfil/carlos-diaz"
          />
        </div>
      </div>
    </div>
  )
}
