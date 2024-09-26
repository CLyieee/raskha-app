import React from 'react';

interface HeroCardProps {
  title: string;
  image: string;
  skills: string[];
  buttonLabel: string;
  onButtonClick: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ title, image, skills, buttonLabel, onButtonClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm text-center p-6 border border-gray-600">
      <h2 className="text-md font-normal mb-1" style={{ fontFamily: 'Macondo, sans-serif' }}>
        {title}
      </h2>
      <img src={image} alt={title} className="w-full h-28 object-cover mb-1" />
      
      <ul className="space-y-2 mb-1">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-amber-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700 border border-gray-600"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            {skill}
          </li>
        ))}
      </ul>
      <button
        onClick={onButtonClick}
        className="mt-1 bg-gray-600 text-white py-1 px-2 rounded hover:bg-gray-500"
        style={{ width: 'fit-content', fontFamily: 'Nunito, sans-serif' }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default HeroCard;
