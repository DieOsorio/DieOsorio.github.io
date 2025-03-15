import { motion } from "framer-motion";
import React from 'react'
import ProjectCard from "./ProjectCard"

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
          image="ruta/a/tu-imagen2.jpg"
          title="Proyecto 2"
          description="Descripción corta del proyecto 2"
          link="#"
        />
      </div>
    </motion.section>
  )
}

export default Projects