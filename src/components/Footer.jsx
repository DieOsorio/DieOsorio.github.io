import React from 'react'

function Footer() {
  return (
    <footer className="py-6 text-center bg-[#1a1a1a] text-gray-400">
      <p>© {new Date().getFullYear()} Diego. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer