const pasajeroConsultas = require("../database/consultas/pasajeroConsultas");

const pasajeroController = {

    //Método para listar pasajero
    /*listarPasajero: async function(req, res){
        const lista = await pasajeroConsultas
            .consultarPasajeros() 
            .then((msj) => {
                console.log("Respuesta al listado de pasajeros: ", msj);
                
            })
            .catch((err) => {
                console.log("Error en la consulta de listado de pasajeros: ", err);
            });
           
            
    }, */

    listarPasajero: async function(req, res){
        let lista = await pasajeroConsultas.consultarPasajeros()  
        res.json(lista);
    },

    crearPasajero: async function(req, res){
        const {id_representante,cedula_pasajero,nombre_pasajero,direccion_pasajero,edad_pasajero,institucion_pasajero,direccion_institucion,genero} = req.body;
        await pasajeroConsultas
            .crearPasajero(id_representante,cedula_pasajero,nombre_pasajero,direccion_pasajero,edad_pasajero,institucion_pasajero,direccion_institucion,genero)
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