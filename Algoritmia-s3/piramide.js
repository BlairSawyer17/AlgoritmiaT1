const prompt = require("prompt-sync")({sigint: true});

let altura = parseInt((prompt("Ingresa la altura de la pirámide: ")));
let fila;
 
for(let i = 1; i <= altura; i++){
        fila = " ".repeat(altura-i) + "*".repeat((i*2)-1);

        console.log(fila);
}
