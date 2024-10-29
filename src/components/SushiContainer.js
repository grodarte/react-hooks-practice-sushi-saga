import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiData, onEatSushi, budget }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const displaySushis = sushiData.slice(currentIndex, currentIndex + 4)
  const sushiElements = displaySushis.map(sushi=><Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} budget={budget}/>)

  function handleMoreSushi(){
    if(currentIndex + 4 < sushiData.length){
      setCurrentIndex(currentIndex=>currentIndex + 4)
    }
  }

  return (
    <div className="belt">
      {sushiElements}
      <MoreButton onMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
