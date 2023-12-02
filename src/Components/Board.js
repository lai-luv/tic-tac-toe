import { useState } from "react";
import "../App.css"
import Square from "./Square";


function Board() {

  const [squares, setsquares] = useState(Array(9).fill(null));
  console.log(squares,"SQUARES")
  const [xIsNext, setXIsNext] = useState(true);
  const  [history, setHistory] = useState([]);
  // console.log(squares)


  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "winner:" + winner
  }else{
    status="Next Player:" + (xIsNext ? "x":"o")
  }


  function handleClick(index) {
    
    if(squares[index] || calculateWinner(squares)){
      return
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[index] = "X"
    } else {
      nextSquares[index] = "O"
    }
    setsquares(nextSquares);
    setXIsNext(!xIsNext);
    
    // console.log(nextSquares, "splice");


  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (let i = 0; i < lines.length; i++){
      const [a,b,c]= lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
       console.log("here") 
       return squares[a]
        
      }
    }
  }
  


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default Board;
