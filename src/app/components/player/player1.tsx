import React, { useState, useEffect } from 'react';
import { IMG } from '../../config/asset';

const Player1: React.FC = () => {
  const [score, setScore] = useState(0);
  const [violations, setViolations] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const countdown = timer > 0 ? setInterval(() => setTimer(prev => prev - 1), 1000) : null;
    return () => {
      if (countdown) clearInterval(countdown);
    };
  }, [timer]);

  return (
    <div className="flex flex-col rounded-lg font-nunito"> {/* Apply Nunito as default font */}
      {/* Player Title */}
      <h2 className="text-center text-lg font-bold border-b border-gray-400 mb-2">
        Player 1
      </h2>

      {/* Character Stats Section */}
      <div className="flex justify-between w-full">
        {/* Left Character (Mahui) */}
        <div className="flex flex-col w-1/2">
          <h3 className="text-center font-bold text-xl border-b border-gray-400 font-macondo">Mahui</h3> {/* Apply Macondo font */}
          <img 
            src={IMG.mahui} 
            alt="Mahui character - Offense Role" 
            className="w-60 h-60 border border-gray-400 mb-2 transition-transform transform hover:scale-105" 
          />
          <p className="text-sm italic mb-2">Role: Offense</p>
          <ul className="text-left">
            <li className="border-t border-gray-300 py-1"><strong>Burn:</strong> Soon</li>
            <li className="border-t border-gray-300 py-1"><strong>Pillar:</strong> Creates a Fire Pillar that kills nearby enemy</li>
            <li className="border-t border-gray-300 py-1"><strong>Inferno:</strong> Soon</li>
          </ul>
        </div>

        {/* Middle Border */}
        <div className="w-px bg-gray-400 mx-4"></div>

        {/* Right Character (Kidu) */}
        <div className="flex flex-col w-1/2">
          <h3 className="text-center font-bold text-xl border-b border-gray-400 font-macondo">Kidu</h3> {/* Apply Macondo font */}
          <img 
            src={IMG.kidu} 
            alt="Kidu character - Offense Role" 
            className="w-60 h-60 border border-gray-400 mb-2 transition-transform transform hover:scale-105" 
          />
          <p className="text-sm italic mb-2">Role: Offense</p>
          <ul className="text-left">
            <li className="border-t border-gray-300 py-1"><strong>Charge:</strong> Soon</li>
            <li className="border-t border-gray-300 py-1"><strong>Zap:</strong> Creates a Zap mark on location that can be used for a teleport move</li>
            <li className="border-t border-gray-300 py-1"><strong>Thunderstorm:</strong> Soon</li>
          </ul>
        </div>
      </div>

      {/* Score and Timer Section */}
      <div className="flex justify-between items-center w-full mt-4 p-2 border-t border-gray-400 font-nunito"> {/* Keep Nunito for other texts */}
        <p className="text-sm">Score: {score}</p>
        <p className="text-sm">Violations: {violations}</p>
        <p className="text-sm">Timer: {timer}</p>
      </div>
    </div>
  );
};

export default Player1;
