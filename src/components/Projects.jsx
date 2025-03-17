import { motion } from "framer-motion";
import React from 'react'
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-[#1F1F1F] bg-opacity-85 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">Mis Proyectos</h2>
      <p className="text-gray-400 my-2">Algunos de mis trabajos recientes</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          image= "/assets/vestigio.jpg"
          title="Vestigio Restauraciones"
          description="Restauración artesanal de muebles de estilo. 
          Preservamos su historia con técnicas tradicionales, devolviendo 
          a cada pieza su esplendor original. Con más de 20 años de experiencia, 
          en Vestigio nos dedicamos a recuperar muebles valiosos con un trabajo 
          cuidadoso y detallado, manteniendo su carácter y calidad."
          webDescription="La página web de Vestigio fue desarrollada con HTML, CSS y JavaScript, 
          con un diseño personalizado que refleja la identidad del proyecto. 
          Cada sección fue pensada para ofrecer una navegación clara y sencilla, 
          asegurando que la presentación de los trabajos de restauración sea 
          visualmente atractiva y fácil de explorar."
          link="https://vestigiorestauraciones.com/"
        />
        <ProjectCard
          image="/assets/certificados.webp"
          title="Certificados"
          description="Los certificados corresponden a cursos realizados en Coursera en distintas 
          áreas relacionadas con el desarrollo web y la programación.
          Estos cursos me han permitido adquirir y reforzar conocimientos en frontend, 
          backend y herramientas modernas para el desarrollo de aplicaciones."
          webDescription="Este proyecto, desarrollado con React.js y Tailwind CSS, muestra de 
          forma ordenada mis certificados de Coursera. Utilicé JSON para organizar los datos de 
          manera clara y escalable, facilitando su actualización. El diseño es minimalista y 
          prioriza la legibilidad y navegación fluida."
          link="https://dieosorio.github.io/certificados/"
        />
      </div>
    </motion.section>
  )
}

export default Projects