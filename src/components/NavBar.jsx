import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

function NavBar() {
  const {t} = useTranslation();

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 left-0 px-6 py-3  flex justify-between items-center backdrop-blur-md transition-all ${
        scrolled ? "bg-[#121212]/80 shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <button
      onClick={() => handleScrollTo("#hero")}
      >
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-bold text-white">{t('navBar.title')}</h1>
        <img src="/assets/mylogo.webp" alt="logo" className="invert brightness-110 pl-1 w-12 h-12 object-contain rounded-lg"/>
      </div>
      
      </button>

      {/* Botón hamburguesa */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Menú desplegable en dispositivos móviles */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } absolute top-full right-0 w-auto max-w-[200px] bg-[#121212]/80 md:hidden transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col items-center text-gray-300 gap-3 p-3">
          <li>
            <button
              onClick={() => handleScrollTo("#about")}
              className="hover:text-white transition"
            >
              {t('navBar.aboutMe')}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("#certificates")}
              className="hover:text-white transition"
            >
              {t('navBar.certificates')}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("#projects")}
              className="hover:text-white transition"
            >
              {t('navBar.projects')}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="hover:text-white transition"
            >
              {t('navBar.contact')}
            </button>
          </li>
          <li>
            <a
              href="https://dieosorio.github.io/cv"
              target="_blank"
              className="hover:text-white transition"
            >
              {t('navBar.resume')}
            </a>
          </li>
        </ul>
      </div>

      {/* Menú en desktop (pantalla grande) */}
      <div className="hidden md:flex space-x-6 text-gray-300 ml-auto">
        <button onClick={() => handleScrollTo("#about")} className="hover:text-white transition">
          {t('navBar.aboutMe')}
        </button>
        <button onClick={() => handleScrollTo("#projects")} className="hover:text-white transition">
          {t('navBar.projects')}
        </button>
        <button onClick={() => handleScrollTo("#certificates")} className="hover:text-white transition">
          {t('navBar.certificates')}
        </button>
        <button onClick={() => handleScrollTo("#contact")} className="hover:text-white transition">
          {t('navBar.contact')}
        </button>
        <a href="https://dieosorio.github.io/cv" target="_blank" className="hover:text-white transition">
          {t('navBar.resume')}
        </a>
      </div>
    </motion.nav>
  );
}

export default NavBar;
