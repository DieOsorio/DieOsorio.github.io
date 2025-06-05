import React from 'react';

const ProjectCard = ({ image, title, description, webDescription, link, visit, disabled }) => {
  return (
    <div className={`bg-[#1F1F1F]/20 rounded-lg overflow-hidden shadow-lg flex flex-col h-full ${disabled ? 'border-2 border-yellow-700' : ''}`}>
      {disabled ? (
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover opacity-40 grayscale" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-yellow-300 text-sm font-bold px-2 text-center">
            🛠️ {visit}
          </div>
        </div>
      ) : (
        <a href={link} target="_blank" rel={title}>
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className='w-full h-48 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center hover:scale-110 transition-transform duration-500'>
              <h1 
                style={{ fontFamily: "'Great Vibes', cursive" }}
                className="text-5xl font-bold bg-gradient-to-r from-amber-400 via-amber-600 to-amber-700 text-transparent bg-clip-text drop-shadow-md select-none p-4">
                  {title}
              </h1>
            </div>
          )}
        </a>
      )}
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-4 flex-grow">{description}</p>
        <p className="text-gray-200 mt-4">{webDescription}</p>
      </div>
      {!disabled && (
        <div className='mt-auto py-4'>
          <a
            href={link}
            target="_blank"
            className="text-[#3498db] hover:text-blue-400"
          >
            {visit}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
