import { useState } from "react";
import TransactionList from "./components/TransactionList";
import schnoz from './assets/schnoz.jpg'
function App() {
  const [transactions, setTransactions] = useState([
    {id: 1, description: "coffee", amount: 4.5}, 
    {id: 2, description: "groceries", amount: 25}, 

  ]);

  return(
    <main>
      <h1>Budget Tracker</h1>

      <h2>Transactions</h2>
      <TransactionList transactions = {transactions} />


    </main>

  );
}

export default App;
