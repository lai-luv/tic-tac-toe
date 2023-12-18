import { useState } from "react";
import "../App.css"
import Square from "./Square";
import Form from "../Components/Form"


function Board({isNext, squares, onPlay}) {
  
  const [formData, setFormData]= useState({
    player1:"",
    player2:""
})
const [userFormData, setUserFormData]=useState({});
const [showStatus, setShowStatus] = useState(false);

  function handleClick(index) {
    
    if(squares[index] || calculateWinner(squares)){
      return
    }
    const nextSquares = [...squares];

    if (isNext) {
      nextSquares[index] = "X"
    } else {
      nextSquares[index] = "O"
    }
    onPlay(nextSquares)

    
    
  }

  

 // display winner
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "winner:" + winner
  }else{
    status="Next Player:" + (isNext ? userFormData.player1:userFormData.player2)
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
  


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



 
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserFormData(formData)
    setShowStatus(true)
    setFormData({
        player1:"",
        player2:""   
    })
    console.log("Form submitted:", formData);
  };
  


  return (
    <div>
      {showStatus ?  <div className="status">{status}</div> : null}
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
      <div>
        <Form  formData={formData}  userFormData={userFormData}  handleInputChange={ handleInputChange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default Board;
