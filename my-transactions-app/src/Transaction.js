import React from 'react';

function Transaction({ transaction }) {
  return (
    <div className="transaction">
      <div className="transaction-info">
        <span className="name">{transaction.name}</span>
        <span className="amount">{transaction.amount}</span>
      </div>
      <span className="date">{transaction.date}</span>
    </div>
  );
}

export default Transaction;