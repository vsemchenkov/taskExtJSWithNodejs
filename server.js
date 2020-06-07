const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000;

const mongoose = require('mongoose')
const db = `mongodb+srv://loutweak:261751661@mongodb-ehlpm.mongodb.net/home?retryWrites=true&w=majority`

mongoose.connect(db, err => {
    if(err) {
        console.log('Error: ', err)
    } else {
        console.log("\x1b[32m", 'connected mongodb', "\x1b[0m");
    }
})

const app = express();
// Body parse in json object
app.use(bodyParser.json())

// Routes
const routesApi = require('./Api/router')

// Route API
app.use('/', routesApi)


app.listen(PORT, () => {
    console.log('Express Server started on port 3000')
})
