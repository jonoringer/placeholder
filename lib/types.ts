export interface Creator {
  id: string
  name: string
  username: string
  bio: string
  category: string
  profileImage: string
  coverImage?: string
  subscriptionPrice: number
  contentCount: {
    images: number
    videos: number
    posts: number
  }
  content: Content[]
}

export interface Content {
  id: string
  title: string
  type: "image" | "video" | "post"
  thumbnail: string
  url?: string
  locked: boolean
  likes: number
  comments: number
  date: string
}
