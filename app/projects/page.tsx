"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Filter, X } from "lucide-react"
import ProjectCard from "@/components/project-card"

// Extended project type with more details
interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  featured?: boolean
  year?: string
}

export default function ProjectsPage() {
  // More comprehensive project list
  const allProjects: Project[] = [
    {
      title: "Immersive 3D Experience",
      description: "An interactive 3D website with WebGL and Three.js animations",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Three.js", "WebGL", "GSAP"],
      link: "#",
      featured: true,
      year: "2023",
    },
    {
      title: "E-commerce Animation",
      description: "Smooth animated e-commerce experience with micro-interactions",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Framer Motion", "React", "Tailwind"],
      link: "#",
      featured: true,
      year: "2023",
    },
    {
      title: "Interactive Dashboard",
      description: "Data visualization dashboard with animated charts and transitions",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["D3.js", "SVG Animation", "React"],
      link: "#",
      featured: true,
      year: "2022",
    },
    {
      title: "Digital Art Gallery",
      description: "Canvas-based digital art gallery with interactive elements",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Canvas API", "GSAP", "JavaScript"],
      link: "#",
      featured: true,
      year: "2022",
    },
    {
      title: "Portfolio for Photographer",
      description: "Minimalist portfolio with focus on visual storytelling",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Framer Motion", "CSS Grid"],
      link: "#",
      year: "2022",
    },
    {
      title: "Music Streaming App",
      description: "Interactive music player with visualizations and animations",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Web Audio API", "CSS Animation"],
      link: "#",
      year: "2021",
    },
    {
      title: "Travel Blog Platform",
      description: "Content-focused platform with smooth transitions",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "CMS", "Tailwind"],
      link: "#",
      year: "2021",
    },
    {
      title: "Real Estate Visualization",
      description: "3D property visualization with interactive elements",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Three.js", "React", "WebGL"],
      link: "#",
      year: "2021",
    },
    {
      title: "Fitness Tracking Dashboard",
      description: "Data-rich dashboard with animated progress indicators",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "D3.js", "SVG Animation"],
      link: "#",
      year: "2020",
    },
  ]

  // Get all unique tags from projects
  const allTags = Array.from(new Set(allProjects.flatMap((project) => project.tags)))

  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects)
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (!activeFilter) {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter((project) => project.tags.includes(activeFilter)))
    }
  }, [activeFilter])

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-amber-50 text-violet-950">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/70 border-b border-violet-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-violet-950 hover:text-violet-700 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>

          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 hover:bg-violet-200 transition-colors"
          >
            <Filter size={18} />
            <span className="font-medium">Filter</span>
            {activeFilter && (
              <span className="ml-2 px-2 py-0.5 bg-violet-200 rounded-full text-sm">{activeFilter}</span>
            )}
          </button>
        </div>
      </header>

      {/* Filter Menu Overlay */}
      <div
        className={`fixed inset-0 bg-violet-950/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isFilterMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsFilterMenuOpen(false)}
      ></div>

      {/* Filter Menu */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 p-8 shadow-xl transition-transform duration-300 ${
          isFilterMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold">Filter Projects</h3>
          <button onClick={() => setIsFilterMenuOpen(false)} className="text-violet-500 hover:text-violet-700">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              setActiveFilter(null)
              setIsFilterMenuOpen(false)
            }}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              !activeFilter ? "bg-violet-100 text-violet-900" : "hover:bg-violet-50"
            }`}
          >
            All Projects
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setActiveFilter(tag)
                setIsFilterMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeFilter === tag ? "bg-violet-100 text-violet-900" : "hover:bg-violet-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-600 text-transparent bg-clip-text">
              All Projects
            </h1>
            <p className="text-violet-800/70 text-lg md:text-xl">
              Explore my complete portfolio of creative web development projects, showcasing a range of skills from
              interactive animations to immersive 3D experiences.
            </p>
            {activeFilter && (
              <div className="mt-6 flex items-center">
                <span className="text-violet-800">Currently viewing:</span>
                <span className="ml-2 px-3 py-1 bg-violet-100 rounded-full text-violet-800 font-medium">
                  {activeFilter}
                </span>
                <button
                  onClick={() => setActiveFilter(null)}
                  className="ml-2 text-violet-500 hover:text-violet-700 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-violet-800/70 mb-8">No projects match the selected filter criteria.</p>
              <button
                onClick={() => setActiveFilter(null)}
                className="px-6 py-3 bg-violet-100 rounded-full text-violet-800 font-medium hover:bg-violet-200 transition-colors"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-violet-950 text-white/70">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Creative Developer. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="/" className="hover:text-white transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
