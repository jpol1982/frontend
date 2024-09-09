const router = require('express').Router();

const cuentoControlador = require('../controllers/cuentoController');
router.get('/cuentoseleccion', cuentoControlador.seleccion);

module.exports = router;