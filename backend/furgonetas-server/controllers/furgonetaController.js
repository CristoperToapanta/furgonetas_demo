const furgonetaConsultas = require("../database/consultas/furgonetaConsultas");

const furgonetaController = {

  insertarFurgoneta: async function(req, res) {
    await furgonetaConsultas.insertarFurgoneta([
      req.body.placa_furgoneta
    ]).then((resp) => {
      console.log("Insertado: ", resp)

      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: 'Se ha registrado una nueva furgoneta: ' + resp[0].id_furgoneta,
        id_furgoneta: resp[0].id_furgoneta
      });
    }).catch((err) => {

        return res.status(400).json({
          result: false,
          code: 400,
          message: "Ha ocurrido un error en la BDD al insertar una furgoneta: " + err
          
      });
    })
  },

  furgonetaConsulta: async function (req, res) {
    await furgonetaConsultas
      .consultaFurgonetas([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado las furgonetas",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar las furgonetas" + err,
        });
      });
  },

  furgonetaPlacas: async function(req, res) {
    await furgonetaConsultas
      .placasFurgonetas([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado las placas de las furgonetas",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar las placas de las furgonetas" + err,
        });
      });
  },

  /*edicionFurgoneta: async function(req, res){
    await furgonetaConsultas.EditarFurgoneta([
        req.params.id_furgoneta
    ])
    .then((resp) => {
      console.log("Editar: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos a editar de la furgoneta",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al obtener los datos de la furgoneta a editar: " + err,
      });
    })
  },*/

  actualizacionFurgoneta: async function(req, res){
    await furgonetaConsultas.ActualizarConductor([
        req.body.placa_furgoneta,
        req.body.id_furgoneta,
    ])
    .then((resp) => {
      console.log("Actualización: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos actualizados de la furgoneta",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al actualizar los datos de la furgoneta: " + err,
      });
    })
  },

  eliminacionFurgoneta: async function(req, res){
    await furgonetaConsultas.EliminarFurgoneta([
      req.body.id_furgoneta
    ])
    .then((resp) => {
      console.log("Eliminado: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Se ha eliminado la furgoneta",
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al eliminar una furgoneta: " + err,
      });
    })
  }
};

module.exports = furgonetaController;
