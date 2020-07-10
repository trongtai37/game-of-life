import React from 'react';

interface BoardProps {
  board: boolean[][];
}

const Board = (props: BoardProps) => {
  const { board } = props;
  return (
    <table className="board">
      {board.map((row, i) => (
        <tr key={`row-${i}`} className="board-row">
          {row.map((cell, j) => (
            <td
              key={`cell-${i} ${j}`}
              className={`board-cell ${cell ? 'black' : 'white'}`}
            ></td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Board;
