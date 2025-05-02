"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Menu, X, User, Bell, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Fizz</span>
              <span className="text-2xl font-bold text-gray-900">.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Home
            </Link>
            <Link
              href="/creators"
              className={`text-sm font-medium ${isActive("/creators") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Creators
            </Link>
            <Link
              href="/explore"
              className={`text-sm font-medium ${isActive("/explore") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Explore
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium ${isActive("/pricing") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`}
            >
              Pricing
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <Input type="search" placeholder="Search creators..." className="pl-10 py-1.5 text-sm" />
            </div>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Bell size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-700">
              <MessageCircle size={20} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Subscriptions</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button>Sign In</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/creators"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/creators") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Creators
            </Link>
            <Link
              href="/explore"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/explore") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/pricing"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/pricing") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4 space-y-3">
              <Link
                href="/signin"
                className="block text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block text-base font-medium text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
