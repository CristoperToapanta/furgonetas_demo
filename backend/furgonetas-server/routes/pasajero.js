const router = require('express').Router();
const { insertarPasajero, consultarPasajeros, pasajerosNombres, edicionPasajero, actualizacionPasajero, eliminacionPasajero } = require('../controllers/pasajerosController');

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

router.route('/editar-pasajero/:id_pasajero')
    .get((req, res) => {
            edicionPasajero(req, res);
        }
    );

router.route('/actualizar-pasajero')
    .put((req, res) => {
            actualizacionPasajero(req, res);
        }
    );

router.route('/eliminar-pasajero/:id_pasajero')
    .delete((req, res) => {
            eliminacionPasajero(req, res);
        }
    );

module.exports = router;
