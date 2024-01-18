const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/:id', controller.getTeamMembers);
router.get('/', controller.getAllMembers);
router.put('/:id', controller.addTeamMember);

module.exports = router;
