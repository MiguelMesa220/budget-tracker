function TransactionItem({transaction, deleteTransaction}){
    return (
    <li>
     {transaction.description} - ${transaction.amount}
     <button onClick={() => deleteTransaction(transaction.id)}>
     Delete
     </button>
    </li>
    );   
}

export default TransactionItem;