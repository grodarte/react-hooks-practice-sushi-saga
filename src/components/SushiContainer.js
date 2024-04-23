import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatSushi, myMoney, plates}) {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(4)
  const sushisToRender = sushis.slice(startIndex, endIndex)

  function handleMoreSushiClick(){
    if(endIndex>=sushis.length){
      setStartIndex(0)
      setEndIndex(4)
    } else {
      setStartIndex(startIndex + 4)
    setEndIndex(endIndex + 4)
    }
  }

  return (
    <div className="belt">
      {sushisToRender.map(sushi=>{
        return <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} myMoney={myMoney} plates={plates}/>
      })}
      <MoreButton onMoreSushiClick={handleMoreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
