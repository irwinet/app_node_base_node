const { crearArchivo } = require('./multiplicar/multiplicar.js');

let base = '3';

// console.log(module);
// console.log(multiplicar);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));