const recorridoConsultas = require("../database/consultas/recorridoConsultas");

const recorridoController = {
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
