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

}

module.exports = mensajeConsultas;
