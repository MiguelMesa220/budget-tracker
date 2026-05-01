import { useState } from "react";

function AddTransactionForm({ addTransaction }){
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),
            description: description,
            amount: parseFloat(amount),
        };

        addTransaction(newTransaction);

        setDescription("");
        setAmount("");

    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type ="text" 
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
            />
            <input 
                type ="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
             />


            <button type="submit">Add</button>
        </form>

    );

}
export default AddTransactionForm;