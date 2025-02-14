

import { motion } from "framer-motion"

const projects = [
  {
    title: "Muzer",
    description:
      "A music streaming application built with Next.js, Tailwind, and Prisma. Features include YouTube integration and interactive voting system.",
    tech: ["Next.js", "Tailwind", "Prisma"],
  },
  {
    title: "WriteWise",
    description:
      "Grammar checking application using Next.js and GROQ AI API for advanced analysis and improvement suggestions.",
    tech: ["Next.js", "Tailwind", "GROQ AI"],
  },
  {
    title: "React-Code-Editor",
    description:
      "Customizable code editor library with syntax highlighting, auto-indentation, and cross-platform keybindings.",
    tech: ["React", "Highlight.js"],
  },
  {
    title: "Fast-Pizza",
    description: "Dynamic pizza booking application with Redux state management and responsive design.",
    tech: ["React", "Redux", "Tailwind"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

