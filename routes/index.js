'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
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
