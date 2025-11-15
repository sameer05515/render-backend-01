// server.js
const express = require('express');
const app = express();

// optional health route for Render health check
app.get('/health', (req, res) => res.sendStatus(200));

// static file example or API
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from Render! 🚀');
});

const PORT = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
