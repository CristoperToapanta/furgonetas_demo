const pasajeroConsultas = require("../database/consultas/pasajeroConsultas");

const pasajerosController = {
  insertarPasajero: async function (req, res) {
    await pasajeroConsultas
      .insertPasajero([
        req.body.id_representante,
        req.body.cedula_pasajero,
        req.body.nombre_pasajero,
        req.body.direccion_pasajero,
        req.body.edad_pasajero,
        req.body.institucion_pasajero,
        req.body.direccion_institucion,
        req.body.genero_pasajero,
      ])
      .then((resp) => {
        console.log("Insertado: ", resp);

        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se ha registrado un nuevo pasajero: " + resp[0].id_pasajero,
          id_pasajero: resp[0].id_pasajero,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al insertar un pasajero: " + err,
        });
      });
  },

  consultarPasajeros: async function (req, res) {
    await pasajeroConsultas
      .readPasajeros([])
      .then((resp) => {
        console.log(resp);

        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los pasajeros",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message: "Ha ocurrido un error en la BDD al consultar los pasajeros" + err,
        });
      });
  },

  pasajerosNombres: async function (req, res) {
    await pasajeroConsultas
      .nombresPasajeros([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los nombres de los pasajeros",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:"Ha ocurrido un error en la BDD al consultar los nombres de los pasajeros" + err,
        });
      });
  },
};

module.exports = pasajerosController;
