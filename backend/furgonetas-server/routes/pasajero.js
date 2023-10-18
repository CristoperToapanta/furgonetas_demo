const router = require('express').Router();
const {listarPasajero, crearPasajero} = require('../controllers/pasajeroController');

router.route('/listado-pasajeros')
    .get(
        (req, res) => {
            listarPasajero(req, res);
        }
    );

router.route('/crear-pasajero')
        .post(
            (req, res) => {
                crearPasajero(req, res);
            }
        );

module.exports = router;