const prompt = require("prompt-sync")({sigint: true});

let vehiculo, minutos, factura, tarifa, hora, total

vehiculo = parseInt(prompt("Ingresa 1 si tienes auto o 2 si tienes una moto: "));

if (vehiculo === 1) {
    tarifa = 4000;
} else if (vehiculo === 2) {
    tarifa = 2000;
} else {
    console.log("Debes ingresar 1 para carro o 2 para moto");
    process.exit(0);
}

minutos = parseInt(prompt("¿Cuántos minutos estuviste parqueado?: "));

if (minutos <= 0) {
    console.log("Los minutos deben ser mayores a 0");
    process.exit(0);
}

hora = Math.ceil(minutos / 60);
total = hora * tarifa

factura = parseInt(prompt("¿Tienes factura? Ingrese 1 para sí y 2 para no: "));

if (!(factura === 1 || factura === 2)){
    console.log("Debes ingresar 1 para sí o 2 para no");
    process.exit(0);
}

if (minutos <= 15) {
    total = 0;
} else{ 
    total = hora * tarifa;
} 

if (total > 30000) {
    total = 30000;
}

if(factura === 1){
    total = total / 2;
}

console.log("Debes pagar $", total);





