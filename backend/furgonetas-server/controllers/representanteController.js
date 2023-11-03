const representanteConsultas = require("../database/consultas/representanteConsultas");

const representanteController = {

  insertarRepresentante: async function (req, res) {
    await representanteConsultas.insertarRepresentante([
      req.body.cedula_representante, req.body.nombre_representante,
      req.body.direccion_representante, req.body.parentesco_representante
    ]).then((resp) => {
      console.log("Insertado: ", resp)

      return res.status(200).json({
          result: true,
          code: 200,
          mensaje: 'Se ha registrado un nuevo representante: ' + resp[0].id_representante,
          id_representante: resp[0].id_representante

      });
    }).catch((err) => {

        return res.status(400).json({
          result: false,
          code: 400,
          message: "Ha ocurrido un error en la BDD al insertar un representante: " + err
          
      });
    })
  },

  representantesConsulta: async function (req, res) {
    await representanteConsultas
      .consultarRepresentantes([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los representantes",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar los representantes" + err,
        });
      });
  },

  representanteNombres: async function(req, res){
    await representanteConsultas
      .NombresRepresentantes([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los nombres de los representantes",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar los nombres de los representantes" + err,
        });
      });
  }
};

module.exports = representanteController;
