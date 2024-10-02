'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap, ArrowRight, Sun, Moon } from "lucide-react"
import { ThemeProvider, useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// ThemeToggle component to switch between light and dark modes
function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

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

// LoadingScreen component to show a loading animation
function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.5, repeat: 1 }}
      >
        <Zap className="h-16 w-16" />
      </motion.div>
      <span className="mt-4 text-2xl font-bold">Impact Studios</span>
    </div>
  )
}

export default function RecruitPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      // Send form data to the backend API
      const response = await fetch('/api/recruit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await response.json()
      console.log('Success:', result)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

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
                    Recruit Top Freelancers
                  </h1>
                  <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
                    Find the best talent to bring your projects to life. Fill out the form below to get started.
                  </p>
                </div>
                <Card className="w-full max-w-2xl">
                  <CardHeader>
                    <CardTitle>Recruitment Form</CardTitle>
                    <CardDescription>Provide details about your project and the type of freelancers you need.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="space-y-2 flex items-center">
                        <label htmlFor="company-name" className="w-1/4 text-left">Company Name</label>
                        <Input id="company-name" name="companyName" placeholder="Enter your company name" required className="w-3/4" />
                      </div>
                      <div className="space-y-2 flex items-center">
                        <label htmlFor="email" className="w-1/4 text-left">Email</label>
                        <Input id="email" name="email" type="email" placeholder="Enter a valid email" required className="w-3/4" />
                      </div>
                      <div className="space-y-2 flex items-center">
                        <label htmlFor="discord-username" className="w-1/4 text-left">Discord Username</label>
                        <Input id="discord-username" name="discordUsername" placeholder="Enter your Discord username" required className="w-3/4" />
                      </div>
                      <div className="space-y-2 flex items-center">
                        <label htmlFor="project-details" className="w-1/4 text-left">Project Details</label>
                        <textarea 
                          id="project-details" 
                          name="projectDetails"
                          className="w-3/4 h-32 px-3 py-2 text-sm rounded-md border border-input bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" 
                          placeholder="Describe your project and the skills you need"
                          required
                        ></textarea>
                      </div>
                      <div className="space-y-2 flex items-center">
                        <label htmlFor="budget" className="w-1/4 text-left">Budget</label>
                        <Input id="budget" name="budget" placeholder="Enter your budget" required className="w-3/4" />
                      </div>
                      <Button type="submit" className="w-full glow-effect hover:glow-effect-hover">
                        Submit Recruitment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
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