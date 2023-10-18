const furgonetaConsultas = require("../database/consultas/furgonetaConsultas");

const furgonetaController = {
  // Método para listar furgonetas
  listarFurgonetas: async function (req, res) {
    await furgonetaConsultas
      .consultarFurgonetas()
      .then((msj) => {
        console.log("Respuesta al listado de furgonetas: ", msj);
      })
      .catch((err) => {
        console.log("Error en la consulta de listado de furgonetas: ", err);
      });
  },

  // Método para crear nuevas furgonetas
  crear: async function(req, res){
    const {placa_furgoneta, estado_furgoneta} = req.body;
    await furgonetaConsultas
        .crearFurgoneta(placa_furgoneta, estado_furgoneta)
        .then((msj) => {
            console.log("Respuesta de la Consulta de Creación: ", msj);
            return res.status(200).json({
              result: true,
              code: 200,
              mensaje: "Se ha creado la furgoneta",
            });
          })
          .catch((err) => {
            console.log("Error en la consulta de creación de la furgoneta: ", err);
          });
  }
};

module.exports = furgonetaController;
