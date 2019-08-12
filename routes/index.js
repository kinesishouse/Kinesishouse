'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    pageTitle: 'Kinesiologo a domicilio',
    images: 'images',
    metaDescripcion: 'servicio de kinesiologia a domicilio para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
    tituloH1: 'Kinesiolgo a Domicilio'
  })
});

router.get('/profesional-kinesiologo', function (req, res) {
  res.render('profesional-kinesiologo', {
    pageTitle: 'kinesiologo a domicilio | Santiago region Metropolitana',
    images: 'images',
    metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
    tituloH1: 'Curriculum de licenciado en Kinesiologia'
  })
}); 
module.exports = router;
