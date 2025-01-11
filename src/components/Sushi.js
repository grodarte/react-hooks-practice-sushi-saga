import React, { useState } from "react";

function Sushi({ sushi, onEatSushi, eatenSushis }) {
  const {id, name, img_url, price, created_at} = sushi
  const [eaten, setEaten] = useState(false)

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>{
        onEatSushi(sushi)
        setEaten(true)
      }}>
        {/* Tell me if this sushi has been eaten! */}
        {eatenSushis.find(sushi=>sushi.id === id) ? null : (
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
