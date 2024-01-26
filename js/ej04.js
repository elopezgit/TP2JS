// 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.


var sumaTotal = 0;

do {
    // Solicitar un número al usuario
    var input = prompt("Ingrese un número (o presione 'cancelar' para salir):");

    // Verificar si se ingresó un número
    if (input !== null) {
        // Convertir la entrada a un número
        var numero = parseFloat(input);

        // Verificar si la conversión fue exitosa
        if (!isNaN(numero)) {
            // Sumar el número al total
            sumaTotal += numero;
        } else {
            // Mostrar un mensaje de alerta si no es un número
            alert("Por favor, ingrese un número válido.");
        }
    }
} while (input !== null);

// Mostrar la suma total al salir
alert("La suma total de los números introducidos es: " + sumaTotal);
