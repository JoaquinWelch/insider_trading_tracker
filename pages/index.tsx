// pages/index.tsx
import React, { useEffect, useState } from 'react';

interface InsiderTrade {
  id: number;
  // Add other properties based on your API response
}

const Home: React.FC = () => {
  const [insiderTrades, setInsiderTrades] = useState<InsiderTrade[]>([]);

  useEffect(() => {
    // Fetch insider trades data from your Express server
    fetch('/api/insider-trades')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data); // Log the data to inspect its structure
        setInsiderTrades(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Insider Trades Tracker</h1>
      <section>
        <h2>Recent Insider Trades</h2>
        {/* Display insider trades data */}
        <ul>
          {insiderTrades.map((trade) => (
            <li key={trade.id}>
              {/* Display trade information here */}
              {/* Example: {trade.companyName} - {trade.tradeType} - {trade.date} */}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
