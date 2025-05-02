import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import CreatorCard from "@/components/creator-card"
import { creators } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet Your Favorite AI Creators on Fizz</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subscribe to exclusive AI-generated content from the most creative minds in the digital world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
              Join Fizz Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-white/20">
              Browse Creators
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Creators</h2>
            <Link href="/creators" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
              View all creators <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creators.slice(0, 8).map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get unlimited access to your favorite AI creators with our flexible subscription options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="border rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">Basic</h3>
              <p className="text-3xl font-bold mb-4">
                $9.99<span className="text-base font-normal text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Access to 5 creators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Basic content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Weekly updates</span>
                </li>
              </ul>
              <Button className="w-full">Subscribe Now</Button>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-xl p-8 bg-gradient-to-b from-blue-50 to-white shadow-md relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <p className="text-3xl font-bold mb-4">
                $19.99<span className="text-base font-normal text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Access to all creators</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Premium content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Daily updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Direct messaging</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe Now</Button>
            </div>

            {/* VIP Plan */}
            <div className="border rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2">VIP</h3>
              <p className="text-3xl font-bold mb-4">
                $39.99<span className="text-base font-normal text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>All Premium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Exclusive VIP content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Priority requests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-blue-500" />
                  <span>Early access to new content</span>
                </li>
              </ul>
              <Button className="w-full">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Fizz?</h2>
          <p className="text-xl mb-8 text-white/90">Sign up today and get your first month at 50% off!</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}
