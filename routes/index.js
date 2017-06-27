var express = require('express');
var router = express.Router();

router.get('/arc', function (req, res, next) {
  res.render('test', {title: 'test'});
})

router.get('/index', function (req, res, next) {
  res.render('index', {title: 'Index'})
})

router.get('/charts', function (req, res, next) {
  res.render('chart-1', {title: 'Chart'})
})

module.exports = router;
