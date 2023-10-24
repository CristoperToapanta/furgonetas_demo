const conductorConsultas = require("../database/consultas/conductorConsultas");

const conductorController = {
    // Método para listar conductores
    /*listarConductor: async function (req, res) {
        await conductorConsultas
            .consultarConductores()
            .then((msj) => {
                console.log("Respuesta al listado de conductores: ", msj);
            })
            .catch((err) => {
                console.log("Error en la consulta de listado de conductores: ", err);
            });
    },*/

    listarConductor: async function(req, res){
        let lista = await conductorConsultas.consultarConductores();
        res.json(lista);
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