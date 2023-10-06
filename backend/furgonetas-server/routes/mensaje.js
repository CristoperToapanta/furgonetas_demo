const router = require('express').Router();
const { enviarMensaje,mensajeporId, insertarMensaje, recibirMensaje, actualizarMensaje, eliminarMensaje } = require('../controllers/mensajeController');


// Enpoint para enviarMensaje
router.route('/enviarMensaje')
      .post(
            (req, res) => {
                enviarMensaje(req, res);
            }
        );

router.route('/mensajeporId/:id', )
    .get(
        (req, res) => {   
            mensajeporId(req, res);
        }
);

// Endpoint para recibirMensaje
router.route('/recibirMensaje')
      .post(
            (req, res) => {
                recibirMensaje(req, res);
            }
          );

router.route('/insertar')
        .post(
            (req, res) => {
                insertarMensaje(req, res);
            }
        );

router.route('/actualizar/:id')
        .put(
            (req, res) => {
                actualizarMensaje(req, res);
            }
        );

router.route('/eliminar/:id')
        .delete(
            (req, res) => {
                eliminarMensaje(req, res);
            }
        );

module.exports = router;
