// operadores REST e SPREAD
// REST
const usuario = {
  nome: 'Renato',
  idade: 46,
  empresa: 'Techtonica'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1,3,4));

// SPREAD
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3);

const usuario1 = {
  nome: 'Renato',
  idade: 46,
  empresa: 'Techtonica'
};

const usuario2 = { ...usuario1, nome: 'Glenda', idade: 36, empresa: 'Marista' };

console.log(usuario2);