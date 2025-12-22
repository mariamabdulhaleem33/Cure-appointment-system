import { Star } from "lucide-react"

const StarRating = () => {
  return (
    <div className="flex flex-col w-fit items-start gap-1 p-4">
      {/* The Dotted Blue Line */}
      <div className="w-full border-t-4 border-dotted border-blue-400 mb-1" />

      {/* The Star Icons Row */}
      <div className="flex flex-row gap-1 px-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={32}
            className="fill-yellow-400 text-yellow-400"
            // Adding a slight drop shadow or stroke to match the "bold" look in your image
            strokeWidth={1}
          />
        ))}
      </div>
    </div>
  )
}

export default StarRating
