var eventos = require('events');

//Atribuição da classe EventEmitter a uma variável

var EmissorEventos = eventos.EventEmitter;

//Criação de uma instância do EventEmitter variável:

var ee = new EmissorEventos();

ee.on('dados', function(fecha){
    console.log(fecha);
});

//Emissão de evento a cada 500 milisegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);