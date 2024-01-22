const router = require('express').Router();
const {insertarRecorrido,recorridoConsulta, asistencia, edicionRecorrido, actualizacionRecorrido, eliminacionRecorrido} = require('../controllers/recorridoController');

router.route('/registrar-recorrido')
    .post((req, res) => {
        insertarRecorrido(req, res);
    }
);

router.route('/consultar-recorridos')
    .get(
        (req, res) =>{
            recorridoConsulta(req, res);
        }
);

router.route('/asistencia/:id')
    .get((req, res) => {
        asistencia(req, res);
    }
);

router.route('/editar-recorrido/:id_recorrido')
    .get((req, res) => {
        edicionRecorrido(req, res);
    }
);

router.route('/actualizar-recorrido')
    .put((req, res) => {
        actualizacionRecorrido(req, res);
    }
);

router.route('/eliminar-recorrido/:id_recorrido')
    .delete((req, res) => {
        eliminacionRecorrido(req, res);
    }
);


module.exports = router;