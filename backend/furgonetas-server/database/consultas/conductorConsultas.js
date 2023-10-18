const conexion = require('../conexion');

var conductorConsultas = {

    consultarConductores: async function(){

        let query = `SELECT * FROM hypermovilidad.tbl_conductor`;

        return conexion.any(query);

    },

    crearConductor: function(id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_coductor,direccion_conductor){

        let query = `INSERT INTO hypermovilidad.tbl_conductor(id_furgoneta,cedula_conductor, nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_coductor,direccion_conductor) VALUES('${id_furgoneta}','${cedula_conductor}','${nombre_conductor}','${estado_conductor}',${edad_conductor},'${tipo_licencia_coductor}','${direccion_conductor}')`;
        
        return conexion.any(query);

    }

};

module.exports = conductorConsultas;