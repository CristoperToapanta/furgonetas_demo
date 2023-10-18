const pasajeroConsultas = require("../database/consultas/pasajeroConsultas");

const pasajeroController = {

    // Método para listar pasajero
    listarPasajero: async function(req, res){
        await pasajeroConsultas
            .consultarPasajeros()
            .then((msj) => {
                console.log("Respuesta al listado de pasajeros: ", msj);
            })
            .catch((err) => {
                console.log("Error en la consulta de listado de pasajeros: ", err);
            });
    }, 

    crearPasajero: async function(req, res){
        const {id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_coductor,direccion_conductor} = req.body;
        await pasajeroConsultas
            .crearPasajero(id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_coductor,direccion_conductor)
            .then((msj) => {
                console.log("Respuesta de la Consulta de Creación de pasajeros: ", msj);
                return res.status(200).json({
                    result: true,
                    code: 200,
                    mensaje: "Se ha creado un pasajero",
                });
            })
            .catch((err) => {
                console.log("Error en la consulta de creación de pasajeros: ", err);
            });
    }

}

module.exports = pasajeroController;