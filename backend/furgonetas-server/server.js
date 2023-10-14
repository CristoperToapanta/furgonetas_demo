const express = require('express')
const cors = require('cors')
const app = express()

const server = require('http').createServer(app)
const port = 3002

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}))

// Ruta principal
const mensaje = require('./routes/mensaje')
const furgoneta = require('./routes/furgoneta')
const conductor = require('./routes/conductor')

app.use('/prueba',mensaje, furgoneta, conductor)
//app.use(furgoneta)



server.listen(port, () => {
    console.log('Servidor en el puerto:'+ port)
})
