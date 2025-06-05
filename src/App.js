
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Certificates from "./components/Certificates"

function App() {
  return (
    <div className="bg-[#121212]/60 bg-[url('../public/assets/black-linen.webp')] text-gray-200 min-h-screen">
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Certificates />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
