const express = require('express')
const mongoose = require('mongoose')
const api = require('../server/routes/api')
const app = express()
const PORT = 8080

//process.env.MONGODB_URI || 
mongoose.connect("mongodb://localhost/attractions", { useNewUrlParser: true, useUnifiedTopology: true })  

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


// process.env.URL
app.use('/', api)
app.listen( PORT, function () {
    console.log(`Server up and running on port ${PORT}`)
})