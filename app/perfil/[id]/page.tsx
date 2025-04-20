"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Breadcrumbs from "@/components/breadcrumbs"
import StarRating from "@/components/star-rating"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

interface ProfileParams {
  params: {
    id: string
  }
}

export default function PerfilPage({ params }: ProfileParams) {
  // En una aplicación real, obtendrías estos datos basados en el ID
  const professional = {
    id: params.id,
    name: "Juan Pérez",
    profession: "Plomero",
    location: "Villa Urquiza",
    phone: "11-1234-5678",
    rating: 5,
    whatsappNumber: "5491123456789",
    description:
      "Plomero con más de 10 años de experiencia. Trabajo responsable, prolijo y garantizado. Atenciones urgentes y presupuesto sin cargo.",
    reviews: ["Excelente trabajo y buena onda!", "Rápido y muy prolijo.", "Lo recomiendo 100%."],
  }

  const breadcrumbItems = [
    { label: "Categorías", href: "/categorias" },
    { label: "Plomeros", href: "/categorias/plomeros" },
    { label: professional.name, href: `/perfil/${params.id}` },
  ]

  return (
    <div className="app-background">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/placeholder.svg?height=120&width=120"
              alt={professional.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
          </div>

          <h2 className="text-2xl font-bold mb-1">{professional.name}</h2>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Oficio:</span> {professional.profession}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Zona:</span> {professional.location}
          </p>
          <p className="text-gray-600 mb-3">
            <span className="font-semibold">Teléfono:</span> {professional.phone}
          </p>

          <div className="flex justify-center mb-4">
            <StarRating rating={professional.rating} />
          </div>

          <div className="mb-6">
            <p className="text-gray-700">{professional.description}</p>
          </div>

          <Button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md flex items-center justify-center gap-2 w-full sm:w-auto"
            onClick={() => window.open(`https://wa.me/${professional.whatsappNumber}`, "_blank")}
          >
            <MessageSquare size={20} />
            Contactar por WhatsApp
          </Button>

          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-3 text-black">Opiniones</h3>
            <div className="space-y-3">
              {professional.reviews.map((review, index) => (
                <div key={index} className="bg-[#e6ecf8] p-3 rounded-md text-gray-700">
                  "{review}"
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/categorias/plomeros" className="text-[#8eaceb] hover:text-[#6d8fd6] inline-flex items-center">
            ← Volver a Plomeros
          </Link>
        </div>
      </div>
    </div>
  )
}
