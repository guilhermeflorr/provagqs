const express = require('express');
const router = express.Router();
const melhorRotaController = require('../controllers/melhorRotaController');

router.get('/:id', melhorRotaController.getMelhorRota);

module.exports = router;
