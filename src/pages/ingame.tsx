import React from 'react';
import MainLayout from '../app/layouts/MainLayout'; // Adjust the import path as necessary
import Board from '../app/components/board/board';

const Game: React.FC = () => {
  // Define middleContent to include the Board component
  const middleContent = <Board />;


  const left = (
       <div>
    <h1>PLAYER 1</h1>
    </div>
   
  )

    const right = (
       <div>
    <h1>PLAYER 2</h1>
    </div>
   
  )
 
  

  return (
    <MainLayout
      leftContent={left}
      middleContent={middleContent}
      rightContent={right}
    />
  );
};

export default Game;
