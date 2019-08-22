const express = require('express');
const router = express.Router();
const User = require('../models/in_memo/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  const u = new User(req.body.name, req.body.age)
  res.locals.user = u
  res.render('user')
});

module.exports = router;
