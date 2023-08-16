const express = require('express');

const router = express.Router();

router.get('/kinesiologo-respiratorio', function (req, res) {
  res.render('./respiratorio', {
    pageTitle: 'kinesiologo respiratorio a domicilio Santiago ',
    images: 'images',
    metaDescripcion: ' ▷ servicio de kinesiologia respiratoria a domicilio ⭐⭐⭐⭐⭐ en santiago de chile, neumonia, bronquitis, epoc, aspiracion de secreciones',
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
  router.get('/kinesiologo-respiratorio/epoc', function (req, res) {
    res.render('./respiratorio/epoc', {
      pageTitle: 'kinesiologo respiratorio | Epoc | tratamiento respiratorio  ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria a domicilio en EPOC tratamiento manejo de recidivas y complicaciones',
      tiTuloh1: 'kinesiologo respiratorio | EPOC y su tratamiento',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/epoc'
    });
  }); 
  router.get('/kinesiologo-respiratorio/vrs', function (req, res) {
    res.render('./respiratorio/virusvrs', {
      pageTitle: 'kinesiologo respiratorio | vrs | virus respiratorio sincicial  ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria a domicilio en VRS tratamiento manejo de recidivas y complicaciones',
      tiTuloh1: 'kinesiologo respiratorio | VRS y su tratamiento',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/vrs'
    });
  }); 
  router.get('/kinesiologo-respiratorio/fibrosis-quistica', function (req, res) {
    res.render('./respiratorio/fibrosisquistica', {
      pageTitle: 'kinesiologo respiratorio | fibrosis quistica | tratamiento y rehabilitación ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria a domicilio en fibrosis quistica y su tratamiento manejo de recidivas y complicaciones',
      tiTuloh1: 'kinesiologo respiratorio |fibrosis quistica y su tratamiento',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/fibrosis-quistica'
    });
  }); 
  router.get('/kinesiologo-respiratorio/neumonia', function (req, res) {
    res.render('./respiratorio/neumonia', {
      pageTitle: 'kinesiologo respiratorio | Neumonia | tratamiento y rehabilitación ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria a domicilio en neumonia y su tratamiento Kinesico tecnica de aspiracion de secreciones, diagnostico rehabilitación pulmonar por kinesiologia especilizada',
      tiTuloh1: 'kinesiologo respiratorio 🫁 |Neumonia y su tratamiento en kinesiología',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/neumonia'
    });
  }); 
  router.get('/kinesiologo-respiratorio/aspiracion-secreciones', function (req, res) {
    res.render('./respiratorio/aspiracion-secreciones', {
      pageTitle: 'kinesiologo respiratorio | aspiracion-secreciones | tratamiento y rehabilitación ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria a domicilio en aspiracion-secreciones y su tratamiento Kinesico tecnica de aspiracion de secreciones, diagnostico rehabilitación pulmonar por kinesiologia especilizada',
      tiTuloh1: 'kinesiologo respiratorio | aspiracion-secreciones y su tratamiento en kinesiología',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/aspiracion-secreciones'
    });
  }); 
  router.get('/kinesiologo-respiratorio/distres-respiratorio', function (req, res) {
    res.render('./respiratorio/distres-respiratorio', {
      pageTitle: 'kinesiologo respiratorio | distres respiratorio | tratamiento y rehabilitación ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria a domicilio en aspiracion-secreciones y su tratamiento Kinesico tecnica de aspiracion de secreciones, diagnostico rehabilitación pulmonar por kinesiologia especilizada',
      tiTuloh1: 'kinesiologo respiratorio | distres respiratorio y su tratamiento en kinesiología',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/distres-respiratorio'
    });
  }); 
  router.get('/kinesiologo-respiratorio/auscultacion', function (req, res) {
    res.render('./respiratorio/auscultacion', {
      pageTitle: 'kinesiologo respiratorio | todo lo que necesitas saber sobre auscultacion ',
      images: 'images',
      metaDescripcion: 'kinesiologia respiratoria diagnostico por asucultacion con fonendoscopio, caracteristicas de ruidos normales y adventicios',
      tiTuloh1: 'kinesiologo respiratorio | Diagnostico por auscultacion',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/auscultacion'
    });
  }); 
router.get('/kinesiologo-respiratorio/asma', function (req, res) {
  res.render('./respiratorio/asma', {
    pageTitle: 'kinesiologo respiratorio en asma | todo lo que necesitas saber asmaticos ',
    images: 'images',
    metaDescripcion: 'kinesiologia respiratoria en asma , caracteristicas de pacientes asmaticos y el tratamiento de kinesiologia como es la recuperación',
    tiTuloh1: 'kinesiologo respiratorio en asma 🩺 | tramamiento y terapias',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/kinesiologo-respiratorio/asma'
  });
}); 

  module.exports = router;