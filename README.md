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

## CASOS DE PRUEBAS S-3

### cajeroParqueadero.js

#### Lógica:
    1.Se inicializan autos, total y valor en 0.
    2.El usuario ingresa la tarifa y se guarda en valor.
    3.Si valor es mayor a 0, se suma a total y autos aumenta en 1.
    4.Se repite desde el paso 2 mientras valor sea mayor a 0.
    5.Se imprime la cantidad de carros atendidos y el total recaudado.

#### Tabla de decisión

| Condición: valor > 0 | Acción: acumular total | Acción: autos++ | Acción: volver a pedir |
|:---:|:---:|:---:|:---:|
| Sí | Sí | Sí | Sí |
| No | No | No | No (finaliza e imprime) |

#### Tabla de casos borde

| Entradas | Resultado esperado |
|---|---|
| 0 | Carros atendidos: 0. Total adquirido: $0 |
| 1, 0 | Carros atendidos: 1. Total adquirido: $1 |
| -5 | Termina de inmediato (negativo se trata como fin). Carros atendidos: 0. Total: $0 |
| 5000, -1 | Carros atendidos: 1. Total: $5000 (el negativo no se suma) |
| abc | parseInt da NaN, NaN > 0 es falso, termina. Carros atendidos: 0 |
| 2.5, 0 | parseInt lo trunca a 2. Carros atendidos: 1. Total: $2 |

#### Tabla de traza (entradas: 5000, 3000, 0)

| Iteración | valor | ¿valor > 0? | total | autos |
|---:|---:|:---:|---:|---:|
| Inicio | 0 | - | 0 | 0 |
| 1 | 5000 | Sí | 5000 | 1 |
| 2 | 3000 | Sí | 8000 | 2 |
| 3 | 0 | No | 8000 | 2 |

Salida: `Carros atendidos: 2. Total adquirido: $ 8000`

---

### validarPin.js

#### Lógica:
    1.Se define pinCorrecto = 2704 e intentos = 0.
    2.El usuario ingresa el pin y intentos aumenta en 1.
    3.Si pin es igual a pinCorrecto sale "Acertaste".
    4.Si no, y intentos es igual a 3, sale "tarjeta bloqueada".
    5.Se repite mientras NO (pin sea correcto o intentos sea 3).

#### Tabla de decisión

| pin == pinCorrecto | intentos == 3 | Resultado | ¿Continúa el ciclo? |
|:---:|:---:|---|:---:|
| Sí | No | Acertaste | No |
| Sí | Sí | Acertaste (tiene prioridad el acierto) | No |
| No | No | Sin mensaje | Sí |
| No | Sí | Se te acabaron los intentos, tarjeta bloqueada | No |

#### Tabla de casos borde

| Entradas | Resultado esperado |
|---|---|
| 2704 | Acertaste (primer intento) |
| 1111, 2704 | Acertaste (segundo intento) |
| 1111, 2222, 2704 | Acertaste (justo en el último intento, no se bloquea) |
| 1111, 2222, 3333 | Se te acabaron los intentos, tarjeta bloqueada |
| 2704.9 | parseInt lo convierte en 2704. Acertaste |
| abc | NaN no es igual al pin. Cuenta como intento fallido |
| 02704 | parseInt lo convierte en 2704. Acertaste |
| (vacío) | NaN. Cuenta como intento fallido |

#### Tabla de traza (entradas: 1111, 2222, 3333)

| Iteración | pin | intentos | ¿pin correcto? | ¿intentos == 3? | Mensaje | ¿Repite? |
|---:|---:|---:|:---:|:---:|---|:---:|
| 1 | 1111 | 1 | No | No | - | Sí |
| 2 | 2222 | 2 | No | No | - | Sí |
| 3 | 3333 | 3 | No | Sí | Tarjeta bloqueada | No |

---

### piramide.js

#### Lógica:
    1.El usuario ingresa la altura y se guarda en altura.
    2.Para cada fila i desde 1 hasta altura:
        -Espacios = altura - i
        -Asteriscos = (i * 2) - 1
    3.Se imprime la fila (espacios + asteriscos).

#### Tabla de decisión

| Condición: i <= altura | Acción |
|:---:|---|
| Sí | Construir y mostrar la fila, i++ |
| No | Finalizar |

#### Tabla de casos borde

| Altura | Resultado esperado |
|---:|---|
| 1 | Una sola línea: `*` |
| 2 | `·*` y `***` (con un espacio antes del primer asterisco) |
| 0 | No imprime nada |
| -3 | No imprime nada |
| abc | parseInt da NaN, el ciclo no se ejecuta, no imprime nada |
| 3.9 | parseInt lo trunca a 3, dibuja pirámide de altura 3 |
| 50 | Dibuja 50 filas, la última con 99 asteriscos |

#### Tabla de traza (altura = 4)

| i | Espacios (altura - i) | Asteriscos (2i - 1) | Fila impresa |
|---:|---:|---:|---|
| 1 | 3 | 1 | `···*` |
| 2 | 2 | 3 | `··***` |
| 3 | 1 | 5 | `·*****` |
| 4 | 0 | 7 | `*******` |

(Los puntos `·` representan espacios, solo para visualizarlos.)

---

### promedio.js

#### Lógica:
    1.El usuario ingresa 5 notas, se guardan en el arreglo notas.
    2.notMin se inicializa con la primera nota; notMax con 0.
    3.Se recorre el arreglo: se suma cada nota, se actualiza la mínima y la máxima.
    4.Si la nota es mayor o igual a 3, aprobados aumenta; si no, sale un mensaje de que el estudiante perdió.
    5.promedio = suma / 5.
    6.Se imprime promedio, aprobados, nota más alta y nota más baja.

#### Tabla de decisión

| nota >= 3 | Acción |
|:---:|---|
| Sí | aprobados++ |
| No | Mensaje "Lo siento, estudiante N, perdiste" |

| nota < notMin | nota > notMax | Acción |
|:---:|:---:|---|
| Sí | - | notMin = nota |
| No | Sí | notMax = nota |
| No | No | Sin cambios |

#### Tabla de casos borde

| Notas | Promedio | Aprobados | Máx | Mín | Observación |
|---|---:|---:|---:|---:|---|
| 3, 3, 3, 3, 3 | 3 | 5 | 3 | 3 | 3 exacto aprueba |
| 2.9, 2.9, 2.9, 2.9, 2.9 | 2.9 | 0 | 2.9 | 2.9 | Todos pierden (5 mensajes) |
| 0, 0, 0, 0, 0 | 0 | 0 | 0 | 0 | Todas en cero |
| 5, 5, 5, 5, 5 | 5 | 5 | 5 | 5 | Todas en el máximo |
| 5, 4, 3, 2, 1 | 3 | 3 | 5 | 1 | Orden descendente |
| 1, 2, 3, 4, 5 | 3 | 3 | 5 | 1 | Orden ascendente |
| -1, -2, -3, -4, -5 | -3 | 0 | 0 | -5 | Falla: notMax queda en 0 porque se inicializa en 0 |
| abc, 3, 3, 3, 3 | NaN | - | - | - | Falla: no hay validación de entrada |

#### Tabla de traza (notas: 4.0, 2.5, 3.0, 5.0, 1.5)

| i | nota | suma | notMin | notMax | ¿nota >= 3? | aprobados |
|---:|---:|---:|---:|---:|:---:|---:|
| Inicio | - | 0 | 4.0 | 0 | - | 0 |
| 0 | 4.0 | 4.0 | 4.0 | 4.0 | Sí | 1 |
| 1 | 2.5 | 6.5 | 2.5 | 4.0 | No (perdió est. 2) | 1 |
| 2 | 3.0 | 9.5 | 2.5 | 4.0 | Sí | 2 |
| 3 | 5.0 | 14.5 | 2.5 | 5.0 | Sí | 3 |
| 4 | 1.5 | 16.0 | 1.5 | 5.0 | No (perdió est. 5) | 3 |

Promedio = 16.0 / 5 = 3.2. Salida: promedio 3.2, 3 aprobados, máxima 5, mínima 1.5.

---

### factura.js

#### Lógica:
    1.Se muestra el menú y el usuario ingresa el número del plato (0 para finalizar).
    2.Según la opción, se aumenta el contador del plato y se suma su precio al subtotal.
    3.Se repite hasta que el usuario ingrese 0.
    4.Si el subtotal es 0, sale un mensaje de que no consumió nada.
    5.Si no, se calcula propina (10%) e impuesto (8%) sobre el subtotal.
    6.total = subtotal + propina + impuesto.
    7.Se imprime el detalle de lo consumido, los valores y el total a pagar.

#### Tabla de decisión

| Opción | Plato | Contador | Subtotal |
|:---:|---|---|---:|
| 1 | Sancocho | sancocho++ | +20.000 |
| 2 | Ajiaco | ajiaco++ | +25.000 |
| 3 | Bandeja paisa | bandeja++ | +26.500 |
| 4 | Patacón | patacon++ | +15.000 |
| 5 | Hamburguesa | hamburguesa++ | +19.500 |
| 0 | Finalizar | - | - |
| Otra (6, -1, NaN...) | Inválida | Sin cambios | Sin cambios (vuelve a mostrar el menú) |

| subtotal === 0 | Resultado |
|:---:|---|
| Sí | "No ha consumido nada. El valor de la cuenta es 0" |
| No | Calcula propina, impuesto, total y muestra el detalle |

#### Tabla de casos borde

| Entradas | Resultado esperado |
|---|---|
| 0 | No ha consumido nada. Cuenta 0 |
| 1, 0 | Subtotal 20.000, propina 2.000, impuesto 1.600, total 23.600 |
| 4, 4, 4, 0 | 3 patacones. Subtotal 45.000, propina 4.500, impuesto 3.600, total 53.100 |
| 6, 0 | Opción inválida ignorada, termina sin consumo |
| -1, 0 | Opción inválida ignorada, termina sin consumo |
| abc, 0 | NaN ignorado, termina sin consumo |
| 1.9, 0 | parseInt lo trunca a 1: cuenta como sancocho |
| 1, 2, 3, 4, 5, 0 | Subtotal 106.000, propina 10.600, impuesto 8.480, total 125.080 |
| 5 repetido 100 veces, 0 | Subtotal 1.950.000 (el programa no tiene límite) |

#### Tabla de traza (entradas: 1, 3, 3, 0)

| Iteración | menu | Contador modificado | subtotal |
|---:|---:|---|---:|
| Inicio | 0 | - | 0 |
| 1 | 1 | sancocho = 1 | 20.000 |
| 2 | 3 | bandeja = 1 | 46.500 |
| 3 | 3 | bandeja = 2 | 73.000 |
| 4 | 0 | (sale del ciclo) | 73.000 |

Cálculo final: propina = 73.000 × 10/100 = 7.300; impuesto = 73.000 × 8/100 = 5.840; total = 73.000 + 7.300 + 5.840 = **86.140**.

#### Descomposición en subprocesos

| Subproceso | Nombre | Entrada | Salida | Descripción |
|:---:|---|---|---|---|
| SP1 | Inicializar datos | - | contadores y subtotal en 0 | Declara variables de cada plato y el subtotal |
| SP2 | Mostrar menú | - | Menú en pantalla | Imprime los 5 platos con su precio |
| SP3 | Leer opción | Texto del usuario | menu (entero) | Pide y convierte la opción con parseInt |
| SP4 | Registrar plato | menu | contador y subtotal actualizados | switch: suma el precio y aumenta el contador del plato |
| SP5 | Controlar ciclo | menu | Continuar o finalizar | Repite SP2 a SP4 mientras menu !== 0 |
| SP6 | Calcular porcentaje | porcentaje, subtotal | valor | Función calcularPorcentaje: subtotal × (porcentaje / 100) |
| SP7 | Calcular cuenta | subtotal | propina, impuesto, total | Usa SP6 con 10% y 8%, luego suma todo |
| SP8 | Mostrar factura | contadores, subtotal, propina, impuesto, total | Texto en pantalla | Detalle de consumo y valores finales, o mensaje de cuenta 0 |

#### Árbol de componentes

```
factura.js
├── SP1. Inicializar datos
│   ├── Contadores: sancocho, ajiaco, bandeja, patacon, hamburguesa
│   └── Acumulador: subtotal
├── SP2-SP5. Ciclo de pedido (do...while menu !== 0)
│   ├── SP2. Mostrar menú
│   ├── SP3. Leer opción
│   │   └── parseInt(prompt(...))
│   └── SP4. Registrar plato (switch)
│       ├── Caso 1: Sancocho     (+20.000)
│       ├── Caso 2: Ajiaco       (+25.000)
│       ├── Caso 3: Bandeja      (+26.500)
│       ├── Caso 4: Patacón      (+15.000)
│       ├── Caso 5: Hamburguesa  (+19.500)
│       └── Otro: se ignora
├── Decisión: ¿subtotal === 0?
│   ├── Sí → SP8. Mostrar "No ha consumido nada"
│   └── No
│       ├── SP7. Calcular cuenta
│       │   ├── SP6. calcularPorcentaje(10, subtotal) → propina
│       │   ├── SP6. calcularPorcentaje(8, subtotal)  → impuesto
│       │   └── total = subtotal + propina + impuesto
│       └── SP8. Mostrar factura
│           ├── Detalle de platos consumidos
│           └── Subtotal, propina, impuesto y total
```
