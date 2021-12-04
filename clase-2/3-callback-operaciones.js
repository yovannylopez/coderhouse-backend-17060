const operacion = (a, b, callback) => callback(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;

console.log(operacion(4, 5, suma));
console.log(operacion(4, 5, resta));
console.log(operacion(4, 5, multiplicacion));
console.log(operacion(4, 5, division));
console.log(operacion(4, 5, modulo));

// Forma tradicional
// function operacion(a, b, callback) {
//   function callback(a, b);
// }
