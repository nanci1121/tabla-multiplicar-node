const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

//listar en consola

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }


};

//module.exports.crearArchivo =
crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido base ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido limite ${limite} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`multiplicacion de ${base} x ${i} = ${base * i} \n`);
        }



        fs.writeFile(`./tablas/tabla-${base}-al-limite-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-limite-${limite}.txt`);

        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};