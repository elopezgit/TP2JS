// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
// si la edad ingresada no es un número válido indicarlo en un mensaje.

// Solicitar la edad al usuario
let edadString = prompt("Por favor, ingrese su edad:");

// Convertir la entrada a un número
let edad = parseInt(edadString);

// Verificar si la entrada es un número válido
if (isNaN(edad)) {
  console.log("Por favor, ingrese un número válido para la edad.");
} else {
  // Verificar si la edad es mayor de 18
  if (edad >= 18) {
    console.log("¡Ya puede conducir!");
  } else {
    console.log("Aún no puede conducir. Debe ser mayor de 18 años.");
  }

  if (isNaN(edad)) {
    document.write("Por favor, ingrese un número válido para la edad.");
  } else {
    // Verificar si la edad es mayor de 18
    if (edad >= 18) {
      document.write("¡Ya puede conducir!");
    } else {
      document.write("Aún no puede conducir. Debe ser mayor de 18 años.");
    }
  }
  
}
