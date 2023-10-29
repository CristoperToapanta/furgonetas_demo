const furgonetaConsultas = require("../database/consultas/furgonetaConsultas");

const furgonetaController = {
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
