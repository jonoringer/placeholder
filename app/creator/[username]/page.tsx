import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, ImageIcon, Video, FileText, Calendar } from "lucide-react"
import { creators } from "@/lib/data"
import ContentCard from "@/components/content-card"
import { notFound } from "next/navigation"

interface CreatorPageProps {
  params: {
    username: string
  }
}

export default function CreatorPage({ params }: CreatorPageProps) {
  const creator = creators.find((c) => c.username === params.username)

  if (!creator) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Creator Header */}
      <div className="relative">
        <div className="h-48 md:h-64 w-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24 sm:-mt-16 sm:flex sm:items-end sm:space-x-5 mb-6 sm:mb-10">
            <div className="relative h-40 w-40 rounded-xl overflow-hidden ring-4 ring-white">
              <Image
                src={creator.profileImage || "/placeholder.svg?height=400&width=400"}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 sm:mt-0 sm:flex-1 min-w-0">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-gray-900 truncate">{creator.name}</h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {creator.category}
                </span>
              </div>
              <p className="text-sm text-gray-500">@{creator.username}</p>
            </div>
            <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-3">
              <Button className="flex items-center gap-2">
                <MessageCircle size={16} />
                Message
              </Button>
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                Subscribe - ${creator.subscriptionPrice}/month
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-700 mb-6">{creator.bio}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-700">Joined May 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <ImageIcon size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-700">{creator.contentCount.images} photos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video size={18} className="text-gray-500" />
                  <span className="text-sm text-gray-700">{creator.contentCount.videos} videos</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Subscription Includes</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-500">
                    <ImageIcon size={18} />
                  </div>
                  <span className="text-gray-700">Full access to all photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-500">
                    <Video size={18} />
                  </div>
                  <span className="text-gray-700">Exclusive video content</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-500">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-gray-700">Direct messaging with creator</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 text-blue-500">
                    <FileText size={18} />
                  </div>
                  <span className="text-gray-700">Special content requests</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6 bg-white">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="locked">Locked</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {creator.content.map((item, index) => (
                    <ContentCard key={index} content={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="photos" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {creator.content
                    .filter((item) => item.type === "image")
                    .map((item, index) => (
                      <ContentCard key={index} content={item} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {creator.content
                    .filter((item) => item.type === "video")
                    .map((item, index) => (
                      <ContentCard key={index} content={item} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="locked" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {creator.content
                    .filter((item) => item.locked)
                    .map((item, index) => (
                      <ContentCard key={index} content={item} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
