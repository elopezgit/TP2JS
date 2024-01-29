// 8- Crea script para generar pirámide siguiente con los números del 
// 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let numeroFilas = prompt("Ingrese el número de filas para la pirámide (no mayor de 50):");
numeroFilas = parseInt(numeroFilas);

// Verificar si el número ingresado es válido
if (isNaN(numeroFilas) || numeroFilas <= 0 || numeroFilas > 50) {
    document.write("Por favor, ingrese un número válido (entre 1 y 50).");
} else {
    // Generar la pirámide
    for (let i = 1; i <= numeroFilas; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += j;
        }
        document.write(fila + "<br>");
    }
}
