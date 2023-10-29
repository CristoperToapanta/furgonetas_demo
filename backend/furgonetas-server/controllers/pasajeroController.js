const pasajeroConsultas = require("../database/consultas/pasajeroConsultas");

const pasajeroController = {

    //Método para listar pasajero
    listarPasajero: async function(req, res){
        await pasajeroConsultas
            .consultarPasajeros([])
            .then((resp) => {
                return res.status(200).json({
                        result: true,
                        code: 200,
                        mensaje: 'Se han consultado los pasajeros',
                        lista: resp
                    });
            }).catch((err) => {
                return res.status(400).json({
                    result: false,
                    code: 400,
                    message: "Ha ocurrido un error en la BDD al consultar los pasajeros" + err
                });
            })     
    }, 

    /*listarPasajero: async function(req, res){
        let lista = await pasajeroConsultas.consultarPasajeros()  
        res.json(lista);
    },*/

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