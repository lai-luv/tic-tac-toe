import React from "react";
import "../App.css"
// import Board from "../Components/Board";

function Square( props) {
    return (
        <div className="square" onClick={props.onSquareClick}>
            <p>{props.value}</p>
        </div>
    );       
}



export default Square;
