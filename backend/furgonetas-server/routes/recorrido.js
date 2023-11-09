const router = require('express').Router();
const {insertarRecorrido,recorridoConsulta} = require('../controllers/recorridoController');

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


module.exports = router;