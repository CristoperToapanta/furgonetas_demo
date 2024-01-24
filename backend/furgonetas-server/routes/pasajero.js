const router = require('express').Router();
const { insertarPasajero, consultarPasajeros, pasajerosNombres, edicionPasajero, actualizacionPasajero, eliminacionPasajero } = require('../controllers/pasajerosController');

router.route('/registrar-pasajero')
    .post((req, res) => {
            insertarPasajero(req, res);
        }
    );

router.route('/consultar-pasajeros')
    .post((req, res) => {
            consultarPasajeros(req, res);
        }
    );

router.route('/nombres-pasajeros')
    .post((req, res) => {
            pasajerosNombres(req, res);
        }
    );

/*router.route('/editar-pasajero/:id_pasajero')
    .get((req, res) => {
            edicionPasajero(req, res);
        }
    );*/

router.route('/actualizar-pasajero')
    .post((req, res) => {
            actualizacionPasajero(req, res);
        }
    );

router.route('/eliminar-pasajero')
    .post((req, res) => {
            eliminacionPasajero(req, res);
        }
    );

module.exports = router;
