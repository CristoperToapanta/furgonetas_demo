const mensajeConsultas = require("../database/consultas/mensajeConsultas");

const mensajeController = {
  // Metodo enviarMensaje
  enviarMensaje: async function (req, res) {
    // Consulta # 1
    await mensajeConsultas
      .consultarMensajes()
      .then((msj) => {
        console.log("Respuesta de la Consulta #1 a la Base de Datos: ", msj);
      })
      .catch((err) => {
        console.log("Error en la consulta: ", err);
      }); 
  },

  // Método consultar mensaje por id
  mensajeporId: async function(req, res) {
     const id = req.params.id;
     await mensajeConsultas
     .consultarMensaje([id])
     .then((msj) => {
       console.log("Respuesta de la Consulta #2 a la Base de Datos: ", msj);
       return res.status(200).json({
         result: true,
         code: 200,
         mensaje: msj[0].descripcion_mensaje,
       });
     })
     .catch((err) => {
       console.log("Error en la consulta: ", err);
     });
  },

  // Metodo recibirMensaje
  recibirMensaje: function (req, res) {
    const mensaje_recibido = req.body.mensaje_enviado;
    console.log("Mensaje desde el Front:", mensaje_recibido);

    return res.status(200).json({
      result: true,
      code: 200,
      mensaje: "Se ha recibido el Mensaje",
    });
  },

  // Método para insertar un nuevo mensaje
  insertarMensaje: async function (req, res){
    const {descripcion_mensaje}  = req.body;
    await mensajeConsultas
      .insertandoMensaje(descripcion_mensaje)
      .then((msj) => {
        console.log("Respuesta de la Consulta Insertar: ", msj);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se ha insertado el mensaje",
        });
      })
      .catch((err) => {
        console.log("Error en la consulta: ", err);
      });
  },

  // Método para actualizar un mensaje
  actualizarMensaje: async function(req, res){
    const id = req.params.id;
    const {descripcion_mensaje} = req.body;
    await mensajeConsultas
      .actualizarMensaje(descripcion_mensaje, [id])
      .then((msj) => {
        console.log("Respuesta de la Consulta Actualizar: ", msj);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se ha actualizado el mensaje",
        });
      })
      .catch((err) => {
        console.log("Error en la consulta: ", err);
      });
  },

  // Método para eliminar un mensaje
  eliminarMensaje: async function(req, res){
    const id = req.params.id;
    await mensajeConsultas
      .eliminarMensaje([id])
      .then((msj) => {
        console.log("Respuesta de la Consulta Eliminar: ", msj);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se ha eliminado el mensaje", msj
        });
      })
      .catch((err) => {
        console.log("Error en la consulta: ", err);
      });
  }
};

module.exports = mensajeController;
