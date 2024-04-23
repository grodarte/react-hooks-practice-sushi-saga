import React, { useState } from "react";

function Sushi({sushi, onEatSushi, myMoney, plates}) {
  const { name, id, img_url, price } = sushi
  const [isEaten, setIsEaten] = useState(plates.find(plate=>plate === id)? true : false)

  function handleClick(){
    if(price<=myMoney){
      setIsEaten(true)
    onEatSushi(price, id)
    } else (alert("Add more money!"))
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
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
