"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import type { Creator } from "@/lib/types"

interface CreatorCardProps {
  creator: Creator
}

export default function CreatorCard({ creator }: CreatorCardProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={creator.profileImage || "/placeholder.svg?height=400&width=400"}
          alt={creator.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        >
          <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : "text-gray-600"} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg">{creator.name}</h3>
            <p className="text-gray-500 text-sm">@{creator.username}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">{creator.category}</div>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{creator.bio}</p>

        <div className="flex justify-between items-center">
          <div className="text-sm">
            <span className="font-medium">${creator.subscriptionPrice}</span>
            <span className="text-gray-500">/month</span>
          </div>
          <Link href={`/creator/${creator.username}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
