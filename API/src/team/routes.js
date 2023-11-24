const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/:id', controller.getTeamMembers);

module.exports = router;