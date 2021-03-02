const express = require('express');
const products = require('./data/products');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('API is Running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, console.log(`server running on Port ${PORT}`));
