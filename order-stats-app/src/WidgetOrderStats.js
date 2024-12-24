import React, { useState, useEffect } from 'react';
import OrderStat from './OrderStat';

function WidgetOrderStats({ data }) {
  return (
    <div className="widget-order-stats">
      {data.map((stat) => (
        <OrderStat 
          key={stat.title} 
          title={stat.title} 
          value={stat.value} 
          icon={stat.icon} 
        />
      ))}
    </div>
  );
}

export default WidgetOrderStats;