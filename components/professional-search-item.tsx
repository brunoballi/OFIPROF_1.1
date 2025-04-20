"use client"

import StarRating from "./star-rating"
import { Button } from "@/components/ui/button"

interface Professional {
  id: string
  name: string
  profession: string
  location: string
  rating: number
  whatsappNumber: string
}

interface ProfessionalSearchItemProps {
  professional: Professional
}

export default function ProfessionalSearchItem({ professional }: ProfessionalSearchItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-black">{professional.name}</h3>
      <p className="text-gray-600">
        {professional.profession} - {professional.location}
      </p>
      <div className="flex items-center my-2">
        <StarRating rating={professional.rating} />
      </div>
      <Button
        variant="default"
        className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
        onClick={() => window.open(`https://wa.me/${professional.whatsappNumber}`, "_blank")}
      >
        WhatsApp
      </Button>
    </div>
  )
}
