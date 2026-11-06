function calcularPorcentaje(porcentaje, subtotal){
    let valor = subtotal * (porcentaje / 100);
    return valor;
}

const prompt = require("prompt-sync")({sigint:true});

let subtotal = parseFloat(prompt("Ingrese el valor total de los productos consumidos: "));

let propina = calcularPorcentaje(10, subtotal);
let impuesto = calcularPorcentaje(8, subtotal);

let total = subtotal + propina + impuesto;

console.log("El valor de los productos es: ", subtotal,". La propina es de: ",propina,".El impuesto es de: ", impuesto,". El total a pagar es de: ", total);