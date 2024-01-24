const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEmployees);

module.exports = router;
