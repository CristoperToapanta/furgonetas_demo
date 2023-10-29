const router = require('express').Router();
const { furgonetaConsulta } = require('../controllers/furgonetaController');

router.route('/consultar-furgonetas')
    .get(
        (req, res) => {
            furgonetaConsulta(req, res)
        }
    );


module.exports = router;

