const prompt = require("prompt-sync")({sigint : true});

const pinCorrecto = 2704;
let intentos = 0;
let pin;

do{
pin = parseInt(prompt("Ingresa tu pin: "));
intentos++;

if(pin === pinCorrecto){
console.log("Acertaste");
}else if(intentos === 3){
console.log("Se te acabaron los intentos, tarjeta bloqueada");
}

}while(!(pin == pinCorrecto || intentos === 3));