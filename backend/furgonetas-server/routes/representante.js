const router = require('express').Router();
const { insertarRepresentante, representantesConsulta, representanteNombres, edicionRepresentante, actualizacionRepresentante, eliminacionRepresentante} = require('../controllers/representanteController');

router.route('/registrar-representante')
    .post((req, res) => {
        insertarRepresentante(req, res);
    }
);

router.route('/consultar-representantes')
    .get((req, res) => {
        representantesConsulta(req, res);
    }
);


router.route('/nombres-representantes')
    .get((req, res) => {
        representanteNombres(req, res);
    }
);

router.route('/editar-representante/:id_representante')
    .get((req, res) => {
        edicionRepresentante(req, res);
    }
);

router.route('/actualizar-representante')
    .put((req, res) => {
        actualizacionRepresentante(req, res);
    }
);

router.route('/eliminar-representante/:id_representante')
    .delete((req, res) => {
        eliminacionRepresentante(req, res);
    }
);

module.exports = router;


