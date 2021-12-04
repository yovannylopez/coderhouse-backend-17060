const mostrarLetras = (word, finished) => {
  let i = 0;

  const timer = setInterval(() => {
    if (i < word.length) {
      console.log(word[i]);
      i++;
    } else {
      clearInterval(timer);
      finished();
    }
  }, 1000);
}

const fin = () => console.log('terminé');

setTimeout(() => { mostrarLetras('¡Hola!', fin); }, 0);
setTimeout(() => { mostrarLetras('¡Hola!', fin); }, 250);
setTimeout(() => { mostrarLetras('¡Hola!', fin); }, 500);
