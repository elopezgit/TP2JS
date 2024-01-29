// 11- Realiza un script que pida por teclado 3 edades y 3 nombres
// e indique el nombre del mayor.

let nombres = [];
let edades = [];

// Pedir por teclado 3 edades y nombres
for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese el nombre " + (i + 1) + ":");
    let edad = prompt("Ingrese la edad de " + nombre + ":");

    nombres.push(nombre);
    edades.push(parseInt(edad));
}

// Encontrar la edad mayor
let edadMayor = Math.max(...edades);

// Encontrar el índice del nombre asociado a la edad mayor
let indiceMayor = edades.indexOf(edadMayor);

// Mostrar el nombre del mayor
document.write("El mayor es: " + nombres[indiceMayor] + " con " + edadMayor + " años.");
