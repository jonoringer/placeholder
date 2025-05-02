"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Lock } from "lucide-react"
import type { Content } from "@/lib/types"

interface ContentCardProps {
  content: Content
}

export default function ContentCard({ content }: ContentCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(content.likes)

  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1)
    } else {
      setLikeCount((prev) => prev + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
      <div className="relative aspect-square w-full">
        <Image
          src={content.thumbnail || "/placeholder.svg?height=600&width=600"}
          alt={content.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {content.locked && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
            <Lock size={32} className="mb-2" />
            <p className="font-medium">Subscribe to unlock</p>
            <Button size="sm" className="mt-3">
              Subscribe Now
            </Button>
          </div>
        )}
        {content.type === "video" && !content.locked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium mb-2">{content.title}</h3>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <Heart size={18} className={isLiked ? "fill-red-500 text-red-500" : ""} />
              <span>{likeCount}</span>
            </button>

            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <MessageCircle size={18} />
              <span>{content.comments}</span>
            </button>
          </div>

          <span className="text-xs text-gray-500">{content.date}</span>
        </div>
      </div>
    </div>
  )
}
