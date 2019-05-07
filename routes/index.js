'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    pageTitle: 'Kinesis House',
    images: 'images'
  })
});

router.get('/Nosotros', function (req, res) {
  res.render('QuienesSomos', {
    pageTitle: 'Kinesis House',
    images: 'images'
  })
});
module.exports = router;
