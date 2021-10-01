const connectToMongo=require('./db');
const express = require('express')
const port = 5000
var cors = require('cors')
var app = express()

app.use(cors())

connectToMongo();

app.use(express.json())
//Availabe Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))




app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)

})