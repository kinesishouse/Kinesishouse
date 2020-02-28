'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
      pageTitle: 'Kinesiologo a domicilio en Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologo a domicilio para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
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
      metaDescripcion: 'acerca de mi como profesional de la kinesiologia, les presento ademas y curriculum vitae',
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
  router.get('/kinesiologo-respiratorio', function (req, res) {
    res.render('./respiratorio', {
      pageTitle: 'kinesiologo respiratorio a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' ▷ servicio de kinesiologia respiratoria a domicilio en santiago de chile, neumonia, bronquitis, epoc, aspiracion de secreciones',
      tiTuloh1: 'kinesiologo respiratorio a domicilio,',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio'
    });
  }); 
  router.get('/kinesiologo-respiratorio/kinesiologia-respiratoria-infantil', function (req, res) {
    res.render('./kinesiologia-respiratoria-infantil', {
      pageTitle: 'kinesiologo respiratorio infantil a domicilio  ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria niños a domicilio en santiago de chile, asma, bronquitis, neumonia, fibrosis quistica, sindrome bronquial obstructivo',
      tiTuloh1: 'kinesiologo respiratorio infantil a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/kinesiologo-respiratorio-infantil'
    });
  }); 
   router.get('/kinesiologo-traumatologia', function (req, res) {
    res.render('./traumatologia', {
      pageTitle: 'kinesiologo en traumatologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: 'servicio de kinesiologia a domicilio en traumatologia, tratamiento en lumbagos, tendinopatias, postoperados, desgarros musculares',
      tiTuloh1: 'kinesiologo en traumatologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia'
    });
  });
   router.get('/kinesiologo-traumatologia/artroscopia-cadera', function (req, res) {
    res.render('./artoscopia-cadera', {
      pageTitle: 'Kinesiologia en rehabilitacion  ARTROSCOPÍA DE CADERA (AC): ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en artroscopia de cadera, metodos terapeuticos, operacion , rehabilitacion recomedaciones ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  ARTROSCOPÍA DE CADERA (AC): ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/artroscopia-cadera'
    });
  });
     router.get('/kinesiologo-traumatologia/artrosis-rotuliana', function (req, res) {
    res.render('./artrosis-rotuliana', {
      pageTitle: 'Kinesiologia en rehabilitacion  ARTROSIS ROTULIANA  ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en artrosis rotuliana, patologia artrosis femoropatelar, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  artrosis rotuliana',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/artrosis-rotuliana'
    });
  });
   router.get('/kinesiologo-neurologia', function (req, res) {
    res.render('./neurologia', {
      pageTitle: 'kinesiologo neurologia a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en neurologia, acidentes cerebros vasculares, guilliam barre,daño medular.',
      tiTuloh1: 'kinesiologo neurologia a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-neurologia'
    });
  }); 
   router.get('/kinesiologo-adulto-mayor', function (req, res) {
    res.render('./adultomayor', {
      pageTitle: 'kinesiologo para adulto mayor | geriatrico | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en adulto mayor, ejercicios, kinesiologia integral, postrados, post operados, alzeimer, parkinson, sedentarismo.',
      tiTuloh1: 'kinesiologo para geriatrico | adulto mayor a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-adulto-mayor'
    });
  }); 
   router.get('/kinesiologo-adulto-mayor/artrosis-rodilla', function (req, res) {
    res.render('./artrosis-rodilla', {
      pageTitle: 'kinesiologo para adulto mayor | Artrosis ',
      images: 'images',
      metaDescripcion: 'artrosis de rodilla mecanismos terapeuticos en kinesiologia, desarrollo fisiopatologico de la enfermedad',
      tiTuloh1: 'kinesiologo para geriatrico | artrosis de rodilla ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-adulto-mayor/artrosis-rodilla'
    });
  }); 
   router.get('/kinesiologo-deportivo', function (req, res) {
    res.render('./kinedeportiva', {
      pageTitle: 'kinesiologo deportivo | kinesiologia | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio deportiva, ejercicios, kinesiologia integral, lesiones deportivas, lesiones de running.',
      tiTuloh1: 'kinesiologia deportiva a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-deportivo'
    });
  }); 

  router.get('/kinesiologia-domicilio', function (req, res) {
    res.render('./kinesiologia', {
      pageTitle: 'kinesiologia a domicilio | preguntas frecuentes ',
      images: 'images',
      metaDescripcion: '▷ kinesiologia a domicilio | preguntas precuentes sobre fisioterapia',
      tiTuloh1: 'kinesiologia a domicilio | preguntas y respuestas',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologia-domicilio'
    });
  }); 
module.exports = router;
