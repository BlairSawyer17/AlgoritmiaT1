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

#### Lógica:
    1.EL usuario ingresa el vehículo(1 si es carro, 2 si es moto) y se guarda en vehículo.
    2.Si vehículo es igual a 1 entonces actualiza la tarifa de 0 a 4000 que es la tarifa/hora de los carros,
      si vehículo es igual a 2 entonces actualiza la tarifa a 2000 que es la tarifa/hora de las motos;
      si no es ninguna de las anteriores, entonces sale un mensaje de que el vehículo ingresado es inválido y finaliza el programa.
    3.El usuario ingresa los mínutos que estuvo parqueado.
    4.Si los mínutos son menores o igual a 0, entonces sale un mensaje de error y finaliza el programa.
    5.Luego se dividen los mínutos entre 60 para calcular la hora. El resultado de esa división se apróxima a su entero más cercano hacia arriba (ejemplo, si es 0.12 se aproxima a 1). El resultado se guarda en horas.
    6.El usuario ingresa si tiene factura, 1 si sí y 2 si no.
    7.Si factura no es igual 1 o factura no es igual a 2, entonces sale un mensaje de error y finaliza el programa.
    8.Si minutos es menor a 15 entonces el total es igual a 0, sino se multiplica tarifa por las horas y se guarda el resultado en total.
    9.Si el total es mayor que 30000 entonces el total se actualiza a 30000.
    10.Si factura es sí entonces se divide el total entre 2.
    11.Se imprime el total.

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

#### Lógica:
    1.Se pide las unidades.
    2.Si las unidades muestran 

| Unidades existentes | Resultado esperado | Resultado obtenido |
|---:|---|---|
| -1 | Error | Error |
| 0 | Rojo: Agotado | Rojo: Agotado |
| 1 | Amarillo: Pedir | Amarillo: Pedir |
| 10 | Amarillo: Pedir | Amarillo: Pedir |
| 11 | Verde: Todo bien | Verde: Todo bien |
| 100 | Verde: Todo bien | Verde: Todo bien |

### bisiesto.js

#### Lógica:

| Año | Resultado esperado | Resultado obtenido |
|---:|---|---|
| 2024 | Es bisiesto | Es bisiesto |
| 2025 | No es bisiesto | No es bisiesto |
| 2000 | Es bisiesto | Es bisiesto |
| 1900 | No es bisiesto | No es bisiesto |
| 2028 | Es bisiesto | Es bisiesto |
| 2100 | No es bisiesto | No es bisiesto |