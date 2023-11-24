const { Router } = require('express');
const controller = require('./controller');

const router = Router();


router.get('/:id', controller.getTeamMembers);
router.get('/', controller.getAllMembers);

module.exports = router;