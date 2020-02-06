'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
      pageTitle: 'Kinesiologo a domicilio en Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
      tiTuloh1: 'Kinesiologo a domicilio Santiago',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/',
      schemma: 'js/ld+json.js'
  })
});

router.get('/about', function (req, res) {
    res.render('about', {
      pageTitle: 'acerca de mi como profesional ',
      images: 'images',
      metaDescripcion: '▷ acerca de mi como profesional de la kinesilogia',
      tiTuloh1: 'nosotros',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/about'
    });
  }); 

  router.get('/contacto', function (req, res) {
    res.render('contacto', {
      pageTitle: 'formulario de contacto kinesiologo a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' ▷ formulario de contacto para servicio de kineisologia a domicilio',
      tiTuloh1: 'formulario de contacto ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/contacto'
    });
  }); 
  router.get('/politica-de-privacidad', function (req, res) {
    res.render('privacidad', {
      pageTitle: 'politica de privacidad ',
      images: 'images',
      metaDescripcion: ' politicas de privacidad del sitio web',
      tiTuloh1: 'politica de privacidad ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/politica-de-privacidad'
    });
  }); 
  router.get('/politica-de-cokies', function (req, res) {
    res.render('cokies', {
      pageTitle: 'politica de cokkies ',
      images: 'images',
      metaDescripcion: ' politicas de cokies del sitio web',
      tiTuloh1: 'politica de cookies ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/politica-de-cokies'
    });
  });
  router.get('/aviso-legal', function (req, res) {
    res.render('avisolegal', {
      pageTitle: 'aviso legal ',
      images: 'images',
      metaDescripcion: ' aviso legal del sitio web',
      tiTuloh1: 'aviso legal ',
      index: 'noindex',
      canonical: 'http://www.kinesishouse.cl/aviso-legal'
    });
  });  
  router.get('/kiensiologo-respiratorio', function (req, res) {
    res.render('./respiratorio', {
      pageTitle: 'kinesiologo respiratorio a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' ▷ servicio de kinesiologia respiratoria a domicilio en santiago de chile',
      tiTuloh1: 'kinesiologo respiratorio a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-respiratorio'
    });
  }); 
  router.get('/kiensiologo-respiratorio/kinesiologo-respiratorio-infantil', function (req, res) {
    res.render('./respiratorio-niños', {
      pageTitle: 'kinesiologo respiratorio a domicilio niños ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria niños a domicilio en santiago de chile',
      tiTuloh1: 'kinesiologo respiratorio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-respiratorio/kinesiologo-respiratorio-infantil'
    });
  }); 
   router.get('/kiensiologo-traumatologia', function (req, res) {
    res.render('./traumatologia', {
      pageTitle: 'kinesiologo en traumatologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' ▷ servicio de kinesiologia a domicilio en traumatologia',
      tiTuloh1: 'kinesiologo en traumatologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-traumatologia'
    });
  });
   router.get('/kiensiologo-neurologia', function (req, res) {
    res.render('./neurologia', {
      pageTitle: 'kinesiologo neurologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en neurologia, acidentes cerebros vasculares, guilliam barre, etc.',
      tiTuloh1: 'kinesiologo neurologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-neurologia'
    });
  }); 
   router.get('/kiensiologo-adulto-mayor', function (req, res) {
    res.render('./adultomayor', {
      pageTitle: 'kinesiologo para adulto mayor | geriatrico | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en adulto mayor, ejercicios, kinesiologia integral, postrados, post operados.',
      tiTuloh1: 'kinesiologo para geriatrico | adulto mayor a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-adulto-mayor'
    });
  }); 
   router.get('/kiensiologo-deportivo', function (req, res) {
    res.render('./kinedeportiva', {
      pageTitle: 'kinesiologo para adulto mayor | geriatrico | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio deportiva, ejercicios, kinesiologia integral, postrados, post operados.',
      tiTuloh1: 'kinesiologia deportiva a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-deportivo'
    });
  }); 

  router.get('/kiensiologia-domicilio', function (req, res) {
    res.render('./kinesiologia', {
      pageTitle: 'kinesiologia a domicilio | preguntas frecuentes ',
      images: 'images',
      metaDescripcion: '▷ kinesiologia a domicilio | preguntas precuentes sobre fisioterapia',
      tiTuloh1: 'kinesiologia a domicilio | preguntas y respuestas',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kiensiologo-deportivo'
    });
  }); 
module.exports = router;
