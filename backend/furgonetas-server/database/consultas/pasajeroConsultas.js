const conexion = require("../conexion");

var pasajeroConsultas = {

    insertPasajero: function (params) {

        let query = `INSERT INTO hypermovilidad.tbl_pasajero
                    (id_representante, cedula_pasajero, nombre_pasajero, 
                    estado_pasajero, direccion_pasajero, edad_pasajero, 
                    institucion_pasajero, direccion_institucion)
                    VALUES(1, '${params[0]}', '${params[1]}', 
                        true, '${params[2]}', '${params[3]}', 
                        '${params[4]}', '${params[5]}')
                    RETURNING id_pasajero`;

        return conexion.any(query);

    },

    readPasajeros: function (params) {

        let query = `SELECT * 
                     FROM hypermovilidad.tbl_pasajero tp
                     ORDER BY tp.id_pasajero DESC;`;

        return conexion.any(query);

    },

};

module.exports = pasajeroConsultas;