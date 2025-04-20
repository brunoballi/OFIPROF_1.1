"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import Header from "@/components/header"
import Breadcrumbs from "@/components/breadcrumbs"
import ProfessionalSearchItem from "@/components/professional-search-item"

export default function BusquedaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [professionals, setProfessionals] = useState([
    {
      id: "juan-perez",
      name: "Juan Pérez",
      profession: "Plomero",
      location: "Villa Urquiza",
      rating: 5,
      whatsappNumber: "5491123456789",
    },
    {
      id: "maria-gomez",
      name: "María Gómez",
      profession: "Electricista",
      location: "Palermo",
      rating: 4,
      whatsappNumber: "5491198765432",
    },
    {
      id: "roberto-diaz",
      name: "Roberto Díaz",
      profession: "Gasista",
      location: "Belgrano",
      rating: 3,
      whatsappNumber: "5491145678901",
    },
  ])

  const [filteredProfessionals, setFilteredProfessionals] = useState(professionals)

  useEffect(() => {
    if (searchQuery) {
      const filtered = professionals.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredProfessionals(filtered)
    } else {
      setFilteredProfessionals(professionals)
    }
  }, [searchQuery, professionals])

  const breadcrumbItems = [{ label: "Búsqueda", href: "/busqueda" }]

  return (
    <div className="app-background">
      <Header title="Buscar Profesional" />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-6">
        <div className="relative mx-auto max-w-md mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre, oficio o zona..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="space-y-4">
          {filteredProfessionals.map((professional) => (
            <ProfessionalSearchItem key={professional.id} professional={professional} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/home" className="text-[#8eaceb] hover:text-[#6d8fd6] inline-flex items-center">
            ← Volver al Home
          </Link>
        </div>
      </div>
    </div>
  )
}
