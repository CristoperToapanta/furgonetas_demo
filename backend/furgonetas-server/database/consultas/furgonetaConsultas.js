const conexion = require("../conexion");

var furgonetaConsultas = {

    insertarFurgoneta: function(params){

        let query = `INSERT INTO hypermovilidad.tbl_furgoneta(placa_furgoneta,estado_furgoneta) 
                     VALUES('${params[0]}',${params[1]}) 
                     RETURNING id_furgoneta`;
        
        return conexion.any(query);

    },

    consultaFurgonetas: function(params){

        let query = `SELECT * FROM hypermovilidad.tbl_furgoneta ORDER BY id_furgoneta ASC`;

        return conexion.any(query);
    }

}

module.exports = furgonetaConsultas;