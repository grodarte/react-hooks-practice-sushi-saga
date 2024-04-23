import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import MoneyForm from "./MoneyForm";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [myMoney, setMyMoney] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/sushis")
    .then(r=>r.json())
    .then(sushiData=>setSushis(sushiData))
  }, [])

  function handleEatSushi(price, id){
    setMyMoney(myMoney - price)
    setPlates([
      ...plates,
      id
    ])
  }

  function handleAddMoney(amountAdded){
    setMyMoney(myMoney + amountAdded)
  }

  return (
    <div className="app">
      <MoneyForm onAddMoney={handleAddMoney}/>
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi} myMoney={myMoney} plates={plates}/>
      <Table myMoney={myMoney} plates={plates} />
    </div>
  );
}

export default App;
