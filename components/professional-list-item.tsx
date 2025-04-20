"use client"

import Link from "next/link"
import StarRating from "./star-rating"
import { Button } from "@/components/ui/button"

interface Professional {
  id: string
  name: string
  location: string
  rating: number
  whatsappNumber: string
}

interface ProfessionalListItemProps {
  professional: Professional
}

export default function ProfessionalListItem({ professional }: ProfessionalListItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 text-center">
      <h3 className="text-xl font-bold text-black">{professional.name}</h3>
      <p className="text-gray-600 mb-2">Zona: {professional.location}</p>
      <div className="flex justify-center mb-3">
        <StarRating rating={professional.rating} />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <Link href={`/perfil/${professional.id}`}>
          <Button
            variant="default"
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black border border-gray-300 shadow-sm"
          >
            Ver Perfil
          </Button>
        </Link>
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
          onClick={() => window.open(`https://wa.me/${professional.whatsappNumber}`, "_blank")}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  )
}
