// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” 
// deben mostrarse todas las cadenas concatenadas con un guión -.

var cadenas = [];

do {
    // Solicitar una cadena de texto al usuario
    var input = prompt("Ingrese una cadena de texto (o presione 'cancelar' para salir):");

    // Verificar si se ingresó una cadena
    if (input !== null) {
        // Agregar la cadena al array
        cadenas.push(input);
    }
} while (input !== null);

// Mostrar todas las cadenas concatenadas con un guión "-"
if (cadenas.length > 0) {
    var resultado = cadenas.join('-');
    alert("Cadenas concatenadas: " + resultado);
} else {
    alert("No se ingresaron cadenas.");
}
