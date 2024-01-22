const router = require('express').Router();
const { insertarConductor, listarConductor, conductoresNombres, editarConductor, actualizarConductor, eliminacionConducor} = require('../controllers/ConductorController');

router.route('/registrar-conductor')
    .post((req, res) => {
        insertarConductor(req, res)
    }
);

router.route('/consultar-conductores')
    .get((req, res) => {
        listarConductor(req, res);
    }
);

router.route('/nombres-conductores')
    .get((req, res) => {
        conductoresNombres(req, res)
    }
);

router.route('/editar-conductor/:id_conductor')
    .get((req, res) => {
        editarConductor(req, res)
    }
);

router.route('/actualizar-conductor')
    .put((req, res) => {
        actualizarConductor(req, res);
    }
);

router.route('/eliminar-conductor/:id_conductor')
    .delete((req, res) => {
        eliminacionConducor(req, res)
    }
);


module.exports = router;