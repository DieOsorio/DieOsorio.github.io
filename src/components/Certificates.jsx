import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

function Certificates() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="certificates"
      className="bg-[#1F1F1F]/60 min-h-screen flex flex-col items-center text-center pt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10">{t('projects.certificates.title')}</h2>
      <p className="text-gray-400 mb-6">{t('projects.certificates.subtitle')}</p>
      <ProjectCard
        image="/assets/certificados.webp"
        title={t('projects.certificates.title')}
        description={t('projects.certificates.description')}
        link="https://dieosorio.github.io/certificados/"
        visit={t('projects.certificates.visit')}
      />
    </motion.section>
  );
}

export default Certificates;
