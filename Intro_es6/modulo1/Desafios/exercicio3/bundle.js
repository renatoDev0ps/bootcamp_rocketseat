"use strict";

// exercício 3.1
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (item) {
  return item + 10;
});
console.log(newArr); // exercício 3.2

var usuario = {
  nome: 'Renato',
  idade: 46
};

var mostarIdade = function mostarIdade(usuario) {
  return usuario.idade;
};

console.log(mostarIdade(usuario)); // exercício 3.3

var nome = 'Renato';
var idade = 46;

var mostrarUser = function mostrarUser() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Vazio';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostrarUser(nome, idade));
console.log(mostrarUser(idade)); // exercício 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise());
