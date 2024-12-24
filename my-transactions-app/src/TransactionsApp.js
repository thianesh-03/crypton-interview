// TransactionsApp.js
import React, { useState } from 'react';
import TransactionList from './TransactionList';

const transactionsData = [
  { id: 1, name: 'Aokiji', amount: '+13.00', date: '28 Feb 2023 06:23 PM', type: 'Received' },
  { id: 2, name: 'Kizaru', amount: '-9.00', date: '28 Feb 2023 06:23 PM', type: 'Outgoing' },
  { id: 3, name: 'Akainu', amount: '+20.00', date: '28 Feb 2023 06:23 PM', type: 'Received' },
];

function TransactionsApp() {
  const [transactions, setTransactions] = useState(transactionsData);

  return (
    <div className="app">
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default TransactionsApp;