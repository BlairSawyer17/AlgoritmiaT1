# REQUISITOS:
    -Node.js
    -npm
## Dependencias:
        -prompt-sync

## CASOS DE PRUEBAS S-2:

### registro.js

#### Lógica:
    -El usuario igresa su edad y se guarda en edad.
    -Si la edad NO es mayor a 0, entonces sale un mensaje de error y finaliza el programa.
    -El usuario ingresa S si no acepta los términos y N si no acepta los términos. Se guarda en terms.
    -El texto en terms se convierte en mayúsculas y se guarda en acepto.
    -Si el texto en acepto NO es igual a "S" o igual a "N", entonces sale error y finaliza el programa.
    -Si la edad es mayor o igual a 14 y acepto es igual a "S" entonces sale un mensaje de éxito. Sino sale un mensaje de fallo.
    -Si la edad es menor a 14 sale un mensaje de que el usuario debe tener 14 o más.
    -Si acepto es "N" sale un mensaje de que el usuario debe aceptar los términos.

| Edad | Acepta términos | Resultado esperado |
|---:|:---:|---|
| 18 | S | Registrado |
| 14 | S | Registrado |
| 13 | S | No registrado. Debes tener 14 o más |
| 18 | n | No registrado. Debes aceptar los términos para continuar |
| 14 | N | No registrado. Debes aceptar los términos para continuar |
| 13 | N | No registrado. Debes tener 14 o más. Debes aceptar los términos para continuar |
| 18 | s | Registrado |

### validarEdad.js

#### Lógica:

| Edad | Resultado esperado | Resultado obtenido |
|---:|---|---|
| 18 | Eres mayor de edad, puedes pasar. | Eres mayor de edad, puedes pasar. |
| 17 | Eres menor de edad, no puedes pasar. | Eres menor de edad, no puedes pasar. |
| 1 | Eres menor de edad, no puedes pasar. | Eres menor de edad, no puedes pasar. |
| 0 | Ingrese una edad válida. | Ingrese una edad válida. |
| 120 | Eres mayor de edad, puedes pasar. | Eres mayor de edad, puedes pasar. |
| 121 | Ingrese una edad válida. | Ingrese una edad válida. |

### parqueadero.js

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

### semaforo.js

| Unidades existentes | Resultado esperado | Resultado obtenido |
|---:|---|---|
| -1 | Error | Error |
| 0 | Rojo: Agotado | Rojo: Agotado |
| 1 | Amarillo: Pedir | Amarillo: Pedir |
| 10 | Amarillo: Pedir | Amarillo: Pedir |
| 11 | Verde: Todo bien | Verde: Todo bien |
| 100 | Verde: Todo bien | Verde: Todo bien |

### bisiesto.js

| Año | Resultado esperado | Resultado obtenido |
|---:|---|---|
| 2024 | Es bisiesto | Es bisiesto |
| 2025 | No es bisiesto | No es bisiesto |
| 2000 | Es bisiesto | Es bisiesto |
| 1900 | No es bisiesto | No es bisiesto |
| 2028 | Es bisiesto | Es bisiesto |
| 2100 | No es bisiesto | No es bisiesto |