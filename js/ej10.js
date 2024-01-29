// 10- Realiza un script que pida número de filas y columnas
// y escriba una tabla. Dentro de cada una de las celdas deberá
// escribirse un número consecutivo en orden descendente.

let filas = prompt("Ingrese el número de filas:");
let columnas = prompt("Ingrese el número de columnas:");

filas = parseInt(filas);
columnas = parseInt(columnas);

// Verificar si los números ingresados son válidos
if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
    document.write("Por favor, ingrese números válidos para filas y columnas.");
} else {
    // Calcular el número inicial
    let numeroInicial = filas * columnas;

    // Crear la tabla con bordes para cada número
    document.write("<table border='1'>");

    for (let i = 1; i <= filas; i++) {
        document.write("<tr>");
        for (let j = 1; j <= columnas; j++) {
            document.write("<td><div style='border: 1px solid black; padding: 5px;'>" + numeroInicial + "</div></td>");
            numeroInicial--;
        }
        document.write("</tr>");
    }

    document.write("</table>");
}
