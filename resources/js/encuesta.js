'use strict';

const url_base = 'http://localhost:3000/';
var datos_encuesta = [];

function getEncuesta()
{
  return fetch(`${url_base}encuesta`)
    .then(data => data.json())
    .catch(err => console.log('ERROR EN EL SERVIDOR', err));
}

getEncuesta().then(encuesta => console.log(encuesta));
