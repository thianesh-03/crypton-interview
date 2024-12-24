import React from 'react';

function OrderStat({ title, value, icon }) {
  return (
    <div className="order-stat">
      <div className="icon">
        <i className={`fa-solid fa-${icon}`}></i> 
      </div>
      <div className="stat-info">
        <span className="title">{title}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
}

export default OrderStat;