const router = require('express').Router();
const { insertarConductor, listarConductor, conductoresNombres} = require('../controllers/ConductorController');

router.route('/registrar-conductor')
    .post((req, res) => {
        insertarConductor(req, res)
    }
);

router.route('/consultar-pasajeros')
    .get((req, res) => {
        listarConductor(req, res);
    }
);

router.route('/nombres-conductores')
    .get((req, res) => {
        conductoresNombres(req, res)
    }
);


module.exports = router;