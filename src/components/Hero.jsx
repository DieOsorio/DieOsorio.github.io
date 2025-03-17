import { motion } from "framer-motion";

function Hero() {

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      id="hero"
      className="bg-[#1F1F1F] bg-opacity-85 h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">Hola, soy Diego</h1>
      <p className="text-lg md:text-2xl text-gray-400 mt-4">
        Desarrollador Frontend | UI/UX Enthusiast
      </p>

       <img src="/assets/me.jpg" alt="Mi imagen" className="rounded-full w-40 h-40 my-8 object-cover" />

      <button
        onClick={() => handleScrollTo("#projects")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-lg hover:bg-blue-600 transition"
      >
        Ver mis proyectos
      </button>
    </motion.section>
  )
}

export default Hero