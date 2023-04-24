'use strict';
const express = require('express');
const router = express.Router();
const respiratorioRoutes = require('./respiratorio');




/* GET home page. */

router.get('/', function (req, res) {
  res.render('index', {
      pageTitle: 'Kinesiologo a domicilio en Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologo a domicilio ⭐⭐⭐⭐⭐ para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
      tiTuloh1: 'Kinesiologo a domicilio Santiago',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/',
      schemma: 'js/ld+json.js'
  });
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

  //utilizar rutas definidas en respiratorio.js
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
router.get('/kinesiologia-gratis', function (req, res) {
  res.render('./kinesiologia-gratis', {
    pageTitle: 'kinesiologia gratis en chile ',
    images: 'images',
    metaDescripcion: 'servicio de kinesiologia gratis en chile, todas las intituciones donde puedes rehabilitarte de manera gratuita o a bajo costo',
    tiTuloh1: 'kinesiologia gratis en chile | kinesiologo gratuito ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/kinesiologia-gratis'
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
    res.render('./traumatologia/artoscopia-cadera', {
      pageTitle: 'Kinesiologia en rehabilitacion  ARTROSCOPÍA DE CADERA (AC): ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en artroscopia de cadera, metodos terapeuticos, operacion , rehabilitacion recomedaciones ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  ARTROSCOPÍA DE CADERA (AC): ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/artroscopia-cadera'
    });
  });
  router.get('/kinesiologo-traumatologia/ossgodd-schlatter', function (req, res) {
    res.render('./traumatologia/ossgodd-later', {
      pageTitle: 'Kinesiologia en rehabilitacion  ossgodd-schlatter ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en ossgodd-schlatter, metodos terapeuticos, operacion , rehabilitacion recomedaciones,dolor anterior de rodilla ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  ossgodd-schlatter',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/ossgodd-schlatter'
    });
  });
  router.get('/kinesiologo-traumatologia/enfermedad-sever', function (req, res) {
    res.render('./traumatologia/sever', {
      pageTitle: 'Kinesiologia en rehabilitacion  enfermedad de sever ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en sever, metodos terapeuticos, operacion , rehabilitacion recomedaciones,dolor anterior de rodilla ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en enfermedad de sever',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/enfermedad-sever'
    });
  });
  router.get('/kinesiologo-traumatologia/fractura-cadera', function (req, res) {
    res.render('./traumatologia/cadera-fractura', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura de cadera ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en frctura de cadera, metodos terapeuticos, operacion , rehabilitacion recomedaciones, proceso de marcha en fractura de cadera ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de cadera',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-cadera'
    });
  });

   router.get('/kinesiologo-traumatologia/fractura-rotula', function (req, res) {
    res.render('./traumatologia/fractura-rotula', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura de rotula ',
      images: 'images',
      metaDescripcion: ' rehabilitacion en farctura de rotula, metodos terapeuticos, operacion , rehabilitacion recomedaciones, proceso de marcha en fractura de rotula ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de rotula',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-rotula'
    });
  });
  router.get('/kinesiologo-traumatologia/fractura-metacarpianos', function (req, res) {
    res.render('./traumatologia/fractura-metacarpianos', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura de metacarpianos',
      images: 'images',
      metaDescripcion: ' rehabilitacion en fractura de metacarpianos, metodos terapeuticos, operacion , rehabilitacion recomedaciones,fisioterapia en fractura de metacarpianos ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de metacarpianos',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-metacarpianos'
    });
  });
   router.get('/kinesiologo-traumatologia/luxacion-rotula', function (req, res) {
    res.render('./traumatologia/luxacion-rotula', {
      pageTitle: 'Kinesiologia en rehabilitacion  en luxacion de la rotula',
      images: 'images',
      metaDescripcion: ' rehabilitacion en luxacion de la rotula, metodos terapeuticos, operacion , rehabilitacion recomedaciones,fisioterapia en luxacion de la rotula ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en luxacion de la rotula',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/luxacion-rotula'
    });
  });
  router.get('/kinesiologo-traumatologia/fractura-tobillo', function (req, res) {
    res.render('./traumatologia/fractura-tobillo', {
      pageTitle: 'Kinesiologia en rehabilitacion  en fractura tobillo',
      images: 'images',
      metaDescripcion: ' rehabilitacion en fractura tobillo, metodos terapeuticos, operacion qururgica , rehabilitacion recomedaciones,fisioterapia en fractura de tobillo ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en fractura de tobillo',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/fractura-tobillo'
    });
  });
   router.get('/kinesiologo-traumatologia/osteocondritis-rodilla', function (req, res) {
    res.render('./traumatologia/osteocondritis-rodilla', {
      pageTitle: 'Kinesiologia en rehabilitacion  en osteocondritis de rodilla',
      images: 'images',
      metaDescripcion: ' rehabilitacion en osteocondritis de rodilla, metodos terapeuticos, operacion qururgica , rehabilitacion recomedaciones,fisioterapia en osteocondritis de rodilla ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en osteocondritis de rodilla',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/osteocondritis-rodilla'
    });
  });
   router.get('/kinesiologo-traumatologia/pinzamiento-cadera', function (req, res) {
    res.render('./traumatologia/pinzamiento-cadera', {
      pageTitle: 'Kinesiologia en rehabilitacion  en pinzamiento de cadera',
      images: 'images',
      metaDescripcion: ' rehabilitacion en pinzamiento de cadera, metodos terapeuticos, operacion qururgica , rehabilitacion recomedaciones,fisioterapia en pinzamiento de cadera ',
      tiTuloh1: 'Kinesiologia en rehabilitacion  en pinzamiento de cadera',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/pinzamiento-cadera'
    });
  });
     router.get('/kinesiologo-traumatologia/artrosis-rotuliana', function (req, res) {
    res.render('./traumatologia/artrosis-rotuliana', {
      pageTitle: 'Kinesiologia en rehabilitacion  ARTROSIS ROTULIANA  ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en artrosis rotuliana, patologia artrosis femoropatelar, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  artrosis rotuliana',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/artrosis-rotuliana'
    });
  });
      router.get('/kinesiologo-traumatologia/bursitis-trocanter-mayor', function (req, res) {
    res.render('./traumatologia/bursitis-trocanter-mayor', {
      pageTitle: 'Kinesiologia en rehabilitacion  bursitis del trocanter mayor ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en bursitis del trocanter mayor, patologia bursitis trocanteriana, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  bursitis del trocanter mayor',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/bursitis-trocanter-mayor'
    });
  });
   router.get('/kinesiologo-traumatologia/condromalacia-rotuliana', function (req, res) {
    res.render('./traumatologia/condromalacia-rotuliana', {
      pageTitle: 'Kinesiologia en rehabilitacion  condromalacia-rotuliana ',
      images: 'images',
      metaDescripcion: ' kinesiologia y en condromalacia-rotuliana, terapia en condromalacia patelar, patologia condromalacia-rotuliana, rehabilitacion y tratamiento ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion  condromalacia-rotuliana',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/condromalacia-rotuliana'
    });
  });
   router.get('/kinesiologo-traumatologia/columna', function (req, res) {
    res.render('./traumatologia/columna', {
      pageTitle: 'Kinesiologia en rehabilitacion  en columna ',
      images: 'images',
      metaDescripcion: ' kinesiologia de columna, terapia en patologia de la columna, lumbagos, ciatico, problemas a la cervical ',
      tiTuloh1: '▷ Kinesiologia en rehabilitacion columna | lumbar | cervical | toraxica',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/columna'
    });
  });
  router.get('/kinesiologo-traumatologia/dolor-lumbar', function (req, res) {
    res.render('./traumatologia/dolor-lumbar', {
      pageTitle: 'Kinesiologia en rehabilitacion  en dolor lumbar ',
      images: 'images',
      metaDescripcion: '⭐⭐⭐⭐⭐ kinesiologo en dolor lumbar 👨‍⚕️, terapia en patologia de lumbago, espalda baja, discopatia lumbar ',
      tiTuloh1: '▷ Kinesiologo en rehabilitacion en dolor lumbar | lumbar | lumbalgia | HNP o discopatia',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/dolor-lumbar'
    });
  });
  router.get('/kinesiologo-traumatologia/cinta-kinesiologica', function (req, res) {
    res.render('./traumatologia/cinta-kinesiologica', {
      pageTitle: 'Kinesiologia en rehabilitacion  con cinta kinesiologica ',
      images: 'images',
      metaDescripcion: '⭐⭐⭐⭐⭐ kinesiologo aplicacion cinta kinesiologica 👨‍⚕️, aplicaciones de cinta kinesica, para que sirven los colores y como aplicar segun cada patologia averigualo aqui ',
      tiTuloh1: '▷ Kinesiologo en rehabilitacion aplicaion de cinta kinesiologica | tape kinesico',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-traumatologia/cinta-kinesiologica'
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
  router.get('/kinesiologo-neurologia/guilliam-barre', function (req, res) {
    res.render('./neurologia/guilliam-barre', {
      pageTitle: 'kinesiologo neurologia | guilliam-barrea | tratamiento y rehabilitación ',
      images: 'images',
      metaDescripcion: 'kinesiologia en neurologia a domicilio en guilliam-barre y su tratamiento manejo de recidivas y complicaciones',
      tiTuloh1: 'kinesiologo neurologia |guilliam-barre y su tratamiento',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-neurologia/guilliam-barre'
    });
  });
  router.get('/kinesiologo-neurologia/acv', function (req, res) {
    res.render('./neurologia/acv', {
      pageTitle: 'kinesiologo neurologia | accidente cerebro vascular | hemiplejia',
      images: 'images',
      metaDescripcion: 'kinesiologia en neurologia a domicilio en ACVy su tratamiento manejo de recidivas y complicaciones',
      tiTuloh1: 'kinesiologo neurologia | ACV y su tratamiento',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-neurologia/acv'
    });
  });
  router.get('/kinesiologo-neurologia/cerebelo', function (req, res) {
    res.render('./neurologia/cerebelo', {
      pageTitle: 'kinesiologo neurologia | cerebelo | trastornos cerebelosos',
      images: 'images',
      metaDescripcion: 'kinesiologia en neurologia a domicilio en cerebelo y su tratamiento manejo de recidivas y complicaciones',
      tiTuloh1: 'kinesiologo neurologia | patologias al cerebelo',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-neurologia/cerebelo'
    });
  }); 
   router.get('/kinesiologo-adulto-mayor', function (req, res) {
    res.render('./adulto-mayor', {
      pageTitle: 'kinesiologo para adulto mayor | geriatrico | a domicilio Santiago ',
      images: 'images',
      metaDescripcion: '▷ servicio de kinesiologia a domicilio en adulto mayor 🧓 , ejercicios, kinesiologia integral, postrados, post operados, alzeimer, parkinson, sedentarismo.',
      tiTuloh1: 'kinesiologo para geriatrico | adulto mayor a domicilio ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-adulto-mayor'
    });
  }); 
   router.get('/kinesiologo-adulto-mayor/artrosis-rodilla', function (req, res) {
    res.render('./traumatologia/artrosis-rodilla', {
      pageTitle: 'kinesiologo para adulto mayor | Artrosis ',
      images: 'images',
      metaDescripcion: 'artrosis de rodilla mecanismos terapeuticos en kinesiologia, desarrollo fisiopatologico de la enfermedad',
      tiTuloh1: 'kinesiologo para geriatrico | artrosis de rodilla ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologo-adulto-mayor/artrosis-rodilla'
    });
  }); 
   router.get('/kinesiologo-deportivo', function (req, res) {
    res.render('./deportivo', {
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
      metaDescripcion: '▷ kinesiologia a domicilio terapia de rehabilitacion en las comunas del sector oriente de la capital, todo en la comodidad de tu hogar, prefiere el domicilio',
      tiTuloh1: '▷ kinesiologia a domicilio | sector oriente de Santiago | nada mas comodo que rehabilitacion en el hogar',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/kinesiologia-domicilio'
    });
  }); 
  router.get('/acupuntura', function (req, res) {
    res.render('./acupuntura', {
      pageTitle: 'Acupuntura a domicilio | servicio integral con kineisologia',
      images: 'images',
      metaDescripcion: '▷ profesional titulado de kinesiologia y acupuntura especializado en medicina china y validado por Minsal',
      tiTuloh1: 'Acupuntura a domicilio | servicio integral con kineisologia',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/acupuntura'
    });
  }); 
module.exports = router;
