const prompt = require("prompt-sync")();

let notas = [], notMax = 0, notMin= 0, promedio;
let suma = 0, aprobados = 0;

for(let i = 0; i < 5; i++){
console.log("Ingrese la nota del estudiante ", i+1)
notas[i] = parseFloat(prompt("-> "));
}

notMin = notas[0];

for(let i = 0; i < 5; i++){
    suma += notas[i];

    if(notas[i] < notMin){
        notMin = notas[i];
    }else if(notas[i] > notMax){
        notMax = notas[i];
    }

    if(notas[i] >= 3){
        aprobados++
    }else{
        console.log("Lo siento, estudiante ", i+1, ", perdiste");
    }
}

promedio = suma / 5;

console.log("El promedio grupal fue de ", promedio, ". Aprobaron ", aprobados, " alumnos. La nota más alta fue ", notMax, " y la más baja fue ", notMin, ".");