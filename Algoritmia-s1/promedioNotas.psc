Algoritmo promedioNotas
	
	Definir nota1, nota2, nota3, promedio, suma Como Real
	
	Repetir
		Escribir "Ingresa la primera nota:"
		Leer nota1
	Hasta Que nota1 >= 0 y notas1 <= 5
	
	Repetir
		Escribir "Ingresa la primera nota:"
		Leer nota2

	Hasta Que nota2 >= 0 y notas2 <= 5
	
	Repetir		
		Escribir "Ingresa la primera nota:"
		Leer nota3
	Hasta Que nota3 >= 0 y notas3 <= 5
	
	suma <- nota1 + nota2 + nota3
	
	promedio <- suma / 3
	
	Si promedio >= 3 Entonces
		Imprimir "Tu promedio es de ", promedio, ". Felicidades, aprobaste"
	SiNo
		Imprimir "Tu promedio es de ", promedio, ". Lo siento, reprobaste"
	Fin Si
	
	
FinAlgoritmo
