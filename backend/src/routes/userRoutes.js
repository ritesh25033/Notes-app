const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);  // Apply auth middleware to all user routes

router.get('/profile', getProfile);
router.put('/profile', updateProfile);

module.exports = router;

