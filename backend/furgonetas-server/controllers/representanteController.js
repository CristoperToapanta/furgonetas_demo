const representanteConsultas = require("../database/consultas/representanteConsultas");

const representanteController = {

  insertarRepresentante: async function (req, res) {
    await representanteConsultas.insertarRepresentante([
      req.body.cedula_representante, 
      req.body.nombre_representante,
      req.body.direccion_representante, 
      req.body.parentesco_representante
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
  },

  /*edicionRepresentante: async function(req, res){
    await representanteConsultas.EditarRepresentante([
        req.params.id_representante
    ])
    .then((resp) => {
      console.log("Editar Representante: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos a editar del representante",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al obtener los datos del representante a editar: " + err,
      });
    })
  },*/

  actualizacionRepresentante: async function(req, res){
    await representanteConsultas.ActualizarRepresentante([
        req.body.cedula_representante, 
        req.body.nombre_representante,
        req.body.direccion_representante, 
        req.body.parentesco_representante,
        req.body.id_representante
    ])
    .then((resp) => {
      console.log("Actualización del representante: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos actualizados del representante",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al actualizar los datos del representante: " + err,
      });
    })
  },


  eliminacionRepresentante: async function(req, res){
    await representanteConsultas.EliminarRepresentante([
      req.body.id_representante
    ])
    .then((resp) => {
      console.log("Eliminación representante: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Se ha eliminado el representante",
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al eliminar el representante: " + err,
      });
    })
  }
};

module.exports = representanteController;
