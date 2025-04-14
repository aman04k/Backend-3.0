const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('hello world')
})

app.post("./product",(req,res) =>{
    res.send('this is product')
})

app.listen(4000, 'localhost',() => {
    console.log("server started")
})