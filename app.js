require('dotenv').config()
const express = require('express')
const dbConnection = require('./config/mongo')
const routes = require('./routes/routes')

const app = express()

app.use(express.json())


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

routes(app)
dbConnection()
