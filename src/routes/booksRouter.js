const express = require('express');
const controllers = require('../controllers/booksController');
const router = express.Router();

router.get('/', controllers.getAll);
router.get('/search', controllers.searchBooks);
router.post('/add', controllers.postAdd);
router.post('/book/:id/delete', controllers.deleteBook);
router.post('/book/:id/edit', controllers.postEdit);
router.get('/book/:id', controllers.getBook);

module.exports = router;