import { motion } from "framer-motion";
import React from 'react'

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-900 bg-opacity-70 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">Contáctame</h2>
      <p className="text-gray-400 mt-4 max-w-lg">
        ¿Tienes algún proyecto en mente o quieres colaborar? Escríbeme y charlemos sobre ideas.
      </p>
      <div className="flex gap-4 mt-6">
        <a
          href="mailto:dieosorio@outlook.com"
          className="flex items-center  w-[190px] justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition"
        >
          <MdEmail className="text-2xl" />
          Enviar Email
        </a>
        <a
          href="https://wa.me/59897287901"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-[190px] justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full text-lg shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </a>
      </div>
    </motion.section>
  )
}

export default Contact