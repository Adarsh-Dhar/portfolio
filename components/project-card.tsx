"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  featured?: boolean
  year?: string
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <Link href={project.link} className="block">
        <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <div className="flex items-center gap-2 font-medium">
                View Project <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
          {project.year && (
            <span className="absolute top-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full backdrop-blur-sm">
              {project.year}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-violet-700 transition-colors">{project.title}</h3>
        <p className="text-violet-800/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
