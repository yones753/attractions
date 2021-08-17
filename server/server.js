const express = require('express')
const mongoose = require('mongoose')
const api = require('../server/routes/api')
const app = express()
const PORT = 8080
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);


//process.env.MONGODB_URI || 
mongoose.connect("mongodb://localhost/attractions", { useNewUrlParser: true, useUnifiedTopology: true })  
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', api)


// process.env.URL


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen( PORT, function () {
    console.log(`Server up and running on port ${PORT}`)
})