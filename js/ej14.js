// 14- Realiza un script que pida una cadena de texto y lo muestre
// poniendo el signo – entre cada carácter sin usar el método replace.

// Pedir al usuario que ingrese una cadena de texto
let texto = prompt("Ingrese una cadena de texto:");

// Mostrar la cadena con el signo - entre cada carácter
let textoConGuiones = "";
for (let i = 0; i < texto.length; i++) {
    textoConGuiones += texto[i];
    if (i < texto.length - 1) {
        textoConGuiones += "-";
    }
}

// Mostrar el resultado
document.write("Texto con guiones: " + textoConGuiones);
