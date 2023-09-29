const express = require('express')
const cors = require('cors')
const app = express()

const server = require('http').createServer(app)
const port = 3002

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))

const mensaje = require('./routes/mensaje')
app.use('/prueba', mensaje)

server.listen(port, () => {
    console.log('Servidor en el puerto:'+ port)
})
