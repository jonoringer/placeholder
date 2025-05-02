import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import CreatorCard from "@/components/creator-card"
import { creators } from "@/lib/data"

export default function CreatorsPage() {
  const categories = Array.from(new Set(creators.map((creator) => creator.category)))

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover AI Creators</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find and subscribe to the most innovative AI creators on Fizz
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <Input type="search" placeholder="Search creators..." className="pl-10 py-2" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-5">Under $5</SelectItem>
                  <SelectItem value="5-10">$5 - $10</SelectItem>
                  <SelectItem value="10-15">$10 - $15</SelectItem>
                  <SelectItem value="15+">$15+</SelectItem>
                </SelectContent>
              </Select>
              <Button>Filter</Button>
            </div>
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  )
}
