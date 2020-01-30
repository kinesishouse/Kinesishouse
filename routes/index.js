'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
      pageTitle: 'Kinesiologo a domicilio ',
      images: 'images',
      metaDescripcion: 'servicio de kinesiologia a domicilio para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
      tiTuloh1: 'kinesiologo a domicilio Santiago',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/'
  })
});

router.get('/profesional-kinesiologo', function (req, res) {
  res.render('profesional-kinesiologo', {
    pageTitle: 'kinesiologo a domicilio | Santiago region Metropolitana',
    images: 'images',
    metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
    tituloH1: 'Curriculum de licenciado en Kinesiologia',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/profesional-kinesiologo'
  })
});
router.get('/about', function (req, res) {
    res.render('about', {
      pageTitle: 'acerca de mi como profesional ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'nosotros',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/about'
    });
  }); 

  router.get('/contacto', function (req, res) {
    res.render('contacto', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'formulario de contacto ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/contacto'
    });
  }); 
  router.get('/politica-de-privacidad', function (req, res) {
    res.render('privacidad', {
      pageTitle: 'politica de privacidad ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'politica de privacidad ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/politica-de-privacidad'
    });
  }); 
  router.get('/politica-de-cokies', function (req, res) {
    res.render('cokies', {
      pageTitle: 'politica de cokkies ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'politica de cookies ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/politica-de-cokies'
    });
  });
  router.get('/aviso-legal', function (req, res) {
    res.render('avisolegal', {
      pageTitle: 'aviso legal ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'aviso legal ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/aviso-legal'
    });
  });  
  router.get('/kiensiologo-respiratorio', function (req, res) {
    res.render('./respiratorio', {
      pageTitle: 'kinesiologo respiratorio a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'kinesiologo respiratorio a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-respiratorio'
    });
  }); 
  router.get('/kiensiologo-respiratorio/kinesiologo-respiratorio-infantil', function (req, res) {
    res.render('./respiratorio-niños', {
      pageTitle: 'kinesiologo respiratorio a domicilio niños ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'kinesiologo respiratorio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-respiratorio/kinesiologo-respiratorio-infantil'
    });
  }); 
   router.get('/kiensiologo-traumatologia', function (req, res) {
    res.render('./traumatologia', {
      pageTitle: 'kinesiologo en traumatologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' curriculum de kinesiologo profesional que atiende en santiago de chile atencion especial en todas las comunas de la region metropolitana',
      tiTuloh1: 'kinesiologo en traumatologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-traumatologia'
    });
  }); 
module.exports = router;
