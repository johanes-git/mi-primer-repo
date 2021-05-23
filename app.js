

const fs = require('fs');
const { CLIENT_RENEG_LIMIT } = require('node:tls');

console.clear();
let salida = '';
salida =`===============\n`;
salida +=`  TABLA DEL 5  \n`;
salida +=`===============\n`;
const base = 5;

for( let i = 1; i <= 10; i++ ) {
    salida += `${ base } x ${ i } = ${ base * i } \n`;
 } 

 fs.writeFile('tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('Tabla del 5 creada!');
 });

 
