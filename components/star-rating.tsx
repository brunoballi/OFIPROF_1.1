import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  )
}
