import Image from "next/image"
import Link from "next/link"
import StarRating from "./star-rating"
import { Button } from "@/components/ui/button"

interface ProfessionalCardProps {
  name: string
  profession: string
  location: string
  rating: number
  comment: string
  imageUrl: string
  profileUrl: string
}

export default function ProfessionalCard({
  name,
  profession,
  location,
  rating,
  comment,
  imageUrl,
  profileUrl,
}: ProfessionalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">
        {profession} - {location}
      </p>
      <div className="flex justify-center my-2">
        <StarRating rating={rating} />
      </div>
      <p className="text-gray-500 text-sm italic mb-4">"{comment}"</p>

      <Link href={profileUrl}>
        <Button
          variant="default"
          className="w-full bg-white hover:bg-gray-100 text-black border border-gray-300 shadow-sm"
        >
          Ver Perfil
        </Button>
      </Link>
    </div>
  )
}
