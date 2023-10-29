const conexion = require("../conexion");

var representanteConsultas = {

    insertarRepresentante: function(params){

        let query = `INSERT INTO hypermovilidad.tbl_representante
                    (cedula_representante,nombre_representante,
                    direccion_representante,parentesco_representante)
                    VALUES('${params[0]}','${params[1]}','${params[2]}',
                    '${params[3]}','${params[4]}')
                    RETURNING id_representante`;
        
        return conexion.any(query);

    },

    consultarRepresentantes: function(params){

        let query = `SELECT * FROM hypermovilidad.tbl_representante ORDER BY id_representante ASC`;

        return conexion.any(query);

    }

}

module.exports = representanteConsultas;