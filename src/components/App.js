import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [plates, setPlates] = useState([])
  const [budget, setBudget] = useState(100)
  
    function onEatSushi(eatenSushi){
      
      setPlates([
        ...plates,
        eatenSushi
      ])
    }

    useEffect(()=>{
      fetch(API)
      .then(r=>r.json())
      .then(sushiData=>setSushi(sushiData))
    }, [])

  useEffect(()=>{
    const spend = plates.reduce(
      (accumulator, plateObj) => { return accumulator + plateObj.price }, 0
    )
    setBudget(100 - spend)
    
  }, [plates])

  return (
    <div className="app">
      <SushiContainer sushiData={sushi} onEatSushi={onEatSushi} budget={budget}/>
      <Table plates={plates} budget={budget}/>
    </div>
  );
}

export default App;
