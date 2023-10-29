const router = require('express').Router();
const { enviarMensaje, recibirMensaje } = require('../controllers/mensajeController');

// Enpoint para enviarMensaje
router.route('/enviarMensaje')
      .post(
            (req, res) => {
                enviarMensaje(req, res);
            }
        );

// Endpoint para recibirMensaje
router.route('/recibirMensaje')
      .post(
            (req, res) => {
                recibirMensaje(req, res);
            }
          );

module.exports = router;
