import React from 'react';
import MainLayout from '../app/layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const handlePlayGame = () => {
    navigate('/picking'); 
  };

  const middleContent = (
    <div className="flex flex-col items-center justify-center h-full p-6 font-nunito"> {/* Apply Nunito font */}
      <h1 className="text-5xl md:text-6xl font-bold text-[#a07936] leading-tight font-macondo">Raksha</h1> {/* Apply Macondo font */}
      <p className="text-gray-600 text-lg md:text-xl mt-2">War Odyssey</p>
      <button className="bg-[#5d4037] text-white py-2 px-6 rounded mt-4 text-lg font-semibold hover:bg-[#7d5a4e] transition">
        Find Match
      </button>
      <div className="mt-4 flex flex-wrap justify-center">
        <span className="mr-2 text-lg">Race to 50</span>
        <span className="bg-gray-200 py-1 px-2 rounded text-lg">3</span>
        <span className="bg-gray-200 py-1 px-2 rounded ml-2 text-lg">5</span>
        <span className="bg-gray-200 py-1 px-2 rounded ml-2 text-lg">7</span>
      </div>
      <div className="mt-2 flex flex-wrap justify-center">
        <a href="#" className="text-blue-600 underline text-lg mr-2 hover:text-blue-800">About</a>
        <a href="#" className="text-blue-600 underline text-lg hover:text-blue-800">Bot Battle</a>
      </div>
      <div className="mt-4 text-center">
        <p className="text-red-600 text-lg">user: dranylokh140465</p>
        <p className="text-lg">rank: 0</p>
      </div>
    </div>
  );

  return (
    <MainLayout
      leftContent={""}
      middleContent={middleContent}
      rightContent={""}
    />
  );
};
