const router = require('express').Router();
const {listarConductor, crear} = require('../controllers/conductorController');

router.route('/consultar-pasajeros')
      .get(
        (req, res) => {
            listarConductor(req, res);
        }
      );

router.route('/crear-conductor')
        .post(
            (req, res) => {
                crear(req, res);
            }
        )

module.exports = router;