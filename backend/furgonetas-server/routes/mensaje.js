const router = require('express').Router();
const { enviarMensaje, recibirMensaje } = require('../controllers/mensajeController');

router.route('/enviarMensaje')
      .post(
            (req, res) => {
                enviarMensaje(req, res);
            }
        );

router.route('/recibirMensaje')
      .post(
            (req, res) => {
                recibirMensaje(req, res);
            }
          );

module.exports = router;
