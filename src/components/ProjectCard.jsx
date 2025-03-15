import React from 'react';

const ProjectCard = ({ image, title, description, webDescription, link }) => {
  return (
    <div className="bg-[#1F1F1F] rounded-lg overflow-hidden shadow-lg">
      <a 
      href={link} 
      target="_blank" 
      rel={title}> 
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      </a> 
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-4">{description}</p>
        <p className="text-gray-200 mt-4">{webDescription}</p>
        <a
          href={link}
          target="_blank"
          className="text-[#3498db] hover:text-blue-400 mt-4 inline-block"
        >
          Visitar Sitio
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
