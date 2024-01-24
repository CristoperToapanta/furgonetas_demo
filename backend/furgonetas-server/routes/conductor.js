const router = require('express').Router();
const { insertarConductor, listarConductor, conductoresNombres, editarConductor, actualizarConductor, eliminacionConducor} = require('../controllers/ConductorController');

router.route('/registrar-conductor')
    .post((req, res) => {
        insertarConductor(req, res)
    }
);

router.route('/consultar-conductores')
    .post((req, res) => {
        listarConductor(req, res);
    }
);

router.route('/nombres-conductores')
    .post((req, res) => {
        conductoresNombres(req, res)
    }
);

/*router.route('/editar-conductor/:id_conductor')
    .get((req, res) => {
        editarConductor(req, res)
    }
);*/

router.route('/actualizar-conductor')
    .post((req, res) => {
        actualizarConductor(req, res);
    }
);

router.route('/eliminar-conductor')
    .post((req, res) => {
        eliminacionConducor(req, res)
    }
);


module.exports = router;