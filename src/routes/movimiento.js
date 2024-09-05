const router = require('express').Router();

const movimientoControlador = require('../controllers/movimientoController');
router.get('/movimiento', movimientoControlador.simulador);



module.exports = router;