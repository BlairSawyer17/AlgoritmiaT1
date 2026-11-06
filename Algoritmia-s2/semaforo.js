const prompt = require("prompt-sync")({sigint: true});

let unidades = parseInt(prompt("Ingrese las unidades existentes: "));

if(unidades < 0){
    console.log("Error");
}else if(unidades === 0){
    console.log("Rojo: Agotado");
}else if(unidades <= 10){
    console.log("Amarillo: Pedir");
}else{
    console.log("Verde: Todo bien");
}