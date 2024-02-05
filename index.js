const express = require('express');
const phones = require( './phons.json');
const cors = require('cors');
const app = express();
const port = 7000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('My phone information coming soon!')
});

app.get('/phones', (req, res) => {
  res.send(phones);
});

app.get('/phones/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find(phone => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`My phone server is running on port ${port}`)
});