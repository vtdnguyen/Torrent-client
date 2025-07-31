const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello DevSecOps World from Duy Nguyen!', 
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
