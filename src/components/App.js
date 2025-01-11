import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)
  const [eatenSushis, setEatenSushis] = useState([])
  const [budget, setBudget] = useState(100)

  const displaySushis = sushis.slice(sushiIndex, sushiIndex + 4)

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(sushiData=>setSushis(sushiData))
  }, [])

  function handleMoreSushi(){
    setSushiIndex(currentIndex=>currentIndex + 4)
  }

  function handleEatSushi(eatenSushi){
    if(!eatenSushis.find(sushi=>sushi.id === eatenSushi.id)){
        if(eatenSushi.price <= budget){
          setEatenSushis([
            ...eatenSushis,
            eatenSushi
          ])
          setBudget(money=>money - eatenSushi.price)
        }
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={displaySushis} eatenSushis={eatenSushis} onMoreSushi={handleMoreSushi} onEatSushi={handleEatSushi}/>
      <Table plates={eatenSushis} budget={budget}/>
    </div>
  );
}

export default App;
