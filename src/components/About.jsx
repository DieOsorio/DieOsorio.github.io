import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function About() {
  const {t} = useTranslation();

  return (
    <motion.section
      id="about"
      className=" bg-gray-900 bg-opacity-70 min-h-screen flex flex-col items-center text-center py-16"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">{t('about.title')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#121212]/25 text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">{t('about.code.title')}</h2>
          <img src="/assets/code.webp" alt="Código en pantalla" className="w-full h-96 object-cover object-[0_65%] rounded-lg mb-4 mx-auto" />
          <p>
          {t('about.code.description')}
          </p>
      </div>
      <div className="bg-[#121212]/25 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{t('about.music.title')}</h2>
        <img src="/assets/guitar.webp" alt="Guitarra eléctrica" className="w-full h-96 object-cover rounded-lg mb-4 mx-auto" />
        <p>
          {t('about.music.description')}
        </p>
      </div>
    </div>
    </motion.section>
  )
}

export default About