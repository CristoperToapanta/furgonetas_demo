const conexion = require('../conexion');

var conductorConsultas = {

    insertarConductor: function(params){

        let query = `INSERT INTO hypermovilidad.tbl_conductor
                    (id_furgoneta,cedula_conductor,nombre_conductor,estado_conductor,
                    edad_conductor,tipo_licencia_conductor,direccion_conductor) 
                    VALUES('${params[0]}','${params[1]}',
                    '${params[2]}',true,${params[3]},
                    '${params[4]}','${params[5]}') 
                    RETURNING id_conductor`;
        
        return conexion.any(query);

    },

    consultarConductores: function(){

        let query = `select tf.placa_furgoneta,tc.cedula_conductor,tc.nombre_conductor,tc.edad_conductor,tc.tipo_licencia_conductor,tc.direccion_conductor from hypermovilidad.tbl_conductor tc inner join hypermovilidad.tbl_furgoneta tf on tc.id_furgoneta=tf.id_furgoneta`;

        return conexion.any(query);

    },


    NombreConductores: function(){
        
        let query = `SELECT id_conductor,nombre_conductor FROM hypermovilidad.tbl_conductor ORDER BY id_conductor ASC`;

        return conexion.any(query);
    }
   

};

module.exports = conductorConsultas;