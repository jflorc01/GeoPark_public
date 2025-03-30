const express = require('express');
const router = express.Router();
const tdoController = require('../controllers/tdo.controller');

router.get('/', tdoController.getTDO);

module.exports = router;