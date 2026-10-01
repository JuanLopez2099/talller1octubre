const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const preguntar = (texto) => new Promise((resolve) => rl.question(texto, resolve));

const operaciones = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => (b === 0 ? 'Error: división por cero' : a / b),
};

(async () => {
  console.log('Calculadora sencilla (escribe "salir" para terminar)\n');

  while (true) {
    const entradaA = await preguntar('Primer número: ');
    if (entradaA.trim().toLowerCase() === 'salir') break;

    const op = (await preguntar('Operación (+, -, *, /): ')).trim();
    const entradaB = await preguntar('Segundo número: ');

    const a = parseFloat(entradaA);
    const b = parseFloat(entradaB);

    if (isNaN(a) || isNaN(b) || !operaciones[op]) {
      console.log('Entrada inválida, intenta de nuevo.\n');
      continue;
    }

    console.log(`Resultado: ${operaciones[op](a, b)}\n`);
  }

  rl.close();
})();