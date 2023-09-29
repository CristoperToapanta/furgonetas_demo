const router = require('express').Router();
const { enviarMensaje } = require('../controllers/mensajeController');

router.route('/mensaje')
      .post(
            (req, res) => {
                enviarMensaje(req, res);
            }
        );

module.exports = router;
