const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const saborRoutes = require('./routes/saborRoutes.js')


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/sabores', saborRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log("MongoDB conectado")
        app.listen(process.env.PORT, () =>{
            console.log("Server rodando na porta:", process.env.PORT)
        })
    })
    .catch((err) =>{
        console.error("Integração não bem sucedida:", err)
    })