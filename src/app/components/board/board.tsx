const Board = () => {
  const boardSize = 10;
  const board = [];

  for (let row = 0; row < boardSize; row++) {
    const rowElements = [];
    for (let col = 0; col < boardSize; col++) {
      rowElements.push(
        <div
          key={`${row}-${col}`}
          className="border border-zinc-600 flex-1 aspect-square"
        />
      );
    }
    board.push(
      <div key={row} className="flex flex-1">
        {rowElements}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[90vh] w-[90vw] max-w-[90vh] max-h-[90vw] bg-[#FFFCF0] mb-16">
      <div className="flex flex-col flex-1">
        {board}
      </div>
      {/* Adding text elements with adjusted font sizes */}
      
    </div>
  );
};

export default Board;
