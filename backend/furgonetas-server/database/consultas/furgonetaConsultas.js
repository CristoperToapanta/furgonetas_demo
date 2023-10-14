const conexion = require("../conexion");

var furgonetaConsultas = {

    consultarFurgonetas: function(){

        let query = `SELECT * FROM hypermovilidad.tbl_furgoneta`;

        return conexion.any(query);

    },

    crearFurgoneta: function(placa_furgoneta, estado_furgoneta){

        let query = `INSERT INTO hypermovilidad.tbl_furgoneta(placa_furgoneta,estado_furgoneta) VALUES('${placa_furgoneta}','${estado_furgoneta}')`;
        
        return conexion.any(query);

    },

};

module.exports = furgonetaConsultas;