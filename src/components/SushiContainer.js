import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, onMoreSushi, onEatSushi, eatenSushis={eatenSushis} }) {
  const sushiElements = sushis.map(sushi=> <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} eatenSushis={eatenSushis}/>)

  return (
    <div className="belt">
      {sushiElements}
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
