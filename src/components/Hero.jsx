import React from 'react'
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">Hola, soy Diego</h1>
      <p className="text-lg md:text-2xl text-gray-400 mt-4">
        Desarrollador Frontend | UI/UX Enthusiast
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition"
      >
        Ver mis proyectos
      </a>
    </motion.section>
  )
}

export default Hero