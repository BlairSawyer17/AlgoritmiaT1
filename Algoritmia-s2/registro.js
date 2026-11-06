const prompt = require("prompt-sync")({sigint: true});

let edad = parseInt(prompt("Ingrese su edad: "));

if(!(edad >= 0) ){
    console.log("Edad inválida.")
    process.exit(0);
}

let terms = prompt("¿Aceptas los términos? S/N: ");

let acepto = terms.toUpperCase();

if(!(acepto == "S" || acepto == "N")){
    console.log("Debe ingresar S para sí y N para no");
    process.exit(0);
}

if(edad >= 14 && acepto === "S"){
    console.log("¡Registrado con éxito!");
}else{
    console.log("Lo siento, no pudimos registrarte.");
} 
    
if(edad < 14){
    console.log("Debes tener 14 o más.");
}

if(acepto != "S"){
    console.log("Debes aceptar los términos para continuar.");
}