import { motion } from "framer-motion";
import React from 'react'

import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { useTranslation } from "react-i18next";

function Contact() {
  const {t} = useTranslation();

  return (
    <motion.section
      id="contact"
      className="bg-gray-900 bg-opacity-70 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">{t('contact.title')}</h2>
      <p className="text-gray-400 mt-4 max-w-lg">
        {t('contact.subtitle')}
      </p>
      <div className="flex gap-4 mt-6 flex-col lg:flex-row">
        <a
          href="mailto:dieosorio@outlook.com"
          className="flex items-center  w-[190px] justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition"
        >
          <MdEmail className="text-2xl" />
          {t('contact.email')}
        </a>
        <a
          href="https://wa.me/59897287901"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-[190px] justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full text-lg shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          {t('contact.wpp')}
        </a>
      </div>
    </motion.section>
  )
}

export default Contact