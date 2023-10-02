const mensajeConsultas = require("../database/consultas/mensajeConsultas");

const mensajeController = {

    // Metodo enviarMensaje 
    enviarMensaje: async function (req, res) {

      // Consulta # 1
      await mensajeConsultas.consultarMensajes()
        .then((msj) => {

          // Mostrar consulta en consola
          console.log("Respuesta de la Consulta #1 a la Base de Datos: ", msj)
          

        })
        .catch((err) => {
          console.log("Error en la consulta: ", err)
        })

      // Consulta # 2
      await mensajeConsultas.consultarMensaje([2])
      .then((msj) => {

        // Mostrar consulta en consola
        console.log("Respuesta de la Consulta #2 a la Base de Datos: ", msj)

        // Enviar respuesta al frontend
        return res.status(200).json(
          {
            result: true,
            code: 200,
            mensaje: msj[0].descripcion_mensaje,
          }
        );
  
      })
      .catch((err) => {
        console.log("Error en la consulta: ", err)
      })
      
    /*
      return res.status(200).json(
        { 
            result: true,
            code: 200,
            mensaje: "Mensaje desde el Back",
            
        }
      ); 
      */

    },

    // Metodo recibirMensaje
    recibirMensaje: function (req, res) {

      const mensaje_recibido = req.body.mensaje_enviado
      console.log("Mensaje desde el Front:", mensaje_recibido)

      return res.status(200).json(
        { 
            result: true,
            code: 200,
            mensaje: "Se ha recibido el Mensaje",
            
        }
      ); 

    },



};
  
module.exports = mensajeController;
  