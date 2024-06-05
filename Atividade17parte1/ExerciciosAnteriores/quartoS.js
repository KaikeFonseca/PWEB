const fs = require('fs');
const data = fs.readFileSync('file.txt');

// a execução é bloqueada aqui até o arquivo ser lido por completo

console.log(data.toString());