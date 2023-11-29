const express = require('express');
const { login, register } = require('./controller');

const router = express.Router();

router.post('/login', login);
router.post('/register', register);

module.exports = router;



//const { authenticate } = require('./middleware');


// Apply the authenticate middleware to routes that require authentication
//router.get('/secure-route', authenticate, (req, res) => {
    // This route is protected and requires a valid JWT
  //  res.json({ message: 'Secure route accessed', userId: req.userId });
 // });