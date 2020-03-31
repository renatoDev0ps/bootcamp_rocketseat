"use strict";

// Template Literals
var nome = 'Renato';
var idade = 46;
console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos.")); // Object Short Sintax

var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Techtonica'
};
console.log(usuario);
