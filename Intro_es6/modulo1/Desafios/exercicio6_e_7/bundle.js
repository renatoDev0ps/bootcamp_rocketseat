"use strict";

// Template string
var user = 'Renato';
var idade = 46;
console.log("O usuario ".concat(user, " possui ").concat(idade, " anos.")); // Object Short Sintax

var usuario = {
  user: user,
  idade: idade,
  cidade: 'Parnamirm'
};
console.log(usuario);
