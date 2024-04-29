import { useState } from "react";
import Card from "../Card/Card"
import "./Grid.css"

function Grid( {numberOfCards}){
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
const [Turn, setTurn] = useState(true) // true => 0, false => x

  return (
   <div className= "grid-wrapper">
    <h1>Current Turn: {(Turn) ? '0' : 'x'}</h1>
     <div className="grid">
      {board.map((el, idx) => <Card key={idx}/>)}
    </div>
     </div>
  )
}

export default Grid;