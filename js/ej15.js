// 15- Realiza un script que cuente el número de vocales que tiene un texto.

// Pedir al usuario que ingrese un texto
let texto = prompt("Ingrese un texto:");

// Convertir el texto a minúsculas para simplificar la comparación
let textoMinusculas = texto.toLowerCase();

// Inicializar el contador de vocales
let contadorVocales = 0;

// Verificar cada carácter y contar las vocales
for (let i = 0; i < texto.length; i++) {
    let caracter = textoMinusculas[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contadorVocales++;
    }
}

// Mostrar el resultado
document.write("El texto tiene " + contadorVocales + " vocal(es).");
