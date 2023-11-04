const router = require('express').Router();
const { insertarFurgoneta, furgonetaConsulta, furgonetaPlacas } = require('../controllers/furgonetaController');

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

router.route('/placas-furgonetas')
    .get((req, res) => {
        furgonetaPlacas(req, res)      
    }
);


module.exports = router;

