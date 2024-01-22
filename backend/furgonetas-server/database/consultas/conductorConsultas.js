const conexion = require('../conexion');

var conductorConsultas = {

    insertarConductor: function(params){

        let query = `INSERT INTO hypermovilidad.tbl_conductor
                    (id_furgoneta,cedula_conductor,nombre_conductor,edad_conductor,
                     tipo_licencia_conductor,direccion_conductor,estado_conductor) 
                    VALUES('${params[0]}','${params[1]}',
                           '${params[2]}',${params[3]},'${params[4]}',
                           '${params[5]}',true) 
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
    },

    EditarConductor: function(params){
        let query = `SELECT id_furgoneta,
                            cedula_conductor,
                            nombre_conductor,
                            edad_conductor,
                            tipo_licencia_conductor,
                            direccion_conductor
                    FROM hypermovilidad.tbl_conductor
                    WHERE id_conductor='${params[0]}'`;
                            
        return conexion.any(query);
    },

    ActualizarConductor: function(params){
        let query = `UPDATE hypermovilidad.tbl_conductor 
                     SET id_furgoneta='${params[0]}',
                         cedula_conductor='${params[1]}',
                         nombre_conductor='${params[2]}',
                         edad_conductor='${params[3]}',
                         tipo_licencia_conductor='${params[4]}',
                         direccion_conductor='${params[5]}'
                     WHERE id_conductor='${params[6]}'`;
            
        return conexion.any(query);
    },

    EliminarConductor: function(params){
        let query = `UPDATE hypermovilidad.tbl_conductor 
                     SET  estado_conductor = 'false' 
                     WHERE id_conductor = '${params[0]}'`;
        
        return conexion.any(query);
    }
   

};

module.exports = conductorConsultas;