function calcularPorcentaje(porcentaje, subtotal) {
    let valor = subtotal * (porcentaje / 100);
    return valor;
}

const prompt = require("prompt-sync")({ sigint: true });

let menu = 0, sancocho = 0, ajiaco = 0; bandeja = 0, patacon = 0, hamburguesa = 0, subtotal = 0.0;

do {
    console.log("1.Sancocho: $20.000\n2.Ajiáco: $25.000\n3.Bandeja paisa: $26.500\n4.Patacón: $15.000\n5.Hamburguesa: $19.500");
    menu = parseInt(prompt("Ingrese el número de su plato para añadirlo o ingrese 0 para finalizar su factura: "));

    switch (menu) {
        case 1:
            sancocho++;
            subtotal += 20000;
            break;

        case 2:
            ajiaco++;
            subtotal += 25000;
            break;

        case 3:
            bandeja++;
            subtotal += 26500;
            break;

        case 4:
            patacon++;
            subtotal += 15000;
            break;

        case 5:
            hamburguesa++;
            subtotal += 19500;
            break;
    }

} while (menu !== 0);

if (subtotal === 0) {
    console.log("No ha consumido nada. El valor de la cuenta es 0");
} else {
    let propina = calcularPorcentaje(10, subtotal);
    let impuesto = calcularPorcentaje(8, subtotal);

    let total = subtotal + propina + impuesto;

    console.log("Usted consumio: ", sancocho, " sancochos, ", ajiaco, " ajíacos, ", bandeja, " bandejas paisas, ", patacon, "patacones y ", hamburguesa, " hamburguesas.");

    console.log("El valor total de los productos es: $", subtotal, ". La propina es de: $", propina, ".El impuesto es de: $", impuesto, ". El total a pagar es de: $", total);
}