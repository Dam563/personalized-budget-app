
// import './App.css';
// import Form from './components/form/Form';
// import TransactionList from './components/transactionList/TransactionList';

// function App() {
//   return (
    
//    <div>
//       <Form/>
//       <TransactionList/>
//    </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import TransactionList from './components/transactionList/TransactionList';
import Form from './components/form/Form';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, {...newTransaction, id: Date.now()}]);
  };

  return (
    <div className="App">
      <h2>Personal Budget Dashboard</h2>
      <Form onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
