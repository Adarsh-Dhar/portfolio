"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github, Mail, Menu, X } from "lucide-react"
import ProjectCard from "@/components/project-card"
import AnimatedText from "@/components/animated-text"
import SkillBubble from "@/components/skill-bubble"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerRef = useRef<HTMLElement>(null)
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "GSAP",
    "CSS Animations",
    "UI/UX Design",
    "Responsive Design",
    "WebGL",
    "SVG Animation",
  ]

  const projects = [
    {
      title: "Immersive 3D Experience",
      description: "An interactive 3D website with WebGL and Three.js animations",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Three.js", "WebGL", "GSAP"],
      link: "#",
    },
    {
      title: "E-commerce Animation",
      description: "Smooth animated e-commerce experience with micro-interactions",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Framer Motion", "React", "Tailwind"],
      link: "#",
    },
    {
      title: "Interactive Dashboard",
      description: "Data visualization dashboard with animated charts and transitions",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["D3.js", "SVG Animation", "React"],
      link: "#",
    },
    {
      title: "Digital Art Gallery",
      description: "Canvas-based digital art gallery with interactive elements",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Canvas API", "GSAP", "JavaScript"],
      link: "#",
    },
  ]

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-amber-50 text-violet-950">
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-violet-950 z-50 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-8">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={32} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="space-y-8 text-4xl font-bold text-white">
            {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-rose-300 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Header */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:px-12 md:py-6 mix-blend-difference"
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl md:text-2xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              creative.dev
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8 text-white">
            {["Projects", "Skills", "About", "Contact"].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-rose-300 transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <button onClick={() => setMenuOpen(true)} className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-500 z-0"
        />

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-white text-xl md:text-2xl font-light mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              <AnimatedText text="Creative Developer" />
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              I craft immersive digital experiences with code and creativity
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 bg-white text-violet-900 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all hover:gap-3"
            >
              View my work <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-white/70 text-sm animate-bounce"
          >
            Scroll down
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-violet-800/70 max-w-2xl mx-auto">
              A selection of my creative work showcasing animation and interactive experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-violet-700 font-medium hover:text-violet-900 transition-colors"
            >
              View all projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-violet-950 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              The tools and technologies I use to bring creative visions to life
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <SkillBubble key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-rose-50 via-amber-50 to-violet-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-200 via-fuchsia-200 to-amber-200">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Creative Developer"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full mix-blend-multiply"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-violet-950 text-white p-4 rounded-xl">
                <p className="font-medium">5+ years of creative coding</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-violet-800">
                <p>
                  I'm a creative web developer passionate about building immersive digital experiences that blend
                  aesthetics with functionality.
                </p>
                <p>
                  With expertise in animation and interactive design, I create websites that not only look beautiful but
                  also engage users through thoughtful interactions and smooth animations.
                </p>
                <p>
                  My approach combines technical precision with artistic vision, resulting in digital experiences that
                  stand out and leave a lasting impression.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-violet-950 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-900 transition-colors"
                >
                  Get in touch <Mail size={18} />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 border border-violet-300 text-violet-950 px-6 py-3 rounded-full font-medium hover:bg-violet-100 transition-colors"
                >
                  Resume <ExternalLink size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-violet-950 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and see how we can collaborate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:hello@creative.dev" className="text-white/70 hover:text-white transition-colors">
                    hello@creative.dev
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-white/70">San Francisco, California</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Social</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-violet-950 border-t border-white/10 text-white/70">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Creative Developer. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link href="#home" className="hover:text-white transition-colors">
              Back to top
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
