// ejemplo 1
Promise.resolve(20)
.then(x => x + 1)
.then(x => x * 2)
.then(x => {
  if (x === 22) {
    throw 'error';
  } else {
    return 80
  }
})
.then(x => 30)
.then(x => x / 2)
.then(console.log)
.catch(console.log);
// Salida 15

// ejemplo 2
Promise.resolve(10)
.then(x => x + 1)
.then(x => x * 2)
.then(x => {
  if (x === 22) {
    throw 'error';
  } else {
    return 80
  }
})
.then(x => 30)
.then(x => x / 2)
.then(console.log)
.catch(console.log);
// salida 'error'

// ejemplo 3
Promise.reject(30)
.then(x => x + 1)
.then(x => x * 2)
.then(x => {
  if (x === 22) {
    throw 'error';
  } else {
    return 80
  }
})
.then(x => 30)
.then(x => x / 2)
.then(console.log)
.catch(console.log);
// salida 30
