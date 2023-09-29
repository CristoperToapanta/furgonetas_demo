const mensajeController = {

    enviarMensaje: function (req, res) {

      console.log("Mensaje Recibido: " + req.body.mensaje);

      return res.status(200).json(
        { 
            result: true,
            code: 200,
            mensaje: req.body.mensaje,
        }
      ); 

    },

};
  
module.exports = mensajeController;
  