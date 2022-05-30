var express = require('express');
var router = express.Router();
const { getArticles, addArticle, getArticle } = require('../controllers/articleController')

/* GET home page. */
router.route('/')
  .get(getArticles)
router.route('/:id')
  .get(getArticle)
router.route('/:id')
  .post(addArticle)

module.exports = router;
