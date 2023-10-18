"use client";

import { useEffect, useState } from "react";
import Cell from "./components/Cell";
import Reset from "./components/Reset";
import { title } from "process";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const initialCells = ["", "", "", "", "", "", "", "", ""];
  const [cells, setCells] = useState(initialCells);
  const [turn, setTurn] = useState("x");
  const [winngMessage, setWinngMessage] = useState("");

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "o");
      const crossWins = combo.every((cell) => cells[cell] === "x");
      if (circleWins) {
        setWinngMessage("Circle Wins!");
      } else if (crossWins) {
        setWinngMessage("Cross Wins!");
      }
    });
  }, [cells]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winngMessage) {
      setWinngMessage("Draw!");
    }
  }, [cells, winngMessage]);
  const handleReset = () => {
    setCells(initialCells);
    setTurn("x");
    setWinngMessage("");
  };

  return (
    <div>
      <main className="container">
        {!winngMessage && (
          <div className="turn_message">
            its now
            <span
              className={`${turn === "x" ? "cross_style" : "circle_style"}`}
            >
              {" "}
              {turn}{" "}
            </span>
            turn!
          </div>
        )}
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell
              key={index}
              id={index}
              turn={turn}
              setTurn={setTurn}
              cells={cells}
              setCells={setCells}
              cell={cell}
              winngMessage={winngMessage}
            />
          ))}
        </div>
        {winngMessage && (
          <div
            className={
              winngMessage === "Circle Wins!"
                ? "circle_win"
                : winngMessage === "Cross Wins!"
                ? "cross_win"
                : "draw"
            }
          >
            {winngMessage}
          </div>
        )}
      </main>
      <Reset winngMessage={winngMessage} onReset={handleReset} />
    </div>
  );
}
