const express = require('express');
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/noteController');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);  // Apply auth middleware to all note routes

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;

