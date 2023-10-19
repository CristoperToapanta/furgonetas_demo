const router = require('express').Router();
const {listarFurgonetas, crear} = require('../controllers/furgonetaController');

router.route('/listado-furgonetas')
      .get(
        (req, res) => {
            listarFurgonetas(req, res);
        }
      );

router.route('/crear-furgoneta')
        .post(
            (req, res) => {
                crear(req, res);
            }
        )

module.exports = router;