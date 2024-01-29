// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 



// Pedir al usuario que ingrese un texto
let texto = prompt("Ingrese un texto:");

// Convertir el texto a minúsculas para simplificar la comparación
let textoMinusculas = texto.toLowerCase();

// Encontrar la posición de la primera vocal
let posicionPrimeraVocal = -1;

for (let i = 0; i < textoMinusculas.length; i++) {
    let caracter = textoMinusculas[i];
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        posicionPrimeraVocal = i + 1; // Sumar 1 para obtener la posición correcta (ya que los índices comienzan desde 0)
        break; 
    }
}

// Mostrar el resultado
if (posicionPrimeraVocal !== -1) {
    document.write("La vocal '" + texto[posicionPrimeraVocal - 1] + "' está en la posición " + posicionPrimeraVocal + ".");
} else {
    document.write("No se encontraron vocales en el texto.");
}
