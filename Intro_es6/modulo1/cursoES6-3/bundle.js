"use strict";

var user = {
  nome: 'Renato'
}; //const não pode ser reatribuida, só pode ser mutada.

user.nome = 'Glenda';
console.log(user);

function teste(x) {
  var y = 2; //let só existe no escopo do seu contexto e pode ser reatribuida.

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
