// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello MongoDB!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
