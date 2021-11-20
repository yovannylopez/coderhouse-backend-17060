// Ejercicio 1 - Funciones
function mostrarLista(lista) {
  if (lista.length === 0) {
    console.log("lista vacía");
  } else {
    console.log(lista);
  }
}

mostrarLista([1, 2, 3, 4, 5]);
mostrarLista([]);

// Ejercicio 2 - Función anónima
(function (lista) { // de esta manera la función anónima se invoca directamente (IIFE)
  if (lista.length === 0) {
    console.log("lista vacía");
  } else {
    console.log(lista);
  }
})([6, 7, 8]); // argumentos de la función anónima

// Ejercicio 3 - closures
function crearMultiplicador(num1) {
  return function (num2) { // retorno de una función anónima
    return num1 * num2;
  };
}

const duplicar = crearMultiplicador(2); // duplicar tendrá acceso a las variables internas de crearMultiplicador
console.log(`función duplicar: ${duplicar(3)}`); // en cada invocación de duplicar, se convierte en closure
console.log(`función duplicar: ${duplicar(4)}`);

const triplicar = crearMultiplicador(3); // triplicar tendrá acceso a las variables internas de crearMultiplicador
console.log(`función triplicar: ${triplicar(3)}`); // en cada invocación de triplicar, se convierte en closure
console.log(`función triplicar: ${triplicar(4)}`);
