import { Dispatch, SetStateAction } from "react";


type cellProps = {
  id: number;
  turn: string;
  setTurn: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winngMessage: string;
};

const Cell = ({
  turn,
  setTurn,
  id,
  cells,
  setCells,
  cell,
  winngMessage,
}: cellProps) => {
  
  const handleClick = () => {
    if (winngMessage) {
      return;
    }
    const notTaken = !cells[id];
    if (notTaken) {
      if (turn === "x") {
        handleTurnChange("x");
        setTurn("o");
      } else if (turn === "o") {
        handleTurnChange("o");
        setTurn("x");
      }
    }
  };


  const handleTurnChange = (turnChange: string) => {
    let copyCells = [...cells];
    copyCells[id] = turnChange;
    setCells(copyCells);
  };
  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "x" ? "x" : "o") : ""}</div>
    </div>
  );
};

export default Cell;
