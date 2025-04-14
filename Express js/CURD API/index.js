const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js') 

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

// get all
app.get('/api/product', async(req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// get by id or find
 app.get('/api/product/:id', async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// update
app.put('/api/product/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(product)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

//  make delete
app.delete('/api/product/:id', async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.json(product)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// make post
app.post("/api/product", async(req, res) => {  
    // console.log(req.body)
    // res.send(req.body)
    try {
       
        const product = await Product.create(req.body)

        res.status(201).json(product)

    } catch (e) {
        res.status(500).json({message: e.message})
    }

})

mongoose.connect('mongodb://127.0.0.1:27017/node_api')
  .then(() => {
      console.log('Database Connection Successfull!')
      app.listen(5000, () => {
          console.log("server started")
      })
  })
  .catch((err) => {
     console.log('Database Connection Failed!', err)
  });
