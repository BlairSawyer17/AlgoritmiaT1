const prompt = require("prompt-sync")({sigint: true});

let edad = parseInt(prompt("Ingrese su edad: "));

let terms = prompt("¿Aceptas los términos? S/N: ");

let acepto = terms.toUpperCase();

if(edad >= 14 && acepto === "S"){
    console.log("Registrado");
}else if(edad < 14){
    console.log("Lo siento, debes tener 14 o más");
}else{
    console.log("Lo siento, debes aceptar los términos para continuar");
}