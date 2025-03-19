import { motion } from "framer-motion";
import React from 'react'
import ProjectCard from "./ProjectCard"

import { useTranslation } from "react-i18next";

function Projects() {
  const {t} = useTranslation();

  return (
    <motion.section
      id="projects"
      className="bg-[#1F1F1F] bg-opacity-70 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">{t('projects.title')}</h2>
      <p className="text-gray-400 my-2">{t('projects.subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          image= "/assets/vestigio.webp"
          title={t('projects.vestigio.title')}
          description={t('projects.vestigio.description')}
          webDescription={t('projects.vestigio.webDescription')}
          link="https://vestigiorestauraciones.com/"
          visit={t('projects.vestigio.visit')}
        />
        <ProjectCard
          image="/assets/certificados.webp"
          title={t('projects.certificates.title')}
          description={t('projects.certificates.description')}
          webDescription={t('projects.certificates.webDescription')}
          link="https://dieosorio.github.io/certificados/"
          visit={t('projects.certificates.visit')}
        />
      </div>
    </motion.section>
  )
}

export default Projects