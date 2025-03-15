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
      <h2 className="text-3xl font-bold mb-10">Sobre mí</h2>
      <div  iv className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#121212]/20 text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Programación</h2>
          <img src="/assets/code.jpg" alt="Código en pantalla" className="w-52 h-52 object-cover rounded-lg mb-4 mx-auto" />
          <p>
          Desde siempre me ha atraído el proceso lógico y la resolución de problemas, 
          lo que me llevó a interesarme por la programación. <br/><br /> He explorado tanto el 
          back-end como el front-end y, de todo lo que he probado, Java ha sido el 
          lenguaje que más me ha gustado, aunque aún no he tenido la oportunidad de 
          utilizarlo en un proyecto.<br /><br /> Me motiva seguir aprendiendo porque encuentro en 
          la programación una combinación perfecta entre utilidad y el desafío de resolver 
          problemas.<br /><br /> Además, desde chico he usado la computadora para muchas cosas, empezando 
          por los juegos, lo que con el tiempo amplió mi curiosidad por la tecnología.
          </p>
      </div>
      <div className="bg-[#121212]/20 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Música</h2>
        <img src="/assets/guitar.jpg" alt="Guitarra eléctrica" className="w-52 h-52 object-cover rounded-lg mb-4 mx-auto" />
        <p>
        La música es otra de mis grandes pasiones. Toco la guitarra desde hace 20 años y 
        disfruto de una enorme variedad de géneros.<br /><br /> Para mí, cuando el arte es honesto, 
        es único.<br /><br /> También compongo mis propias canciones, y aunque aún no cuento con las 
        herramientas para producirlas, creo que la composición es mi don natural y algo 
        que realmente me apasiona.
        </p>
      </div>
    </div>
    </motion.section>
  )
}

export default About