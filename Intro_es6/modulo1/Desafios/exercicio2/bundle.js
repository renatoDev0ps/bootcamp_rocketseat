"use strict";

// exercício 2.1
var usuarios = [{
  nome: 'Renato',
  idade: 46,
  empresa: 'Techtonica'
}, {
  nome: 'Glenda',
  idade: 36,
  empresa: 'Marista'
}, {
  nome: 'Caroline',
  idade: 41,
  empresa: 'Home Office'
}, {
  nome: 'Luciano',
  idade: 24,
  empresa: 'Techtonica'
}, {
  nome: 'Gabriel',
  idade: 17,
  empresa: 'Techtonica'
}];
var allIdade = usuarios.map(function (item) {
  return item.idade;
});
console.log(allIdade); // exercício 2.2

var allEmpresa = usuarios.filter(function (item) {
  if (item.empresa === 'Techtonica' && item.idade >= 18) {
    return item;
  }
});
console.log(allEmpresa); // exercício 2.3

var findUser = usuarios.find(function (user) {
  return user.empresa === 'Marista' ? user : undefined;
});
console.log(findUser); // exercício 2.3

var joinOperator = usuarios.map(function (item) {
  return item.idade * 2;
}).filter(function (item) {
  return item >= 50;
});
console.log(joinOperator);
