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
};

module.exports = furgonetaController;
