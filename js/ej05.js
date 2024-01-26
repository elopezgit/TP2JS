// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI 
// (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
// (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// Ejemplo: 
// Input:  40773821 
// Output: ‘L’



function calcularLetraDNI() {
    do {
        // Solicitar un número de DNI al usuario
        var input = prompt("Ingrese el número de DNI (o presione 'cancelar' para salir):");

        // Salir si el usuario pulsa "cancelar"
        if (input === null) {
            break;
        }

        // Convertir la entrada a un número
        var dniNumero = parseInt(input);

        // Verificar si la conversión fue exitosa y el número está en el rango permitido
        if (!isNaN(dniNumero) && dniNumero >= 0 && dniNumero <= 99999999) {
            // Calcular la letra del DNI
            var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
            var resto = dniNumero % 23;
            var letraDNI = letras.charAt(resto);

            // Mostrar la letra del DNI
            alert("La letra del DNI " + dniNumero + " es: " + letraDNI);
        } else {
            // Mostrar un mensaje de alerta si no es un número válido
            alert("Por favor, ingrese un número de DNI válido.");
        }
    } while (true);
}

// Llamar a la función al cargar la página o cuando lo desees
calcularLetraDNI();


