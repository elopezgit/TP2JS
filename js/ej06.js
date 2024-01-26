// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….


// Definir la cantidad de niveles de la pirámide
var niveles = 30;

// Bucle para cada nivel
for (var i = 1; i <= niveles; i++) {
    // Crear una cadena con el número repetido i veces
    var linea = '';
    for (var j = 1; j <= i; j++) {
        linea += i;
    }

    // Mostrar la línea en el documento HTML usando document.write
    document.write(linea + "<br>");
}
