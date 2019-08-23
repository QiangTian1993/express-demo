const express = require('express');
const router = express.Router();
const User = require('../models/mongoose/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  const reqUser = {
    name: req.body.name,
    age: req.body.age,
    city: req.body.city
  }

  const user = new User(reqUser)

  User.findOne({ name: req.body.name }, function (err, result) {
    if (err) return console.error(err);
    if (!result) {
      const name = new User(reqUser)
      name.save(function (err, result) {
        if (err) return console.error(err);
        console.log('保存成功' + result)
      })
    } else {
      User.update({ name: req.body.name }, reqUser, function (err, result) {
        if (err) console.log(err)
        console.log('更新成功' + result)
      })
    }
  })

  res.locals.user = user
  res.render('user')
});

module.exports = router;
