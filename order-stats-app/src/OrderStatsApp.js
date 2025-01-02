import React, { useState, useEffect } from 'react';
import WidgetOrderStats from './WidgetOrderStats';


function OrderStatsApp() {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const data = await response.json();
        setStatsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <WidgetOrderStats data={statsData} />
    </div>
  );
}

export default OrderStatsApp;