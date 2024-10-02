'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Code, PenTool, Megaphone, CheckCircle, ArrowRight, Sun, Moon, Camera, Palette, Rocket, Zap, Server, Settings, FileText, Video, Brush, Edit3 } from "lucide-react"
import { ThemeProvider, useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <Code className="h-12 w-12 mb-6" />,
    title: "Custom MC Plugin Development",
    description: "Tailored Minecraft plugins to enhance your server's functionality."
  },
  {
    icon: <Code className="h-12 w-12 mb-6" />,
    title: "Bot Development (Discord, etc.)",
    description: "Custom bots for Discord and other platforms to automate and enhance your community."
  },
  {
    icon: <Code className="h-12 w-12 mb-6" />,
    title: "Web Development",
    description: "Cutting-edge websites and web applications tailored to your unique vision."
  },
  {
    icon: <Code className="h-12 w-12 mb-6" />,
    title: "Skript Development",
    description: "Custom scripts to automate and enhance your Minecraft server."
  },
  {
    icon: <Server className="h-12 w-12 mb-6" />,
    title: "Minecraft Server Setup",
    description: "Complete setup services for your Minecraft server."
  },
  {
    icon: <Server className="h-12 w-12 mb-6" />,
    title: "Discord Server Setup",
    description: "Professional setup for your Discord server to ensure smooth operation."
  },
  {
    icon: <Settings className="h-12 w-12 mb-6" />,
    title: "MC Configuration Services",
    description: "Expert configuration services for your Minecraft server."
  },
  {
    icon: <Settings className="h-12 w-12 mb-6" />,
    title: "Tebex Store Setup",
    description: "Setup and configuration of your Tebex store for seamless transactions."
  },
  {
    icon: <PenTool className="h-12 w-12 mb-6" />,
    title: "Professional Graphic Design",
    description: "Stunning visuals that capture your brand's essence and leave a lasting impression."
  },
  {
    icon: <Brush className="h-12 w-12 mb-6" />,
    title: "Illustrations",
    description: "Custom illustrations to bring your ideas to life."
  },
  {
    icon: <Brush className="h-12 w-12 mb-6" />,
    title: "MC Custom Texture Packs",
    description: "Unique texture packs to enhance your Minecraft experience."
  },
  {
    icon: <Brush className="h-12 w-12 mb-6" />,
    title: "MC Model Design",
    description: "Custom models for your Minecraft server."
  },
  {
    icon: <Video className="h-12 w-12 mb-6" />,
    title: "Video Editing",
    description: "Professional video editing services to create engaging content."
  },
  {
    icon: <Edit3 className="h-12 w-12 mb-6" />,
    title: "Expert Minecraft Builders",
    description: "Skilled builders to create stunning structures in Minecraft."
  },
  {
    icon: <Edit3 className="h-12 w-12 mb-6" />,
    title: "MC Terraforming for Maps & Worlds",
    description: "Expert terraforming services to create custom maps and worlds."
  },
  {
    icon: <FileText className="h-12 w-12 mb-6" />,
    title: "Content Writing & Scripts",
    description: "Professional writing services for content and scripts."
  }
]

const steps = [
  { number: 1, title: "Share Your Vision", description: "Tell us about your project and the impact you want to make." },
  { number: 2, title: "Meet Your Team", description: "We'll match you with the perfect blend of creative talent for your needs." },
  { number: 3, title: "Create Impact", description: "Collaborate with our experts to bring your ideas to life and make a difference." }
]

const testimonials = [
  {
    quote: "Impact Studios transformed our online presence with a website that truly reflects our brand's energy and vision.",
    author: "Alex M., Tech Startup Founder"
  },
  {
    quote: "The design team at Impact Studios created a visual identity that perfectly captures the essence of our company.",
    author: "Samantha L., Creative Director"
  },
  {
    quote: "Thanks to Impact Studios' marketing expertise, our audience engagement has reached new heights.",
    author: "David K., Non-Profit Organization"
  },
  {
    quote: "The UI/UX design provided by Impact Studios significantly improved our app's user satisfaction and retention rates.",
    author: "Emily R., Mobile App Developer"
  },
  {
    quote: "Impact Studios' SEO services have dramatically increased our organic traffic and lead generation.",
    author: "Michael T., E-commerce Business Owner"
  }
]

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

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [visibleServices, setVisibleServices] = useState(3)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const showMoreServices = () => {
    setVisibleServices(prev => Math.min(prev + 3, services.length))
  }

  if (isLoading) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <LoadingScreen />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-black text-black dark:text-white transition-colors duration-500">
        <header className="px-6 h-16 flex items-center justify-center sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/20">
          <div className="container flex items-center justify-between">
            <Link className="flex items-center justify-center" href="#">
              <Zap className="h-8 w-8 mr-3 text-black dark:text-white" />
              <span className="font-bold text-xl">Impact Studios</span>
            </Link>
            <nav className="flex gap-6 items-center">
              <Link className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#services">
                Services
              </Link>
              <Link className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="#testimonials">
                Testimonials
              </Link>
              <Link className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="/pages/application">
                Application
              </Link>
              <Link className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors" href="/pages/recruit">
                Recruit
              </Link>
              <Button asChild size="sm" className="glow-effect hover:glow-effect-hover">
                <Link href="/pages/auth">Start <ArrowRight size={20} /></Link>
              </Button>
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
                    Create Impact with Innovative Solutions
                  </h1>
                  <p className="mx-auto max-w-[800px] text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
                    Partner with Impact Studios to bring your vision to life. From web development to marketing, we're here to make a difference.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                  <Button asChild size="lg" className="glow-effect hover:glow-effect-hover">
                    <Link href="/pages/auth">Start Your Project</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="glow-effect-outline hover:glow-effect-outline-hover">
                    <Link href="#services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="services" 
            className="w-full py-24 md:py-32 lg:py-40 bg-gray-100 dark:bg-black"
          >
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16 glow-text">Our Services</h2>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, visibleServices).map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
              {visibleServices < services.length && (
                <div className="mt-12 text-center">
                  <Button onClick={showMoreServices} className="glow-effect hover:glow-effect-hover">
                    Show More Services
                  </Button>
                </div>
              )}
            </div>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="how-it-works" 
            className="w-full py-24 md:py-32 lg:py-40"
          >
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16 glow-text">How We Create Impact</h2>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center w-full md:w-1/3">
                    <StepCard {...step} />
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="testimonials" 
            className="w-full py-24 md:py-32 lg:py-40 bg-gray-100 dark:bg-black"
          >
            <div className="container px-4 md:px-6 mx-auto">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-16 glow-text">Impact We've Made</h2>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>
            </div>
          </motion.section>
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-24 md:py-32 lg:py-40"
          >
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl glow-text">
                    Ready to Make an Impact?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
                    Join Impact Studios today and let's create something extraordinary together.
                  </p>
                </div>
                <div className="w-full max-w-md space-y-4">
                  <Button asChild size="lg" className="glow-effect hover:glow-effect-hover">
                    <Link href="https://discord.com/invite/your-invite-link">
                      Join Our Discord
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    By joining, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
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

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-center mb-6">{icon}</div>
        <CardTitle className="text-2xl text-center glow-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <Card className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 rounded-full bg-black dark:bg-white text-white dark:text-black text-3xl font-bold flex items-center justify-center glow-effect">
            {number}
          </div>
          <CardTitle className="text-2xl text-center glow-text flex-1">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-lg">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <Card className="bg-white dark:bg-black border border-gray-200 dark:border-white/20 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-center mb-6">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="text-center italic mb-6 text-gray-600 dark:text-gray-300 text-lg">"{quote}"</blockquote>
        <p className="text-center font-semibold text-lg glow-text">- {author}</p>
      </CardContent>
    </Card>
  )
}