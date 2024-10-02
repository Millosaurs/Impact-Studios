'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap, ArrowRight, Sun, Moon } from "lucide-react"
import { ThemeProvider, useTheme } from "next-themes"
import { motion } from "framer-motion"

// ThemeToggle component (reused from other pages)
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:glow-effect"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

// SignIn component
function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle sign-in logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium block text-left">Email</label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium block text-left">Password</label>
        <Input id="password" type="password" placeholder="Enter your password" required />
      </div>
      <Button type="submit" className="w-full glow-effect hover:glow-effect-hover">
        Sign In
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  )
}

// SignUp component
function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle sign-up logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium block text-left">Full Name</label>
        <Input id="name" type="text" placeholder="Enter your full name" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium block text-left">Email</label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium block text-left">Password</label>
        <Input id="password" type="password" placeholder="Create a password" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="confirm-password" className="text-sm font-medium block text-left">Confirm Password</label>
        <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
      </div>
      <Button type="submit" className="w-full glow-effect hover:glow-effect-hover">
        Sign Up
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  )
}

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin')

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-black text-black dark:text-white transition-colors duration-500">
        <header className="px-6 h-16 flex items-center justify-center sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/20">
          <div className="container flex items-center justify-between">
            <Link className="flex items-center justify-center" href="/">
              <Zap className="h-8 w-8 mr-3 text-black dark:text-white" />
              <span className="font-bold text-xl">Impact Studios</span>
            </Link>
            <nav className="flex gap-6 items-center">
              <Link className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="/">
                Home
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full py-24 md:py-32 lg:py-40 xl:py-48"
          >
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl glow-text">
                    {activeTab === 'signin' ? 'Welcome Back' : 'Join Impact Studios'}
                  </h1>
                  <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
                    {activeTab === 'signin' ? 'Sign in to your account to continue your journey.' : 'Create an account to start making an impact with us.'}
                  </p>
                </div>
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant={activeTab === 'signin' ? 'default' : 'ghost'}
                        onClick={() => setActiveTab('signin')}
                        className={`flex-1 ${activeTab === 'signin' ? 'glow-effect' : ''}`}
                      >
                        Sign In
                      </Button>
                      <Button
                        variant={activeTab === 'signup' ? 'default' : 'ghost'}
                        onClick={() => setActiveTab('signup')}
                        className={`flex-1 ${activeTab === 'signup' ? 'glow-effect' : ''}`}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {activeTab === 'signin' ? <SignIn /> : <SignUp />}
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.section>
        </main>
        <footer className="py-8 w-full shrink-0 border-t border-gray-200 dark:border-white/20">
          <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">© 2024 Impact Studios. All rights reserved.</p>
            <nav className="flex gap-6">
              <Link className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
