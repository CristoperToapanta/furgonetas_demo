const router = require('express').Router();
const {insertarRecorrido,recorridoConsulta, asistencia} = require('../controllers/recorridoController');

router.route('/registrar-recorrido')
    .post((req, res) => {
        insertarRecorrido(req, res)
    }
);

router.route('/consultar-recorridos')
    .get(
        (req, res) =>{
            recorridoConsulta(req, res)
        }
);

router.route('/asistencia/:id')
    .get((req, res) => {
        asistencia(req, res)
    }
);


module.exports = router;