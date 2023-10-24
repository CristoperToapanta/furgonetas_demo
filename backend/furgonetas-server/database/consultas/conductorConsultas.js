const conexion = require('../conexion');

var conductorConsultas = {

    consultarConductores: function(){

        let query = `select tf.placa_furgoneta,tc.cedula_conductor,tc.nombre_conductor,tc.edad_conductor,tc.tipo_licencia_conductor,tc.direccion_conductor from hypermovilidad.tbl_conductor tc inner join hypermovilidad.tbl_furgoneta tf on tc.id_furgoneta=tf.id_furgoneta`;

        return conexion.any(query);

    },

    crearConductor: function(id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_conductor,direccion_conductor){

        let query = `INSERT INTO hypermovilidad.tbl_conductor(id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,edad_conductor,tipo_licencia_conductor,direccion_conductor) VALUES('${id_furgoneta}','${cedula_conductor}','${nombre_conductor}','${estado_conductor}',${edad_conductor},'${tipo_licencia_conductor}','${direccion_conductor}')`;
        
        return conexion.any(query);

    }

};

module.exports = conductorConsultas;