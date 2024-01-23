// 2- Escribir un programa que solicite una nota (número) de 0  a 10. 
// Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente


// Solicitar una nota al usuario
let nota = prompt("Ingrese una nota (de 0 a 10):");

// Convertir la entrada a un número
nota = parseFloat(nota);

// Verificar si la entrada es un número válido entre 0 y 10
if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    // Determinar la calificación según los rangos de nota usando switch
    switch (true) {
        case (nota >= 0 && nota <= 2):
            alert("Muy deficiente");
            break;
        case (nota >= 3 && nota <= 4):
            alert("Insuficiente");
            break;
        case (nota >= 5 && nota <= 6):
            alert("Suficiente");
            break;
        case (nota === 7):
            alert("Bien");
            break;
        case (nota >= 8 && nota <= 9):
            alert("Notable");
            break;
        case (nota === 10):
            alert("Sobresaliente");
            break;
        default:
            // No debería llegar aquí, pero por si acaso
            alert("Algo salió mal.");
            break;
    }
} else {
    // Mostrar un mensaje de error si la entrada no es válida
    alert("Por favor, ingrese una nota válida entre 0 y 10.");
}
