import React from 'react';

const ProjectCard = ({ image, title, description, webDescription, link, visit }) => {
  return (
    <div className="bg-[#1F1F1F]/20 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      <a href={link} target="_blank" rel={title}> 
        <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" 
        />
      </a> 
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-4 flex-grow">{description}</p>
        <p className="text-gray-200 mt-4">{webDescription}</p>
      </div>
        <div className='mt-auto py-4 '>
          <a
            href={link}
            target="_blank"
            className="text-[#3498db] hover:text-blue-400"
            >
            {visit}
          </a>
        </div>        
    </div>
  );
};

export default ProjectCard;
