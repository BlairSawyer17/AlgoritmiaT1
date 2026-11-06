REQUISITOS:
    -Node.js
    -npm
   Dependencias:
        -prompt-sync

# CASOS DE PRUEBAS DE BORDE

## registro.js

| Edad | Acepta términos | Resultado esperado |
|---:|:---:|---|
| 18 | S | Registrado |
| 14 | S | Registrado |
| 13 | S | Lo siento, debes tener 14 o más |
| 18 | N | Lo siento, debes aceptar los términos para continuar |
| 14 | N | Lo siento, debes aceptar los términos para continuar |
| 18 | s | Registrado |

## validarEdad.js

| Edad | Resultado esperado | Resultado obtenido |
|---:|---|---|
| 18 | Eres mayor de edad, puedes pasar. | Eres mayor de edad, puedes pasar. |
| 17 | Eres menor de edad, no puedes pasar. | Eres menor de edad, no puedes pasar. |
| 1 | Eres menor de edad, no puedes pasar. | Eres menor de edad, no puedes pasar. |
| 0 | Ingrese una edad válida. | Ingrese una edad válida. |
| 120 | Eres mayor de edad, puedes pasar. | Eres mayor de edad, puedes pasar. |
| 121 | Ingrese una edad válida. | Ingrese una edad válida. |

## parqueadero.js

| Vehículo | Minutos | Factura | Resultado esperado | Resultado obtenido |
|---|---:|:---:|---:|---:|
| Carro | 15 | No | $0 | $0 |
| Carro | 16 | No | $4.000 | $4.000 |
| Carro | 60 | No | $4.000 | $4.000 |
| Carro | 61 | No | $8.000 | $8.000 |
| Moto | 61 | Sí | $2.000 | $2.000 |
| Carro | 600 | No | $30.000 | $30.000 |
| Carro | 600 | Sí | $15.000 | $15.000 |
| 3 | - | - | Vehículo inválido | Vehículo inválido |
| Carro | -5 | - | Minutos inválidos | Minutos inválidos |

## semaforo.js

| Unidades existentes | Resultado esperado | Resultado obtenido |
|---:|---|---|
| -1 | Error | Error |
| 0 | Rojo: Agotado | Rojo: Agotado |
| 1 | Amarillo: Pedir | Amarillo: Pedir |
| 10 | Amarillo: Pedir | Amarillo: Pedir |
| 11 | Verde: Todo bien | Verde: Todo bien |
| 100 | Verde: Todo bien | Verde: Todo bien |

## bisiesto.js

| Año | Resultado esperado | Resultado obtenido |
|---:|---|---|
| 2024 | Es bisiesto | Es bisiesto |
| 2025 | No es bisiesto | No es bisiesto |
| 2000 | Es bisiesto | Es bisiesto |
| 1900 | No es bisiesto | No es bisiesto |
| 2028 | Es bisiesto | Es bisiesto |
| 2100 | No es bisiesto | No es bisiesto |