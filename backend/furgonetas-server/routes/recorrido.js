const router = require('express').Router();
const {recorridoConsulta} = require('../controllers/recorridoController');

router.route('/consultar-recorridos')
    .get(
        (req, res) =>{
            recorridoConsulta(req, res)
        }
    )


module.exports = router;