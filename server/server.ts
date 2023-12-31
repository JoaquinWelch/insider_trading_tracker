// server.ts
import express from 'express';
import next from 'next';
import fetch from 'node-fetch';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();
  const PORT = process.env.PORT || 3001;

  // Add your API endpoint URL
  const apiUrl = 'https://api.sec-api.io/insider-trading';

  app.get('/api/insider-trades', async (req, res) => {
    try {
      // Make a request to your API
      const response = await fetch(apiUrl);
      const insiderTradesData = await response.json();

      // Send the fetched data to the frontend
      res.json(insiderTradesData);
    } catch (error) {
      console.error('Error fetching insider trades data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
