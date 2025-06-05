import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      id="hero"
      className="bg-[#1F1F1F]/80 h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      role="banner"
      aria-label={t("hero.alt.ariaLabel")}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        {t("hero.greetings")}
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-xl">
        {t("hero.specialization")}
      </p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img
          src="/assets/me.webp"
          alt={t("hero.alt.heroImage")}
          className="rounded-full w-40 h-40 my-8 object-cover border-4 border-blue-500 shadow-lg"
        />
      </motion.div>

      <button
        onClick={() => handleScrollTo("#projects")}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
        aria-label={t("hero.seeProjects")}
      >
        {t("hero.seeProjects")}
      </button>
    </motion.section>
  );
}

export default Hero;
