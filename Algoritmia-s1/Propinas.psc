Algoritmo CalculadoraPropinas
	
	Definir porcentaje, personas, propina Como Entero
	Definir cuenta, total, calPropina, calPersonas Como Real
	
	Repetir
		Escribir "¿Cuántas personas son?"
		Leer personas
	Hasta Que personas > 0
	
	Repetir
		Escribir "¿De cuánto es la cuenta?"
		Leer cuenta
	Hasta Que cuenta > 0
	
	Repetir
		Escribir "¿De cuánto es el porcentaje de propina?"
		Leer propina
	Hasta Que propina > 0
	
	calPropina = cuenta * (propina * 0.01)
	
	total = cuenta + calPropina
	
	calPersonas = total / personas
	
	Imprimir "El valor de las propinas es de: ", calPropina, ". El total de la cuenta más propinas es de: ", total, ". El valor dividido entre ", personas, " es de: ", calPersonas 
	
FinAlgoritmo
