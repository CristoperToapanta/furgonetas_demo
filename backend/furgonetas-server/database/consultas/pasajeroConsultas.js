const conexion = require('../conexion');

var pasajeroConsultas = {

    consultarPasajeros: function() {
        let query = `SELECT * FROM hypermovilidad.tbl_pasajero`;
        return conexion.any(query);
    },

    crearPasajero: function(id_representante,cedula_pasajero,nombre_pasajero,estado_pasajero,direccion_pasajero,edad_pasajero,institucion_pasajero,direccion_institucion){
        let query = `INSERT INTO hypermovilidad.tbl_pasajero(id_representante,cedula_pasajero,nombre_pasajero,estado_pasajero,direccion_pasajero,edad_pasajero,institucion_pasajero,direccion_institucion) VALUES('${id_representante}','${cedula_pasajero}','${nombre_pasajero}','${estado_pasajero}','${direccion_pasajero}','${edad_pasajero}','${institucion_pasajero}','${direccion_institucion}')`;
        return conexion.any(query);
    }

}

module.exports = pasajeroConsultas;