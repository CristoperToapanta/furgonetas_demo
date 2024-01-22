const conductorConsultas = require("../database/consultas/conductorConsultas");

const conductorController = {
  insertarConductor: async function (req, res) {
    await conductorConsultas
      .insertarConductor([
        req.body.id_furgoneta,
        req.body.cedula_conductor,
        req.body.nombre_conductor,
        req.body.edad_conductor,
        req.body.tipo_licencia_conductor,
        req.body.direccion_conductor,
      ])
      .then((resp) => {
        console.log("Insertado: ", resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje:
            "Se ha registrado un nuevo conductor: " + resp[0].id_conductor,
          id_conductor: resp[0].id_conductor,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al insertar un conductor: " + err,
        });
      });
  },

  // Método para listar conductores
  listarConductor: async function (req, res) {
    await conductorConsultas
      .consultarConductores([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los conductores",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar los conductores" + err,
        });
      });
  },

  // Método para obtener los nombres de los conductores
  conductoresNombres: async function (req, res) {
    await conductorConsultas
      .NombreConductores([])
      .then((resp) => {
        console.log(resp);
        return res.status(200).json({
          result: true,
          code: 200,
          mensaje: "Se han consultado los nombres de los conductores",
          lista: resp,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          result: false,
          code: 400,
          message:
            "Ha ocurrido un error en la BDD al consultar los nombres de los conductores" + err,
        });
      });
  },

  /* Método para extraer los datos de un registro */
  editarConductor: async function(req, res){
    await conductorConsultas.EditarConductor([
        req.params.id_conductor
    ])
    .then((resp) => {
      console.log("Editar: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos a editar del conductor",
        lista: resp,
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al obtener los datos del conductor para editarlos: " + err,
      });
    })
  },

   /*Método para hacer la actualización de un registro */
   actualizarConductor: async function(req, res){
    await conductorConsultas.ActualizarConductor([
        req.body.id_furgoneta,
        req.body.cedula_conductor,
        req.body.nombre_conductor,
        req.body.edad_conductor,
        req.body.tipo_licencia_conductor,
        req.body.direccion_conductor,
        req.body.id_conductor,
    ])
    .then((resp) => {
      console.log("Actualización: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Datos a actualizados del conductor",
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al actualizar los datos del conductor: " + err,
      });
    })
  },

  // Método para eliminar un conductor(se actualiza su estado a false y el registro se conserva en la base de datos con un estado false)
  eliminacionConducor: async function(req, res){
    await conductorConsultas.EliminarConductor([
      req.params.id_conductor
    ])
    .then((resp) => {
      console.log("Eliminado: ", resp);
      return res.status(200).json({
        result: true,
        code: 200,
        mensaje: "Se eliminado el conductor",
      })
    })
    .catch((err) => {
      return res.status(400).json({
        result: false,
        code: 400,
        message:
          "Ha ocurrido un error en la BDD al eliminar un conductor: " + err,
      });
    })
  }
};

module.exports = conductorController;
