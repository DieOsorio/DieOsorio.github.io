import { motion } from "framer-motion";
import React from 'react'

function Projects() {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold">Mis Proyectos</h2>
      <p className="text-gray-400 mt-2">Algunos de mis trabajos recientes</p>
      {/* Aquí agregarías tus tarjetas de proyectos */}
    </motion.section>
  )
}

export default Projects