const router = require('express').Router();
const { insertarPasajero, consultarPasajeros } = require('../controllers/pasajerosController');

router.route('/registrar-pasajero')
    .post(
        (req, res) => {
            insertarPasajero(req, res);
        }
    );

router.route('/consultar-pasajeros')
    .post(
        (req, res) => {
            consultarPasajeros(req, res);
        }
    );

module.exports = router;
