const conexion = require("../conexion");

var pasajeroConsultas = {

    insertPasajero: function (params) {

        let query = `INSERT INTO hypermovilidad.tbl_pasajero
                    (id_representante,cedula_pasajero,nombre_pasajero, 
                    direccion_pasajero,edad_pasajero,institucion_pasajero, 
                    direccion_institucion,genero_pasajero,estado_pasajero)
                    VALUES('${params[0]}','${params[1]}','${params[2]}', 
                           '${params[3]}','${params[4]}','${params[5]}', 
                           '${params[6]}','${params[7]}',true)
                    RETURNING id_pasajero`;

        return conexion.any(query);

    },

    readPasajeros: function (params) {

        //let query = `SELECT * FROM hypermovilidad.tbl_pasajero tp ORDER BY tp.id_pasajero DESC;`;
        let query = `select tr.nombre_representante,tp.cedula_pasajero,tp.nombre_pasajero,tp.edad_pasajero,tp.direccion_pasajero,tp.institucion_pasajero,tp.direccion_institucion,tp.genero_pasajero from hypermovilidad.tbl_pasajero tp inner join hypermovilidad.tbl_representante tr on tp.id_representante = tr.id_representante`;

        return conexion.any(query);

    },

    nombresPasajeros: function(){

        let query = `SELECT id_pasajero,nombre_pasajero FROM hypermovilidad.tbl_pasajero ORDER BY id_pasajero ASC`;

        return conexion.any(query);

    },

    EditarPasajero: function(params){
        let query = `SELECT id_representante,
                            cedula_pasajero,
                            nombre_pasajero,
                            direccion_pasajero,
                            edad_pasajero,
                            institucion_pasajero,
                            direccion_institucion,
                            genero_pasajero 
                     FROM hypermovilidad.tbl_pasajero
                     WHERE id_pasajero='${params[0]}'`;
                            
        return conexion.any(query);
    },

    ActualizarPasajero: function(params){
        let query = `UPDATE hypermovilidad.tbl_pasajero
                     SET id_representante='${params[0]}',
                         cedula_pasajero='${params[1]}',
                         nombre_pasajero='${params[2]}',
                         direccion_pasajero='${params[3]}',
                         edad_pasajero='${params[4]}',
                         institucion_pasajero='${params[5]}',
                         direccion_institucion='${params[6]}',
                         genero_pasajero='${params[7]}'
                     WHERE id_pasajero='${params[8]}'`;
            
        return conexion.any(query);
    },

    EliminarPasajero: function(params){
        let query = `UPDATE hypermovilidad.tbl_pasajero
                     SET estado_pasajero='false'
                     WHERE id_pasajero='${params[0]}'`;
        
        return conexion.any(query);
    }
};

module.exports = pasajeroConsultas;