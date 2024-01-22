const recorridoConsultas = require("../database/consultas/recorridoConsultas");

const recorridoController = {
  insertarRecorrido: async function (req, res) {
    await recorridoConsultas
      .insertarRecorrido([
        req.body.id_conductor,
        req.body.id_pasajero,
        req.body.id_furgoneta,
        req.body.tipo_recorrido,
      ])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje:
            "Se ha registrado un nuevo recorrido: " + resp[0].id_recorrido,
          id_recorrido: resp[0].id_recorrido,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al insertar un recorrido: " + err,
        });
      });
  },

  recorridoConsulta: async function (req, res) {
    await recorridoConsultas
      .consultarRecorridos()
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los recorridos",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar los recorridos" + err,
        });
      });
  },

  asistencia: async function (req, res) {
    const id = req.params.id;
    await recorridoConsultas
      .tomarAsistencia([id])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los datos para tomar asistencia",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar los datos para la toma de asistencia" +
            err,
        });
      });
  },

  edicionRecorrido: async function(req, res){
    await recorridoConsultas.EditarRecorrido([
        req.params.id_recorrido
    ])
    .then((resp) => {
      console.log("Editado del recorrido: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos a editar del recorrido",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al obtener los datos para editar el recorrido: " + err,
      });
    })
  },

  actualizacionRecorrido: async function(req, res){
    await recorridoConsultas.ActualizarRecorrido([
        req.body.id_conductor,
        req.body.id_pasajero,
        req.body.id_furgoneta,
        req.body.tipo_recorrido,
        req.body.id_recorrido
    ])
    .then((resp) => {
      console.log("Actualización del recorrido: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos actualizados del recorrido",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al actualizar los datos del recorrido: " + err,
      });
    })
  },

  eliminacionRecorrido: async function(req, res){
    await recorridoConsultas.EliminarRecorrido([
      req.params.id_recorrido
    ])
    .then((resp) => {
      console.log("Eliminado el recorrido: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Se ha eliminado el recorrido",
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al eliminar el recorrido: " + err,
      });
    })
  }
};

module.exports = recorridoController;
