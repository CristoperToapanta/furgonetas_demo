const router = require('express').Router();
const { insertarPasajero, consultarPasajeros, pasajerosNombres } = require('../controllers/pasajerosController');

router.route('/registrar-pasajero')
    .post((req, res) => {
            insertarPasajero(req, res);
        }
    );

router.route('/consultar-pasajeros')
    .get((req, res) => {
            consultarPasajeros(req, res);
        }
    );

router.route('/nombres-pasajeros')
    .get((req, res) => {
            pasajerosNombres(req, res);
        }
    );

module.exports = router;
