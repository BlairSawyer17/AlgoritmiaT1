const prompt = require("prompt-sync")({sigint: true});

let anio = parseInt(prompt("Ingrese el año: "));

if((anio % 4 === 0 && !(anio % 100 === 0)) || anio % 400 === 0){
    console.log(anio, " Es bisiesto");
}else{
    console.log(anio, " No es bisiesto");
}