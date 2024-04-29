import { useState } from "react";
import Card from "../Card/Card"
// eslint-disable-next-line no-unused-vars
import isWinner from "../../helpers/checkWinner";
import "./Grid.css"

function Grid( {numberOfCards}){
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
const [Turn, setTurn] = useState(true) // true => 0, false => x
const [winner, setWinner] = useState(null)
function play(index){
  if(Turn == true) {
    board[index] = "0";
  } else {
    board[index] = "x";
  }
  const win = isWinner(board, Turn ? "0" : "x");
  if(win){
    setWinner(win);
  }
  setBoard([ ...board]);
  setTurn(!Turn);
}

  return (
   <div className= "grid-wrapper">
    {
      winner && (
        <>
        <h1 className="turn-high-light">Winner is {winner}</h1>
        <button className="reset">Reset Game</button>
        </>
      )
    }
    <h1 className="turn-high-light">Current Turn: {(Turn) ? '0' : 'x'}</h1>
     <div className="grid">
      {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
    </div>
     </div>
  )
}

export default Grid;