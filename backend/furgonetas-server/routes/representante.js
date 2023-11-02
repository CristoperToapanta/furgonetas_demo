const router = require('express').Router();
const {representantesConsulta, representanteNombres} = require('../controllers/representanteController');

router.route('/consultar-representantes')
    .get((req, res) => {
        representantesConsulta(req, res)
    }
);


router.route('/nombres-representantes')
    .get((req, res) => {
        representanteNombres(req, res)
    }
);

module.exports = router;


