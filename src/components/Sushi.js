import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, budget }) {
  const [sushiEaten, setSushiEaten] = useState(false)

  const {id, name, img_url, price, created_at} = sushi

  function handleEatSushi(){
    if(sushi.price<=budget){
      setSushiEaten(true)
      onEatSushi(sushi)
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
