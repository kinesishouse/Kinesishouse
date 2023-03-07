const express = require('express');

const router = express.Router();

router.get('/kinesiologo-respiratorio', function (req, res) {
    res.render('./respiratorio', {
      pageTitle: 'kinesiologo respiratorio a domicilio Santiago ',
      images: 'images',
      metaDescripcion: ' ▷ servicio de kinesiologia respiratoria a domicilio en santiago de chile, neumonia, bronquitis, epoc, aspiracion de secreciones',
      tiTuloh1: 'kinesiologo respiratorio a domicilio',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio'
    });
  }); 
  router.get('/kinesiologo-respiratorio/kinesiologo-respiratorio-infantil', function (req, res) {
    res.render('./respiratorio/kinesiologo-respiratorio-infantil', {
      pageTitle: 'kinesiologo respiratorio infantil a domicilio  ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria niños a domicilio en santiago de chile, asma, bronquitis, neumonia, fibrosis quistica, sindrome bronquial obstructivo',
      tiTuloh1: 'kinesiologo respiratorio infantil a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/kinesiologo-respiratorio-infantil'
    });
  }); 

  module.exports = router;