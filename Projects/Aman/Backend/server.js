const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234', 
  database: 'userdb'
});

db.connect(err => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/register', (req, res) => {
  const { name,
     email, password } = req.body;

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).send({ msg: "Error registering user", error: err });
    }
    res.send({ msg: "User registered successfully!" });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
