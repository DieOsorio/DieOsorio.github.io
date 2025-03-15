import { motion } from "framer-motion";
import React from 'react'

function About() {
  return (
    <motion.section
      id="about"
      className=" bg-gray-900 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold">Sobre mí</h2>
      <p className="text-gray-400 mt-4 max-w-3xl">
        Soy un desarrollador frontend apasionado por la creación de interfaces elegantes y funcionales.
        Me especializo en React, Tailwind y en construir experiencias modernas y accesibles.
      </p>
    </motion.section>
  )
}

export default About