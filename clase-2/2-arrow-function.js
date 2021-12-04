const sample1 = (message) => {
  console.log(message);
}

const sample2 = message => console.log(message);

const sample3 = message => {
  let text = 'múltiples instrucciones';
  console.log(`${message} con ${text}`);
}

sample1('función de flecha');
sample2('función de flecha con retorno implícito');
sample3('función de flecha')
