'use strict';
const express = require('express');
const router = express.Router();




/* GET home page. */

router.get('/', function (req, res) {
  res.render('index', {
      pageTitle: '▷ Kinesiologo a domicilio en Santiago | el mejor servicio en este 2023 ⭐⭐⭐⭐⭐',
      images: 'images',
      metaDescripcion: 'Servicio de Kinesiologo a domicilio en santiago para las comunas de : Las Condes, Providencia, La Florida, Macul, Peñalolen y Ñuñoa.',
      tiTuloh1: 'Servico de Kinesiologo a domicilio Santiago',
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
  router.get('/404', function (req, res) {
    res.render('404', {
      title: 'Error 404 - Página no existe',
      message: 'Lo sentimos, la página que está buscando no se pudo encontrar en el servidor.',
      images: 'images',
      metaDescripcion: ' ▷ pagina no encontrada intenta alternativas',
      tiTuloh1: 'Pagina no encontrada ',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/404'
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
router.get('/penalolen', function (req, res) {
  res.render('./penalolen', {
    pageTitle: 'kinesiologo a domicilio en peñalolen ',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de peñalolen, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en Peñalolén, servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/penalolen'
  });
});
router.get('/las-condes', function (req, res) {
  res.render('./las-condes', {
    pageTitle: 'kinesiologo a domicilio en las condes',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de las condes, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en las Condes | servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/las-condes'
  });
});
router.get('/nunoa', function (req, res) {
  res.render('./nunoa', {
    pageTitle: 'kinesiologo a domicilio en Ñuñoa',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de Ñuñoa, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en Ñuñoa | servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/nunoa'
  });
});
router.get('/la-reina', function (req, res) {
  res.render('./la-reina', {
    pageTitle: 'kinesiologo a domicilio en la reina | 👑👑👑',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de la reina, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en la reina  servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/la-reina'
  });
});
router.get('/barnechea', function (req, res) {
  res.render('./barnechea', {
    pageTitle: 'kinesiologo a domicilio comuna de lo Barnecha | 👑👑👑',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de la reina, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio lo Barnechea Servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/barnechea'
  });
});
router.get('/chicureo', function (req, res) {
  res.render('./chicureo', {
    pageTitle: 'kinesiologo a domicilio Chicureo colina | 👑 atención personalizada en tu hogar',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de Chicureo, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio Chicureo colina servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/chicureo'
  });
});
router.get('/providencia', function (req, res) {
  res.render('./providencia', {
    pageTitle: 'kinesiologo a domicilio providencia | 👑👑👑',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de providencia, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en providencia servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/providencia'
  });
});
router.get('/maipu', function (req, res) {
  res.render('./maipu', {
    pageTitle: 'kinesiologo a domicilio en maipu| 👑👑👑',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de la maipu, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en la comuna de maipu servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/maipu'
  });
});
router.get('/vitacura', function (req, res) {
  res.render('./vitacura', {
    pageTitle: 'kinesiologo a domicilio en vitacura| 👑👑👑',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de la vitacura, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en la comuna de vitacura servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/vitacura'
  });
});


router.get('/la-reina', function (req, res) {
  res.render('./la-reina', {
    pageTitle: 'kinesiologo a domicilio en la reina | 👑👑👑',
    images: 'images',
    metaDescripcion: 'kinesiologo a domicilio para la comuna de la reina, recibe tu tratamiento en la comodidad de tu hogar por un profesional altamente capacitado',
    tiTuloh1: 'Kinesiologo a Domicilio en la reina  servicio de rehabilitación en la comodidad de tu hogar ',
    index: 'index',
    canonical: 'http://www.kinesishouse.cl/la-reina'
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
  router.get('/vendaje-amputados', function (req, res) {
    res.render('./vendajes/amputado', {
      pageTitle: 'vendaje amputados ',
      images: 'images',
      metaDescripcion: '▷ vendajes en amputados como es el tratamiento y que tipo de vendas son las más optimas para el muñon',
      tiTuloh1: '▷ Vendaje terapeutico en amputados | muñoñes | como comprimir con vendas elasticas',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-amputados'
    });
  }); 
  router.get('/elastico-no-adhesivo', function (req, res) {
    res.render('./vendajes/elastico-no-adhesivo', {
      pageTitle: 'vendaje elastico sin adhesivo ',
      images: 'images',
      metaDescripcion: '▷ Descubre las características y aplicaciones del vendaje elástico no adhesivo en el ámbito médico. Conoce cómo este material se utiliza en distintos procedimientos y su importancia en la salud y bienestar de los pacientes.',
      tiTuloh1: '▷ Elastico no adhesivo: Propiedades y usos en el campo médico',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/elastico-no-adhesivo'
    });
  }); 
  router.get('/historia-vendajes', function (req, res) {
    res.render('./vendajes/historia-vendajes', {
      pageTitle: 'Historia del Vendaje: Orígenes y Evolución de una Técnica Terapéutica ',
      images: 'images',
      metaDescripcion: '▷ Explora la fascinante historia del vendaje, desde sus inicios ancestrales hasta su desarrollo como una técnica terapéutica fundamental en la medicina moderna. Conoce cómo el vendaje ha evolucionado a lo largo del tiempo y su importancia en el tratamiento de diversas afecciones y lesiones',
      tiTuloh1: '▷ Historia del Vendaje: Orígenes y Evolución',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/historia-vendajes'
    });
  }); 
  router.get('/linfeedema', function (req, res) {
    res.render('./vendajes/linfeedema', {
      pageTitle: 'Vendaje en Linfedema: Técnica Terapéutica para el Tratamiento y Control ',
      images: 'images',
      metaDescripcion: '▷ Descubre cómo el vendaje se convierte en una técnica terapéutica efectiva para el tratamiento y control del linfedema. Explora los beneficios del vendaje en el manejo de esta afección crónica, sus aplicaciones en el alivio de la hinchazón y cómo puede mejorar la calidad de vida de quienes sufren de linfedema.',
      tiTuloh1: '▷ Vendaje en Linfedema: Técnica Terapéutica para el Tratamiento y Control',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/linfeedema'
    });
  }); 
  router.get('/pagina-index', function (req, res) {
    res.render('./vendajes/vedaje-terapeutico', {
      pageTitle: 'Vendaje Terapéutico: Técnica Efectiva para el Tratamiento de Lesiones y Rehabilitaciónn ',
      images: 'images',
      metaDescripcion: '▷ Descubre la efectividad del vendaje terapéutico en el tratamiento de lesiones y la rehabilitación. Aprende cómo esta técnica de inmovilización temporal acelera la recuperación, alivia el dolor y mejora la movilidad. Explora las diversas aplicaciones del vendaje terapéutico en fisioterapia, deportes y cuidados médicos, brindando un soporte esencial para la recuperación óptima de los pacientes.',
      tiTuloh1: '▷ Vendaje Terapéutico: Técnica Efectiva para el Tratamiento de Lesiones y Rehabilitación',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-terapeutico'
    });
  }); 
  router.get('/sindactilia', function (req, res) {
    res.render('./vendajes/sindactilia', {
      pageTitle: 'Tratamiento Terapéutico para la Fusión de Dedos ',
      images: 'images',
      metaDescripcion: '▷ Descubre la efectividad del vendaje terapéutico en el tratamiento de lesiones y la rehabilitación. Aprende cómo esta técnica de inmovilización temporal acelera la recuperación, alivia el dolor y mejora la movilidad. Explora las diversas aplicaciones del vendaje terapéutico en fisioterapia, deportes y cuidados médicos, brindando un soporte esencial para la recuperación óptima de los pacientes.',
      tiTuloh1: '▷ Explora cómo el vendaje terapéutico juega un papel crucial en el tratamiento de la sindactilia, una condición donde los dedos están fusionados. Descubre cómo esta técnica especializada ayuda a separar y corregir la fusión de los dedos, mejorando la funcionalidad y apariencia de las manos afectadas. Conoce las aplicaciones del vendaje en el proceso de corrección y recuperación, brindando resultados satisfactorios para quienes padecen esta condición',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-sindactilia'
    });
  }); 
  router.get('/vedaje-kinesiotape', function (req, res) {
    res.render('./vendajes/vedaje-kinesiotape', {
      pageTitle: 'Vendaje Kinesiotape: Beneficios y Aplicaciones para el Tratamiento Fisioterapéutico ',
      images: 'images',
      metaDescripcion: '▷ Descubre los múltiples beneficios del vendaje kinesiotape en el campo de la fisioterapia. Explora cómo esta técnica de vendaje neuromuscular ayuda a mejorar la circulación, reducir el dolor y aumentar la movilidad en lesiones musculares y articulares. Aprende sobre las distintas aplicaciones del kinesiotape en la recuperación de atletas y pacientes, brindando un soporte terapéutico efectivo y no invasivo para mejorar el rendimiento físico y la calidad de vida.',
      tiTuloh1: '▷ Vendaje Kinesiotape: Beneficios y Aplicaciones para el Tratamiento Fisioterapéutico',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-kinesiotape'
    });
  }); 
  router.get('/vedaje-tape-codo', function (req, res) {
    res.render('./vendajes/vendaje-tape-codo', {
      pageTitle: 'Kinesiotape Codo: Beneficios y Aplicaciones para el Tratamiento Terapéutico ',
      images: 'images',
      metaDescripcion: '▷ Descubre los beneficios y aplicaciones del kinesiotape en el tratamiento terapéutico del codo. Explora cómo esta técnica de vendaje neuromuscular ayuda a aliviar el dolor, reducir la inflamación y mejorar la funcionalidad en lesiones y afecciones del codo. Aprende sobre las diversas técnicas de aplicación del kinesiotape para tratar codo de tenista, epicondilitis y otras dolencias relacionadas. Mejora tu recuperación y bienestar con esta terapia no invasiva y efectiva para el codo.',
      tiTuloh1: '▷ Kinesiotape Codo: Beneficios y Aplicaciones para el Tratamiento Terapéutico',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-tape-codo'
    });
  }); 
  router.get('/recomendacion-vendaje', function (req, res) {
    res.render('./vendajes/vendaje-terapeutico', {
      pageTitle: 'Recomendaciones de Vendajes: Técnicas y Consejos para una Correcta Aplicación ',
      images: 'images',
      metaDescripcion: '▷ Aprende las mejores técnicas y consejos para la aplicación adecuada de vendajes terapéuticos. Descubre recomendaciones profesionales sobre el uso de vendajes en distintas áreas médicas, como fisioterapia, deportes y primeros auxilios. Mejora tus habilidades en la aplicación de vendajes funcionales, neuromusculares y compresivos para optimizar el tratamiento de lesiones y proporcionar un soporte efectivo para la recuperación y prevención de lesiones futuras.',
      tiTuloh1: '▷ Recomendaciones de Vendajes: Técnicas y Consejos para una Correcta Aplicación',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/recomendacion-vendaje'
    });
  }); 
  router.get('/vendaje-tobillo', function (req, res) {
    res.render('./vendajes/vendaje-tobillo', {
      pageTitle: 'Vendaje de Tobillo: Técnicas y Consejos para una Correcta Aplicación ',
      images: 'images',
      metaDescripcion: '▷ Aprende las mejores técnicas y consejos para la aplicación adecuada del vendaje de tobillo. Descubre recomendaciones profesionales sobre el uso de vendajes funcionales y compresivos para tratar y prevenir lesiones en el tobillo. Mejora tus habilidades en la aplicación de vendajes terapéuticos para esguinces, torceduras y otras afecciones del tobillo. Explora cómo el vendaje proporciona soporte y estabilidad, permitiendo una recuperación efectiva y una pronta vuelta a la actividad física. Conoce la importancia del vendaje en el cuidado y protección del tobillo, y cómo su uso adecuado puede beneficiar a atletas, pacientes y personas activas en general',
      tiTuloh1: '▷ Vendaje de Tobillo: Técnicas y Consejos para una Correcta Aplicación',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-tobillo'
    });
  }); 
  router.get('/vendaje-jones', function (req, res) {
    res.render('./vendajes/vendaje_jones', {
      pageTitle: 'Vendaje de Jones: Técnica Terapéutica para Estabilización y Reducción del Edema Postquirúrgico',
      images: 'images',
      metaDescripcion: '▷ Descubre la técnica terapéutica del Vendaje de Jones, una técnica especializada utilizada para proporcionar estabilización y reducir el edema postquirúrgico en las articulaciones. Aprende sobre las aplicaciones del Vendaje de Jones en el tratamiento de edema después de cirugías, como esguinces y distensiones. Explora cómo esta técnica de vendaje funcional mejora la circulación linfática y promueve una recuperación más rápida y segura. Conoce las recomendaciones profesionales para la aplicación del Vendaje de Jones y cómo esta terapia puede beneficiar a pacientes que experimentan edema postquirúrgico, ayudándoles en su proceso de rehabilitación y bienestar.',
      tiTuloh1: '▷ Vendaje de Jones: Técnica Terapéutica para Estabilización y Reducción del Edema Postquirúrgico',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-jones'
    });
  }); 
  router.get('/vendaje-barton', function (req, res) {
    res.render('./vendajes/vendaje-barton', {
      pageTitle: 'Vendaje de Barton: Técnica Terapéutica para el Tratamiento de Lesiones de la Mandíbula',
      images: 'images',
      metaDescripcion: '▷ Descubre la técnica terapéutica del Vendaje de Barton, utilizada en el tratamiento efectivo de lesiones de la mandíbula. Aprende sobre las aplicaciones específicas del Vendaje de Barton para el manejo de fracturas, luxaciones y otras lesiones que afectan la mandíbula. Explora cómo esta técnica proporciona soporte y estabilidad, facilitando la recuperación y alivio del dolor. Conoce las recomendaciones y consideraciones profesionales para la aplicación del Vendaje de Barton y cómo puede beneficiar a pacientes con problemas en la mandíbula, ayudándoles en su proceso de rehabilitación y bienestar bucal.',
      tiTuloh1: '▷ Vendaje de Barton: Técnica Terapéutica para el Tratamiento de Lesiones de la Mandíbula',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-barton'
    });
  }); 
    router.get('/vendaje-boxeo', function (req, res) {
    res.render('./vendajes/vendaje-boxeo', {
      pageTitle: 'Vendaje para Boxeo: Técnica Esencial para Proteger y Estabilizar las Manos',
      images: 'images',
      metaDescripcion: '▷ Descubre la importancia del vendaje para boxeo, una técnica esencial para proteger y estabilizar las manos durante la práctica de este deporte de contacto. Aprende sobre las aplicaciones del vendaje para boxeo en la prevención de lesiones en los nudillos, muñecas y manos. Explora cómo esta técnica de vendaje proporciona soporte y protección, reduciendo el riesgo de fracturas y contusiones. Conoce las recomendaciones profesionales para la correcta aplicación del vendaje para boxeo y cómo puede mejorar el rendimiento y seguridad de los boxeadores en el ring, asegurando una práctica deportiva más segura y efectiva.',
      tiTuloh1: '▷ Vendaje para Boxeo: Técnica Esencial para Proteger y Estabilizar las Manos',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-boxeo'
    });
  }); 
  router.get('/vendaje-capelina', function (req, res) {
    res.render('./vendajes/vendaje-capelina', {
      pageTitle: 'Vendaje Capelina: Técnica de Vendaje para Cabeza - Consejos y Aplicación',
      images: 'images',
      metaDescripcion: '▷ Descubre el Vendaje Capelina, una técnica de vendaje específica para la cabeza que brinda soporte y compresión en casos de lesiones, heridas o después de cirugías. Aprende cómo aplicar el vendaje capelina de forma adecuada y segura para proporcionar apoyo en áreas delicadas de la cabeza. Explora su utilidad para controlar el sangrado, sujetar apósitos y proteger las zonas afectadas. Conoce las indicaciones médicas y recomendaciones profesionales para la aplicación del vendaje capelina, asegurando una recuperación efectiva y cuidadosa en situaciones específicas de la cabeza.',
      tiTuloh1: '▷ Vendaje Capelina: Técnica de Vendaje para Cabeza - Consejos y Aplicación',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-capelina'
    });
  }); 
  router.get('/vendaje-compresivo', function (req, res) {
    res.render('./vendajes/vendaje-compresivo', {
      pageTitle: 'Vendaje Compresivo: Beneficios y Aplicaciones en Terapia y Recuperación',
      images: 'images',
      metaDescripcion: '▷ Descubre los beneficios y aplicaciones del vendaje compresivo en la terapia y recuperación de lesiones. Aprende cómo esta técnica de vendaje proporciona compresión controlada, promoviendo la circulación sanguínea y reduciendo la inflamación. Explora su utilidad en el tratamiento de esguinces, distensiones, edemas y otras afecciones musculoesqueléticas. Conoce las diferentes técnicas y consideraciones para aplicar el vendaje compresivo de manera efectiva y segura. Mejora tu conocimiento sobre esta valiosa herramienta terapéutica utilizada por profesionales de la salud para optimizar la recuperación de los pacientes y mejorar la funcionalidad en distintos contextos clínicos y deportivos.',
      tiTuloh1: '▷ Vendaje Compresivo: Beneficios y Aplicaciones en Terapia y Recuperación',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-compresivo'
    });
  }); 
  router.get('/vendaje-curaciones', function (req, res) {
    res.render('./vendajes/vendaje-curaciones', {
      pageTitle: 'Vendaje de Curaciones: Técnica Terapéutica para Tratar Heridas - Beneficios y Cuidados',
      images: 'images',
      metaDescripcion: '▷ Descubre el vendaje de curaciones, una técnica terapéutica esencial para el tratamiento efectivo de heridas y lesiones cutáneas. Aprende sobre los beneficios del vendaje de curaciones en la protección de heridas, promoción de la cicatrización y prevención de infecciones. Explora las diferentes técnicas y materiales utilizados en la aplicación de vendajes de curaciones, considerando las necesidades específicas de cada paciente. Además, conoce cómo el uso adecuado de vendajes de curaciones puede optimizar el proceso de curación y mejorar la calidad de vida del paciente. Aprovecha las técnicas de SEO y marketing para difundir la importancia del vendaje de curaciones y su relevancia en el ámbito de la salud, garantizando una mayor visibilidad y concientización sobre el cuidado de heridas y su tratamiento adecuado',
      tiTuloh1: '▷ Vendaje de Curaciones: Técnica Terapéutica para Tratar Heridas - Beneficios y Cuidados',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-curaciones'
    });
  }); 
  router.get('/vendaje-en-8', function (req, res) {
    res.render('./vendajes/vendaje-en-8', {
      pageTitle: 'Vendaje en 8: Técnica Terapéutica para Estabilizar y Recuperar Lesiones - Guía Completa',
      images: 'images',
      metaDescripcion: '▷ Descubre el vendaje en 8, una técnica terapéutica efectiva para estabilizar y recuperar lesiones musculoesqueléticas. Aprende cómo el vendaje en 8 brinda soporte y compresión controlada, promoviendo la recuperación y protección de las articulaciones afectadas. Explora su utilidad en el tratamiento de esguinces, distensiones y lesiones deportivas. Obtén una guía completa sobre las diferentes técnicas de vendaje en 8 y cómo aplicarlas correctamente para optimizar la recuperación del paciente. Aprovecha las técnicas de marketing para resaltar los beneficios y resultados positivos del vendaje en 8, atrayendo a más personas a tu sitio web y generando conciencia sobre esta valiosa técnica en el ámbito de la rehabilitación y cuidado de lesiones',
      tiTuloh1: '▷ Vendaje en 8: Técnica Terapéutica para Estabilizar y Recuperar Lesiones - Guía Completa',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-en-8'
    });
  }); 
  router.get('/vendaje-gilchrist', function (req, res) {
    res.render('./vendajes/vendaje-gilchrist', {
      pageTitle: 'Vendaje Gilchrist: Inmovilización y Soporte Terapéutico para el Hombro',
      images: 'images',
      metaDescripcion: '▷ Descubre el vendaje Gilchrist, una técnica terapéutica efectiva utilizada para inmovilizar y proporcionar soporte al hombro. Aprende cómo el vendaje Gilchrist limita el movimiento del brazo y la articulación del hombro, lo que puede ser beneficioso en el tratamiento de lesiones o recuperación postoperatoria. Explora cómo este vendaje proporciona descanso y apoyo a los músculos y tejidos afectados en el área del hombro, promoviendo una recuperación más rápida y segura. Conoce las indicaciones y recomendaciones profesionales para aplicar el vendaje Gilchrist de manera adecuada y mejorar el bienestar del paciente en situaciones de lesiones o cuidados postoperatorios en el hombro',
      tiTuloh1: '▷ Vendaje Gilchrist: Inmovilización y Soporte Terapéutico para el Hombro',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-gilchrist'
    });
  }); 
  router.get('/vendaje-moderno', function (req, res) {
    res.render('./vendajes/vendaje-moderno', {
      pageTitle: 'Vendaje Moderno: Innovación y Facilidad en la Aplicación - Tecnologías Avanzadas',
      images: 'images',
      metaDescripcion: '▷ Descubre el vendaje moderno y su revolucionaria aplicación facilitada por las nuevas tecnologías. Aprende cómo la innovación en los vendajes permite una colocación más sencilla y precisa, optimizando la eficacia del tratamiento. Explora cómo los vendajes modernos integran medicamentos o artefactos que brindan efectos terapéuticos, como el uso de fármacos para reducir la inflamación o dispositivos para aplicar calor o frío. Conoce las ventajas del vendaje moderno en el alivio del dolor, aceleración del proceso de curación y mejora de la funcionalidad. Sumérgete en el mundo de las técnicas vanguardistas de vendaje y cómo estas soluciones avanzadas benefician a pacientes y profesionales de la salud en diversas áreas médicas y de rehabilitación',
      tiTuloh1: '▷ Vendaje Moderno: Innovación y Facilidad en la Aplicación - Tecnologías Avanzadas',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-moderno'
    });
  }); 
  router.get('/vendaje-quemaduras', function (req, res) {
    res.render('./vendajes/vendaje-quemaduras', {
      pageTitle: 'Vendaje en Quemaduras: Cuidados Esenciales para una Recuperación Segura',
      images: 'images',
      metaDescripcion: '▷ Descubre la importancia del vendaje en quemaduras y los cuidados esenciales para una recuperación segura. Aprende cómo el vendaje especializado protege las áreas afectadas, evita infecciones y promueve la cicatrización. Explora las diferentes técnicas de vendaje en quemaduras, desde vendajes de compresión hasta la aplicación de apósitos especiales. Conoce cómo el vendaje adecuado en quemaduras puede aliviar el dolor, reducir la inflamación y mejorar la calidad de vida del paciente. Obtén información sobre los productos y materiales utilizados en el vendaje en quemaduras, garantizando una atención integral y efectiva para la recuperación de la piel y tejidos dañados. Aprovecha esta guía completa sobre el vendaje en quemaduras y cómo esta técnica especializada juega un papel fundamental en el proceso de curación y rehabilitación de pacientes con quemaduras',
      tiTuloh1: '▷ Vendaje en Quemaduras: Cuidados Esenciales para una Recuperación Segura',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-quemaduras'
    });
  }); 
  router.get('/vendaje-rodilla', function (req, res) {
    res.render('./vendajes/vendaje-rodilla', {
      pageTitle: 'Vendaje Rodilla: Técnicas Especializadas según las Patologías - Cuidados y Beneficios',
      images: 'images',
      metaDescripcion: '▷ Explora la variedad de técnicas de vendaje para rodilla según las diferentes patologías y descubre los cuidados y beneficios que ofrecen. Aprende cómo el vendaje especializado en rodilla proporciona estabilidad, compresión y soporte para tratar afecciones como esguinces, tendinitis, artritis y lesiones deportivas. Explora las distintas formas de vendaje, como el vendaje en 8, vendaje compresivo y vendaje funcional, y cómo se aplican de manera efectiva para cada caso específico. Conoce cómo el vendaje rodilla alivia el dolor, reduce la inflamación y favorece la recuperación y rehabilitación de la articulación. Obtén consejos sobre los cuidados y materiales utilizados en el vendaje de rodilla, asegurando una terapia integral y personalizada para el tratamiento óptimo de las patologías relacionadas con esta importante articulación. Descubre la versatilidad y eficacia del vendaje rodilla en el ámbito médico y deportivo, garantizando el bienestar y mejorando la funcionalidad de los pacientes en distintos escenarios clínicos y deportivos.',
      tiTuloh1: '▷ Vendaje Rodilla: Técnicas Especializadas según las Patologías - Cuidados y Beneficios',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-rodilla'
    });
  }); 
  router.get('/vendaje-tape-columna', function (req, res) {
    res.render('./vendajes/vendaje-tape-columna', {
      pageTitle: 'Kinesiotaping de Columna: Técnicas Especializadas para Aliviar y Mejorar la Movilidad',
      images: 'images',
      metaDescripcion: '▷ Descubre las técnicas especializadas de kinesiotaping aplicadas en la columna vertebral para aliviar el dolor y mejorar la movilidad. Aprende cómo el kinesiotaping en la columna utiliza vendajes elásticos y flexibles para proporcionar soporte y estabilidad en la zona afectada. Explora la aplicación de kinesiotape para el tratamiento de afecciones como lumbalgia, hernias discales, contracturas y tensiones musculares. Conoce los diferentes patrones de vendaje empleados en la columna y cómo se adaptan a cada situación clínica. Descubre cómo el kinesiotaping de columna puede reducir la inflamación, mejorar la circulación y favorecer la recuperación de lesiones en esta área crucial del cuerpo. Obtén consejos sobre cómo utilizar el kinesiotape de manera efectiva y cómo complementar su uso con terapias de rehabilitación para lograr resultados óptimos en el alivio del dolor y en la recuperación de la funcionalidad de la columna vertebral',
      tiTuloh1: '▷ Kinesiotaping de Columna: Técnicas Especializadas para Aliviar y Mejorar la Movilidad',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-tape-columna'
    });
  }); 
  router.get('/vendaje-tape-drenaje', function (req, res) {
    res.render('./vendajes/vendaje-tape-drenaje', {
      pageTitle: 'Kinesiotaping Drenaje: Técnicas y Beneficios para Reducir Edemas y Retención de Líquidos',
      images: 'images',
      metaDescripcion: '▷ Explora las técnicas especializadas de kinesiotaping drenaje para reducir edemas y la retención de líquidos en el cuerpo. Aprende cómo el kinesiotape aplicado con técnicas de drenaje favorece la circulación linfática y la eliminación de fluidos acumulados en tejidos. Descubre cómo el kinesiotaping drenaje puede ser utilizado para tratar condiciones como linfedema, edemas posquirúrgicos o post lesiones. Conoce los diferentes patrones y formas de aplicar el kinesiotape para maximizar su efectividad en el drenaje de líquidos. Explora los beneficios del kinesiotaping drenaje en la reducción del dolor, inflamación y el mejoramiento de la funcionalidad del sistema linfático. Obtén consejos sobre cómo utilizar el kinesiotape para drenaje de forma adecuada y cómo integrarlo en tratamientos terapéuticos para lograr una recuperación óptima y alivio en casos de retención de líquidos y edemas.',
      tiTuloh1: '▷ Kinesiotaping Drenaje: Técnicas y Beneficios para Reducir Edemas y Retención de Líquidos',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-tape-drenaje'
    });
  }); 
  router.get('/vendaje-tape-hombro', function (req, res) {
    res.render('./vendajes/vendaje-tape-hombro', {
      pageTitle: 'Kinesiotape para Hombro: Alivio y Estabilidad en Lesiones y Disfunciones',
      images: 'images',
      metaDescripcion: '▷ Descubre cómo el kinesiotape aplicado en el hombro brinda alivio y estabilidad en casos de lesiones y disfunciones. Aprende cómo el kinesiotaping en el hombro proporciona soporte y compresión para tratar afecciones como tendinitis, bursitis, inestabilidad y dolor muscular. Explora las diferentes técnicas y patrones de aplicación del kinesiotape para abordar problemas específicos del hombro. Conoce los beneficios del kinesiotape en la reducción del dolor, inflamación y mejoramiento de la movilidad en esta importante articulación. Obtén consejos sobre cómo aplicar el kinesiotape de forma efectiva y cómo complementar su uso con terapias de rehabilitación para lograr resultados óptimos en el tratamiento de lesiones y disfunciones en el hombro. Descubre cómo el kinesiotape se ha convertido en una herramienta valiosa para profesionales de la salud y atletas en el cuidado y mejora de la funcionalidad del hombro',
      tiTuloh1: '▷ Kinesiotape para Hombro: Alivio y Estabilidad en Lesiones y Disfunciones',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-tape-hombro'
    });
  }); 
  router.get('/vendaje-tape-mano', function (req, res) {
    res.render('./vendajes/vendaje-tape-mano', {
      pageTitle: 'Kinesiotape para Mano: Alivio y Recuperación de Lesiones y Problemas Articulares',
      images: 'images',
      metaDescripcion: '▷ Descubre cómo el kinesiotape aplicado en la mano proporciona alivio y favorece la recuperación de lesiones y problemas articulares. Aprende cómo el kinesiotaping en la mano brinda soporte y estabilidad en casos de tendinitis, síndrome del túnel carpiano, esguinces o dislocaciones. Explora las distintas técnicas de kinesiotape utilizadas para tratar problemas específicos de la mano y los dedos. Conoce los beneficios del kinesiotape en la reducción del dolor, inflamación y mejora de la funcionalidad en esta área delicada del cuerpo. Obtén consejos sobre cómo aplicar el kinesiotape de manera adecuada para maximizar sus efectos terapéuticos. Descubre cómo el kinesiotape se ha convertido en una solución efectiva y popular para el cuidado y recuperación de lesiones y problemas articulares en la mano, siendo una opción valiosa para pacientes y deportistas que buscan mejorar su bienestar y rendimiento.',
      tiTuloh1: '▷ Kinesiotape para Mano: Alivio y Recuperación de Lesiones y Problemas Articulares',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-tape-mano'
    });
  }); 
  router.get('/vendaje-terapeutico-hombro', function (req, res) {
    res.render('./vendajes/vendaje-terapeutico-hombro', {
      pageTitle: 'Vendaje Terapéutico del Hombro: Diversas Formas de Aplicación para Aliviar y Estabilizar',
      images: 'images',
      metaDescripcion: '▷ Descubre las diversas formas de aplicar el vendaje terapéutico en el hombro para lograr alivio y estabilidad en lesiones y disfunciones. Aprende cómo el vendaje terapéutico brinda soporte y compresión para tratar afecciones como tendinitis, bursitis, luxaciones y dolor articular en el hombro. Explora las diferentes técnicas de vendaje, como el vendaje en 8, vendaje compresivo y vendaje funcional, y cómo se adaptan a cada situación clínica. Conoce los beneficios del vendaje terapéutico en la reducción del dolor, inflamación y mejora de la movilidad en esta articulación tan importante. Obtén consejos sobre cómo aplicar el vendaje terapéutico de manera adecuada para maximizar sus efectos terapéuticos. Descubre cómo el vendaje terapéutico del hombro se ha convertido en una opción efectiva y valiosa para profesionales de la salud y pacientes que buscan mejorar la recuperación y funcionalidad en el tratamiento de lesiones y disfunciones del hombro.',
      tiTuloh1: '▷ Vendaje Terapéutico del Hombro: Diversas Formas de Aplicación para Aliviar y Estabilizar',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-terapeutico-hombro'
    });
  }); 
   router.get('/vendaje-velpeau', function (req, res) {
    res.render('./vendajes/vendaje-velpeau', {
      pageTitle: 'Vendaje Velpeau: Estabilización y Protección en Lesiones del Hombro',
      images: 'images',
      metaDescripcion: '▷ Descubre el vendaje Velpeau y cómo proporciona estabilización y protección en lesiones del hombro. Aprende cómo el vendaje Velpeau es utilizado para inmovilizar el brazo en una posición de abducción, evitando movimientos bruscos y favoreciendo la recuperación en casos de luxaciones, fracturas o esguinces en el hombro. Explora las indicaciones y aplicaciones específicas del vendaje Velpeau en diferentes situaciones clínicas. Conoce los beneficios del vendaje Velpeau en la reducción del dolor, inflamación y aceleración del proceso de curación. Obtén consejos sobre cómo aplicar el vendaje Velpeau de manera adecuada y cómo complementar su uso con terapias de rehabilitación para lograr resultados óptimos en la recuperación y funcionalidad del hombro. Descubre cómo el vendaje Velpeau se ha convertido en una técnica valiosa para profesionales de la salud y pacientes que buscan mejorar la calidad de vida y bienestar en casos de lesiones del hombro.',
      tiTuloh1: '▷ Vendaje Velpeau: Estabilización y Protección en Lesiones del Hombro',
      index: 'index',
      canonical: 'http://www.kinesishouse.cl/vendaje-velpeau'
    });
  }); 

module.exports = router;
