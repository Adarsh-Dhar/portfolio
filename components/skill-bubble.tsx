"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function SkillBubble({ skill, index }: { skill: string; index: number }) {
  const colors = ["bg-violet-500", "bg-fuchsia-500", "bg-rose-500", "bg-amber-500"]

  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className={`${colors[index % colors.length]} px-6 py-3 rounded-full text-white font-medium cursor-pointer`}
    >
      {skill}
    </motion.div>
  )
}
