const conductorConsultas = require("../database/consultas/conductorConsultas");

const conductorController = {

    insertarConductor: async function (req, res){
        await conductorConsultas.insertarConductor([
            req.body.id_furgoneta, req.body.cedula_conductor,
            req.body.nombre_conductor, req.body.edad_conductor,
            req.body.tipo_licencia_conductor, req.body.direccion_conductor
        ]).then((resp) => {
            console.log("Insertado: ", resp)
            return res.status(200).json({
                    result: true,
                    code: 200,
                    mensaje: 'Se ha registrado un nuevo conductor: ' + resp[0].id_conductor,
                    id_conductor: resp[0].id_conductor
            });
        }).catch((err) => {
            return res.status(400).json({
                result: false,
                code: 400,
                message: "Ha ocurrido un error en la BDD al insertar un conductor: " + err
            });
        })
    },

    // Método para listar conductores
    listarConductor: async function (req, res) {
        await conductorConsultas.consultarConductores([])
        .then((resp) => {
            console.log(resp)
            return res.status(200).json({
                    result: true,
                    code: 200,
                    mensaje: 'Se han consultado los conductores',
                    lista: resp
                });
        }).catch((err) => {
            return res.status(400).json({
                result: false,
                code: 400,
                message: "Ha ocurrido un error en la BDD al consultar los conductores" + err
            });
        })
    },


    // Método para crear nuevas conductores
    crear: async function (req, res) {
        const { id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_conductor,direccion_conductor } = req.body;
        await conductorConsultas
            .crearConductor(id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_conductor,direccion_conductor)
            .then((msj) => {
                console.log("Respuesta de la Consulta de Creación de conductores: ", msj);
                return res.status(200).json({
                    result: true,
                    code: 200,
                    mensaje: "Se ha creado un conductor",
                });
            })
            .catch((err) => {
                console.log("Error en la consulta de creación de conductores: ", err);
            });
    }
};

module.exports = conductorController;