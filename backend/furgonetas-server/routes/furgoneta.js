const router = require('express').Router();
const { insertarFurgoneta, furgonetaConsulta, furgonetaPlacas, edicionFurgoneta, actualizacionFurgoneta, eliminacionFurgoneta } = require('../controllers/furgonetaController');

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

router.route('/editar-furgoneta/:id_furgoneta')
    .get((req, res) => {
        edicionFurgoneta(req, res)
    }
),

router.route('/actualizar-furgoneta')
    .put((req, res) => {
        actualizacionFurgoneta(req, res)
    }
),

router.route('/eliminar-furgoneta/:id_furgoneta')
    .delete((req, res) => {
        eliminacionFurgoneta(req, res)
    }
),


module.exports = router;

