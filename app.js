const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    default:
        console.log('Comando no reconodido');
        break;
}

// console.log(argv);

// let base = '3';

// console.log(module);
// console.log(multiplicar);
// console.log(process.argv);

// let argv2 = process.argv;

// console.log('Limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));