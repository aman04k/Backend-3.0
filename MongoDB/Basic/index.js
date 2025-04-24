const expess = require("express");
const mongoose = require("mongoose");
// const user = require('./model/model.js');

const cors = require("cors");
const app = expess();

app.use(cors());
app.use(expess.json());

// const cors = require('cors');
mongoose
  .connect("mongodb://127.0.0.1:27017/Basic", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));

const user = require("./model/model.js");
const login = require("./model/login.js");

app.get("/", async (req, res) => {
  // find all users in the database
  // const usera = await user.find({});
  // res.send(usera);


  // create a new user in the database
  const aman = await user.create({
    name: " aman kumar",
    email: "aman@gmail.com",
    password: "aman123",
    age: 22,
  });
  res.send(aman);
});

app.get("/login", async(req, res) => {
  const jai = await login.create({
    email: "aman@gmail.com",
    password: "aman123"

    });

    res.send(jai);
    
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
