const prompt = require("prompt-sync")({sigint : true});

let autos = 0, total = 0, valor = 0

do{
valor = parseInt(prompt("Ingrese la tarifa: "));
if(valor > 0){
total = total + valor;
autos++
}
}while (valor > 0)

console.log("Carros atendidos: ",autos,". Total adquirido: $", total);