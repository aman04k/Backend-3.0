const express = require('express')
const app = express()

app.use((req, res, next) => {
    // console.log(req)
    console.log("hello from middleware")
    next()
})

app.get('/', (req, res) => {
    res.send('this is middler ware example')
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})


// route parameter: to make dynamically url   params (:)
app.get("/profile/:username", (req,res) => {
    res.send(`hello  ${req.params.username}`)
})

app.listen(2000, (req, res) => {
    console.log("server started")
})