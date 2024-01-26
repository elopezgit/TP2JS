// 7- Haz un script que escriba una pirámide 
// inversa de los números del 1 al número que indique el usuario (no mayor de 50)  
// de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


// Solicitar al usuario que ingrese un número menor o igual a 50
var limiteSuperior = prompt("Ingrese un número (no mayor de 50):");

// Convertir la entrada a un número
limiteSuperior = parseInt(limiteSuperior);

// Verificar si la conversión fue exitosa y el número está en el rango permitido
if (!isNaN(limiteSuperior) && limiteSuperior > 0 && limiteSuperior <= 50) {
    // Bucle para cada nivel de la pirámide inversa
    for (var i = limiteSuperior; i >= 1; i--) {
        // Crear una cadena con el número repetido i veces
        var linea = '';
        for (var j = 1; j <= i; j++) {
            linea += i;
        }

        // Mostrar la línea en el documento HTML usando document.write
        document.write(linea + "<br>");
    }
} else {
    // Mostrar un mensaje de alerta si la entrada no es válida
    alert("Por favor, ingrese un número válido menor o igual a 50.");
}
