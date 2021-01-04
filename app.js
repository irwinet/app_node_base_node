// requireds
const fs = require('fs');
// const fs = require('express'); No son nativos de Node
// const fs = require('./fs');

let base = 5;
let data = '';

for (let i = 1; i <= 10; i++) {
    // console.log(`${base} * ${i} = ${base * i}`);
    data += `${base} * ${i} = ${base * i}\n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado!`);
});