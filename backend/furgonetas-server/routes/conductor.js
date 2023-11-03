const router = require('express').Router();
const { insertarConductor, listarConductor} = require('../controllers/ConductorController');

router.route('/registrar-conductor')
    .post((req, res) => {
        insertarConductor(req, res)
    }
);

router.route('/consultar-pasajeros')
      .get(
        (req, res) => {
            listarConductor(req, res);
        }
      );


module.exports = router;