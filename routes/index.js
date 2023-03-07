var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController.js');
const authorController = require('../controllers/authorController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/book', bookController.viewAll);
router.get('/book/profile/:id', bookController.viewProfile);
router.get('/book/edit/:id', bookController.renderEditForm);
router.post('/book/edit/:id', bookController.updateBook);
router.get('/book/add', bookController.renderAddForm);
router.post('/book/add', bookController.addBook);
router.get('/book/delete/:id', bookController.deleteBook);



router.get('/authors', authorController.viewAll);
module.exports = router;
