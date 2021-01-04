// requireds
const fs = require('fs');
// const fs = require('express'); No son nativos de Node
// const fs = require('./fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base * i}`);
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            // console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        // console.log(`${base} * ${i} = ${base * i}`);
        data += `${base} * ${i} = ${base * i}\n`;
    }

    console.log(data);
}

module.exports = {
    crearArchivo,
    listarTabla
}