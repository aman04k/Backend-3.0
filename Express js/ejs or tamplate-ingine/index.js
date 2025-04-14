const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('hello world')
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(5000, (req, res) => {
    console.log("server started")
})