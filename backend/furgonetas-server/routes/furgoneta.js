const router = require('express').Router();
const { insertarFurgoneta, furgonetaConsulta } = require('../controllers/furgonetaController');

router.route('/registrar-furgoneta')
    .post((req, res) => {
        insertarFurgoneta(req, res)
    }
);

router.route('/consultar-furgonetas')
    .get(
        (req, res) => {
            furgonetaConsulta(req, res)
        }
    );


module.exports = router;

