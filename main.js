// Declaración de variables
let a = 5;
let b = 10;

// Suma de valores
let c = a + b;

console.log("La suma de a y b es:", c);


let nombre = prompt("¿Cual es tu nombre?:");

console.log("¡Hola, " + nombre+"!");

// Declaración de variables
let a1 = 10;  
let b1 = 88; 


let c1; // Variable para almacenar el mayor valor

// Determinar cuál es el mayor entre a y b
if (a1 > b1) {
  c1 = a1;
  console.log("El valor mayor es a:", c1);
} else if (b1 > a1) {
  c1 = b1;
  console.log("El valor mayor es b:", c1);
} else {
  console.log("a y b son iguales:", a1);
}


// Pedir al usuario que ingrese un número
let numeroIngresado = prompt("Por favor, introduce un número:");

// Convertir el valor ingresado a número
numeroIngresado = Number(numeroIngresado);

// Verificar si el número es válido
if (isNaN(numeroIngresado)) {
  console.log("Por favor, introduce un número válido.");
} else {
  // Determinar si el número es par o impar
  if (numeroIngresado % 2 === 0) {
    console.log("El número " + numeroIngresado + " es par.");
  } else {
    console.log("El número " + numeroIngresado + " es impar.");
  }
}

// Inicializar la variable con el valor 10
let numero = 10;

// Bucle while que ejecuta hasta que numero sea 0
while (numero >= 0) {
  console.log("Valor de la variable:", numero);
  numero--; // Restar 1 a la variable en cada iteración
}

let numero1; // Declarar la variable sin inicializar

do {
  // Pedir al usuario que ingrese un número
  numero1 = prompt("Por favor, introduce un número mayor a 100:");
  
  // Convertir el valor ingresado a un número
  numero1 = Number(numero1);

} while (isNaN(numero1) || numero1 <= 100); // Repetir mientras el número sea menor o igual a 100 o no sea un número válido

// Mostrar el número ingresado en la consola
console.log("El número ingresado es:", numero1);

function esPar(numero) {
  // Retorna true si el número es par, false si es impar
  return numero % 2 === 0;
}
console.log(esPar(6));  // true
console.log(esPar(9));  // false
console.log(esPar(10)); // true

function convertirCelsiusAFahrenheit(celsius) {
  // Convertir Celsius a Fahrenheit usando la fórmula F = C × 1.8 + 32
  let fahrenheit = celsius * 1.8 + 32;
  
  // Mostrar el resultado en la consola
  console.log(celsius + "°C son " + fahrenheit + "°F");
}
convertirCelsiusAFahrenheit(0);   // 0°C son 32°F
convertirCelsiusAFahrenheit(25);  // 25°C son 77°F
convertirCelsiusAFahrenheit(100); // 100°C son 212°F
convertirCelsiusAFahrenheit(-10); // -10°C son 14°F

// Definir el objeto persona
let persona = {
  nombre: "Juan",    // Propiedad nombre
  edad: 30,          // Propiedad edad
  ciudad: "Madrid",  // Propiedad ciudad

  // Método para cambiar la ciudad de la persona
  cambiarCiudad: function(nuevaCiudad) {
    this.ciudad = nuevaCiudad; // Actualizar la propiedad ciudad
  }
};

// Mostrar las propiedades originales
console.log("Propiedades originales:", persona);

// Usar el método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log("Propiedades actualizadas:", persona);

// Definir el objeto libro
let libro = {
  titulo: "El Gran Gatsby", // Propiedad título
  autor: "F. Scott Fitzgerald", // Propiedad autor
  año: 1925, // Propiedad año

  // Método para determinar si el libro tiene más de 10 años
  esAntiguo: function() {
    let añoActual = new Date().getFullYear(); // Obtener el año actual
    let edad = añoActual - this.año; // Calcular la edad del libro

    if (edad > 10) {
      console.log("El libro \"" + this.titulo + "\" es antiguo.");
    } else {
      console.log("El libro \"" + this.titulo + "\" es reciente.");
    }
  }
};

// Usar el método para determinar si el libro es antiguo o reciente
libro.esAntiguo();

// Declarar el array con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un array vacío para almacenar los resultados
let numerosMultiplicados = [];

// Bucle para multiplicar cada número por 2 y almacenar el resultado en el nuevo array
for (let i = 0; i < numeros.length; i++) {
  let resultado = numeros[i] * 2;
  numerosMultiplicados.push(resultado); // Agregar el resultado al nuevo array
}

// Mostrar el array original en la consola
console.log("Array original:", numeros);

// Mostrar el nuevo array en la consola
console.log("Array con números multiplicados por 2:", numerosMultiplicados);

// Crear un array vacío para almacenar los números pares
let pares = [];

// Bucle para agregar los primeros 10 números pares al array
for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i); // Agregar el número par al array
  }
}

// Mostrar el array pares en la consola
console.log("Array con los primeros 10 números pares:", pares);


