const conexion = require("../conexion");

var representanteConsultas = {

    insertarRepresentante: function(params){

        let query = `INSERT INTO hypermovilidad.tbl_representante
                    (cedula_representante,nombre_representante,
                    direccion_representante,parentesco_representante,
                    estado_representante)
                    VALUES('${params[0]}','${params[1]}','${params[2]}',
                    '${params[3]}',true)
                    RETURNING id_representante`;
        
        return conexion.any(query);

    },

    consultarRepresentantes: function(params){

        let query = `SELECT * FROM hypermovilidad.tbl_representante ORDER BY id_representante ASC`;

        return conexion.any(query);

    },

    NombresRepresentantes: function(params){

        let query = `SELECT id_representante,nombre_representante FROM hypermovilidad.tbl_representante ORDER BY id_representante DESC`;

        return conexion.any(query);
    },

    EditarRepresentante: function(params){
        let query = `SELECT cedula_representante,
                            nombre_representante,
                            direccion_representante,
                            parentesco_representante 
                     FROM hypermovilidad.tbl_representante
                     WHERE id_representante='${params[0]}'`;
                            
        return conexion.any(query);
    },

    ActualizarRepresentante: function(params){
        let query = `UPDATE hypermovilidad.tbl_representante
                     SET cedula_representante='${params[0]}',
                         nombre_representante='${params[1]}',
                         direccion_representante='${params[2]}',
                         parentesco_representante='${params[3]}'
                     WHERE id_representante='${params[4]}'`;
            
        return conexion.any(query);
    },

    EliminarRepresentante: function(params){
        let query = `UPDATE hypermovilidad.tbl_representante
                     SET estado_representante='false'
                     WHERE id_representante='${params[0]}'`;
        
        return conexion.any(query);
    }

}

module.exports = representanteConsultas;