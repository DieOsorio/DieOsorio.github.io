import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function Hero() {
  const {t} = useTranslation();

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      id="hero"
      className="bg-[#1F1F1F] bg-opacity-70 h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">{t('hero.greetings')}</h1>
      <p className="text-lg md:text-2xl text-gray-400 mt-4">
        {t('hero.specialization')}
      </p>

       <img src="/assets/me.webp" alt="Mi imagen" className="rounded-full w-40 h-40 my-8 object-cover" />

      <button
        onClick={() => handleScrollTo("#projects")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition"
      >
        {t('hero.seeProjects')}
      </button>
    </motion.section>
  )
}

export default Hero