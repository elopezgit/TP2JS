// 16- Realiza un script que pida una cadena de texto y la devuelva al revés.

// Pedir al usuario que ingrese una cadena de texto
let texto = prompt("Ingrese una cadena de texto:");

// Invertir la cadena de texto
let textoAlReves = "";
for (let i = texto.length - 1; i >= 0; i--) {
    textoAlReves += texto[i];
}

// Mostrar el resultado
document.write("Texto al revés: " + textoAlReves);
