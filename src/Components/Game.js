import Board from "./Board";
import { useStatenpmm } from "react";


function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState(Array(9).fill(null));
    console.log(history,"HISTORY")
    const currentSquares = history[history.length - 1];






    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <ol>

                </ol>
            </div>

        </div>
    );
}



export default Game;
