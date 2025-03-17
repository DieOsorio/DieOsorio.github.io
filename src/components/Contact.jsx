import { motion } from "framer-motion";
import React from 'react'

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-700 bg-opacity-85 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">Contáctame</h2>
      <p className="text-gray-400 mt-4 max-w-lg">
        ¿Tienes algún proyecto en mente o quieres colaborar? Escríbeme y charlemos sobre ideas.
      </p>
      <a
        href="mailto:dieosorio@outlook.com"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition"
      >
        Enviar Email
      </a>
    </motion.section>
  )
}

export default Contact