const router = require('express').Router();
const {representantesConsulta} = require('../controllers/representanteController');

router.route('/consultar-representantes')
    .get((req, res) => {
        representantesConsulta(req, res)
    }
);

module.exports = router;


