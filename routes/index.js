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

router.get('/profesional-kinesiologo', function (req, res, next) {
  res.render('profesional-kinesiologo', {
    pageTitle: 'kinesiologo profesional | kinesiologia a domicilio',
    images: 'images',
    metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
    tituloH1: 'curriculum de licenciado en kinesiologia'
  })
}); 
module.exports = router;
