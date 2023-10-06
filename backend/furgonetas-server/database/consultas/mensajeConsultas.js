const conexion = require("../conexion");

var mensajeConsultas = {

    consultarMensajes: async function () {

        let query = `SELECT * 
                     FROM hypermovilidad.tbl_mensaje`;
    
        return conexion.any(query);

    },

    consultarMensaje: function (params) {

        let query = `SELECT * 
                     FROM hypermovilidad.tbl_mensaje tm
                     WHERE tm.id_mensaje = ${params}`;
    
        return conexion.any(query);

    },

    insertandoMensaje: function (params) {

        let query = `INSERT INTO hypermovilidad.tbl_mensaje(descripcion_mensaje) VALUES('${params}')`;
        //let query = `INSERT INTO hypermovilidad.tbl_mensaje VALUES(${params})`;
        return conexion.any(query);
    },

    actualizarMensaje: function (params, id){

        let query = `UPDATE hypermovilidad.tbl_mensaje SET descripcion_mensaje = '${params}' WHERE id_mensaje=${id}`;
        
        return conexion.any(query);
    },

    eliminarMensaje: function(params){

        let query = `DELETE FROM hypermovilidad.tbl_mensaje tm WHERE tm.id_mensaje=${params}`;

        return conexion.any(query);

    }

}

module.exports = mensajeConsultas;
