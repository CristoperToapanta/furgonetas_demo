const conexion = require('../conexion');

var pasajeroConsultas = {

    /*consultarPasajeros: function() {
        let query = `SELECT * FROM hypermovilidad.tbl_pasajero`;
        return conexion.any(query);
    },*/

    consultarPasajeros: function() {
        let query = `select tr.nombre_representante,tp.cedula_pasajero,tp.nombre_pasajero,tp.edad_pasajero,tp.direccion_pasajero,tp.institucion_pasajero,tp.direccion_institucion,tp.genero from hypermovilidad.tbl_pasajero tp inner join hypermovilidad.tbl_representante tr on tp.id_representante = tr.id_representante`;
        return conexion.any(query);
    },

    crearPasajero: function(id_representante,cedula_pasajero,nombre_pasajero,direccion_pasajero,edad_pasajero,institucion_pasajero,direccion_institucion,genero){
        let query = `INSERT INTO hypermovilidad.tbl_pasajero(id_representante,cedula_pasajero,nombre_pasajero,direccion_pasajero,edad_pasajero,institucion_pasajero,direccion_institucion,genero) VALUES('${id_representante}','${cedula_pasajero}','${nombre_pasajero}','${direccion_pasajero}','${edad_pasajero}','${institucion_pasajero}','${direccion_institucion}','${genero}')`;
        return conexion.any(query);
    }

}

module.exports = pasajeroConsultas;