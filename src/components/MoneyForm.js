import React, {useState} from "react";

function MoneyForm({onAddMoney}){
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        onAddMoney(amount)
        setAmount("")
    }

    return (
        <form className="money-form" onSubmit={handleSubmit}>
            $
            <input type="number" name="amount" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))} placeholder="How much?"/>
            <button type="submit">Add more money!</button>
        </form>
    )
}

export default MoneyForm