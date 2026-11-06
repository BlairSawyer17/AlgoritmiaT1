const prompt = require("prompt-sync")({sigint: true});

let edad = parseInt(prompt("Ingrese su edad: "));

if(edad > 0 && edad < 18){
    console.log("Eres menor de edad, no puedes pasar");
}else if(edad >= 18 && edad <= 120){
    console.log("Eres mayor de edad, puedes pasar.");
}else{
    console.log("Ingrese una edad válida, mayor que 0 y menor que 120");
}