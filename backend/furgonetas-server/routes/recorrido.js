const router = require('express').Router();
const {insertarRecorrido,recorridoConsulta, asistencia, edicionRecorrido, actualizacionRecorrido, eliminacionRecorrido} = require('../controllers/recorridoController');

router.route('/registrar-recorrido')
    .post((req, res) => {
        insertarRecorrido(req, res);
    }
);

router.route('/consultar-recorridos')
    .post(
        (req, res) =>{
            recorridoConsulta(req, res);
        }
);

router.route('/asistencia/:id')
    .post((req, res) => {
        asistencia(req, res);
    }
);

/*router.route('/editar-recorrido/:id_recorrido')
    .get((req, res) => {
        edicionRecorrido(req, res);
    }
);*/

router.route('/actualizar-recorrido')
    .post((req, res) => {
        actualizacionRecorrido(req, res);
    }
);

router.route('/eliminar-recorrido')
    .post((req, res) => {
        eliminacionRecorrido(req, res);
    }
);


module.exports = router;