import Link from "next/link"
import Header from "@/components/header"
import Breadcrumbs from "@/components/breadcrumbs"
import ProfessionalListItem from "@/components/professional-list-item"

export default function PlomerosPage() {
  const professionals = [
    {
      id: "juan-perez",
      name: "Juan Pérez",
      location: "Villa Urquiza",
      rating: 5,
      whatsappNumber: "5491123456789",
    },
    {
      id: "mario-gomez",
      name: "Mario Gómez",
      location: "Palermo",
      rating: 4,
      whatsappNumber: "5491198765432",
    },
    {
      id: "carlos-diaz",
      name: "Carlos Díaz",
      location: "Flores",
      rating: 5,
      whatsappNumber: "5491145678901",
    },
  ]

  const breadcrumbItems = [
    { label: "Categorías", href: "/categorias" },
    { label: "Plomeros", href: "/categorias/plomeros" },
  ]

  return (
    <div className="app-background">
      <Header activeTab="categorias" />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-black mb-4">Plomeros disponibles</h1>

        <div className="space-y-4">
          {professionals.map((professional) => (
            <ProfessionalListItem key={professional.id} professional={professional} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/categorias" className="text-[#8eaceb] hover:text-[#6d8fd6] inline-flex items-center">
            ← Volver a Categorías
          </Link>
        </div>
      </div>
    </div>
  )
}
