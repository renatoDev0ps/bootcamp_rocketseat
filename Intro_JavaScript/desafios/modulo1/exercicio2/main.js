var pares = [];

function exibePares(x, y) {
  while (x <= y) {
    if ((x % 2) == 0) {
      pares.push(x);
    }
    x++;
  }
}

exibePares(32, 321);
console.log(pares);