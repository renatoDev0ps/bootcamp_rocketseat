// exercício 3.1
const arr = [1,2,3,4,5];

const newArr = arr.map(item => item + 10);
console.log(newArr);

// exercício 3.2
const usuario = { nome: 'Renato', idade: 46 };

const mostarIdade = (usuario) => {
  return usuario.idade;
};
console.log(mostarIdade(usuario));

// exercício 3.3
const nome = 'Renato';
const idade = 46;
const mostrarUser = (nome = 'Vazio', idade = 0) => {
  return { nome, idade };
}

console.log(mostrarUser(nome, idade));
console.log(mostrarUser(idade));

// exercício 3.4
const promise = () => new Promise((resolve, reject) => resolve());

console.log(promise());