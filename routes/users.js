var express = require('express');
var router = express.Router();
const { getUsers, getUser, addUser} = require('../controllers/userController')

/* GET users listing. */
router.route('/')
  .get(getUsers)
router.route('/:id')
  .get(getUser)
router.route('/add')
  .post(addUser)


module.exports = router;
