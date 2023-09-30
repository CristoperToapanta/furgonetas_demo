const mensajeController = {

    enviarMensaje: function (req, res) {

      return res.status(200).json(
        { 
            result: true,
            code: 200,
            mensaje: "Mensaje desde el Back",
            
        }
      ); 

    },

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
  