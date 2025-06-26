// this is server.js
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => app.listen(port, () => { console.log(`server running on port ${port}`) }))
    .catch()

// routes 
