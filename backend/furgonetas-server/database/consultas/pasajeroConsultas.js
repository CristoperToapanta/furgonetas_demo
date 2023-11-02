const conexion = require("../conexion");

var pasajeroConsultas = {

    insertPasajero: function (params) {

        let query = `INSERT INTO hypermovilidad.tbl_pasajero
                    (id_representante, cedula_pasajero, nombre_pasajero, 
                    estado_pasajero, direccion_pasajero, edad_pasajero, 
                    institucion_pasajero, direccion_institucion,genero_pasajero)
                    VALUES('${params[0]}', '${params[1]}', '${params[2]}', 
                        true, '${params[3]}', '${params[4]}', 
                        '${params[5]}', '${params[6]}','${params[7]}')
                    RETURNING id_pasajero`;

        return conexion.any(query);

    },

    readPasajeros: function (params) {

        //let query = `SELECT * FROM hypermovilidad.tbl_pasajero tp ORDER BY tp.id_pasajero DESC;`;
        let query = `select tr.nombre_representante,tp.cedula_pasajero,tp.nombre_pasajero,tp.edad_pasajero,tp.direccion_pasajero,tp.institucion_pasajero,tp.direccion_institucion,tp.genero_pasajero from hypermovilidad.tbl_pasajero tp inner join hypermovilidad.tbl_representante tr on tp.id_representante = tr.id_representante`;

        return conexion.any(query);

    },
};

module.exports = pasajeroConsultas;