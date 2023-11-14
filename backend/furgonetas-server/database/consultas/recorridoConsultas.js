const conexion = require("../conexion");

var recorridoConsultas = {
  insertarRecorrido: function (params) {
    let query = `INSERT INTO hypermovilidad.tbl_recorrido
                     (id_conductor,id_pasajero,id_furgoneta,tipo_recorrido)
                     VALUES('${params[0]}','${params[1]}','${params[2]}',
                     '${params[3]}') RETURNING id_recorrido`;

    return conexion.any(query);
  },

  consultarRecorridos: function (params) {
    let query = `SELECT tc.nombre_conductor,
                        tf.placa_furgoneta,
                        tp.nombre_pasajero,
                        tr.tipo_recorrido
                 FROM hypermovilidad.tbl_recorrido tr 
                 INNER JOIN hypermovilidad.tbl_conductor tc
                 ON tr.id_conductor=tc.id_conductor
                 INNER JOIN hypermovilidad.tbl_pasajero tp
                 ON tr.id_pasajero=tp.id_pasajero
                 INNER JOIN hypermovilidad.tbl_furgoneta tf
                 ON tr.id_furgoneta=tf.id_furgoneta
                 ORDER BY tr.id_recorrido`;

    return conexion.any(query);
  },

  tomarAsistencia: function(params){
    let query = `SELECT tp.nombre_pasajero,
                        tr.asistencia 
                 FROM hypermovilidad.tbl_recorrido tr 
                 INNER JOIN hypermovilidad.tbl_conductor tc
                 ON tr.id_conductor=tc.id_conductor
                 INNER JOIN hypermovilidad.tbl_pasajero tp
                 ON tr.id_pasajero=tp.id_pasajero
                 WHERE tc.id_conductor='${params[0]}'`;

    return conexion.any(query);
  }

};

module.exports = recorridoConsultas;
