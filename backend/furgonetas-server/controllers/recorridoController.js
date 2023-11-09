const recorridoConsultas = require("../database/consultas/recorridoConsultas");

const recorridoController = {

  insertarRecorrido: async function (req, res) {
    await recorridoConsultas.insertarRecorrido([
        req.body.id_conductor, 
        req.body.id_pasajero,
        req.body.id_furgoneta, 
        req.body.tipo_recorrido,
      ])
      .then((resp) => {
        console.log(resp)
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: 'Se ha registrado un nuevo recorrido: ' + resp[0].id_recorrido,
          id_recorrido: resp[0].id_recorrido
        });
      }).catch((err) => {
          return res.status(400).json({
            result: false,
            code: 400,
            message: "Ha ocurrido un error en la BDD al insertar un recorrido: " + err
        });
      })
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
            "Ha ocurrido un error en la BDD al consultar los recorridos" +
            err,
        });
      });
  },
};

module.exports = recorridoController;
