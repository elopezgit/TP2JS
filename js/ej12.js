// 12- Realiza un script que genere un número aleatorio entre 1 y 99

// Generar un número aleatorio entre 0 (inclusive) y 1 (exclusive)
let numeroAleatorio = Math.random();

// Escalar y redondear para obtener un número entre 1 y 99
let numeroEnRango = Math.floor(numeroAleatorio * 99) + 1;

// Mostrar el número aleatorio
document.write("Número aleatorio entre 1 y 99: " + numeroEnRango);
