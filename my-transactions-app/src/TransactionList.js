import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Last Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <Transaction transaction={transaction} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;