import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed w-full top-0 left-0 px-6 py-4 flex justify-between items-center backdrop-blur-md transition-all ${
        scrolled ? "bg-[#121212]/80 shadow-lg" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-xl font-bold text-white">Mi Portfolio</h1>
      <ul className="flex space-x-6 text-gray-300">
      <li>
          <button onClick={() => handleScrollTo("#about")} className="hover:text-white transition">
            Sobre mí
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("#projects")} className="hover:text-white transition">
            Proyectos
          </button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("#contact")} className="hover:text-white transition">
            Contacto
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}

export default NavBar;