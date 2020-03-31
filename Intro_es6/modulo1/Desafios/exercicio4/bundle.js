"use strict";

// exercício 4.1
var empresa = {
  nome: 'Techtonica',
  endereco: {
    cidade: 'Natal',
    estado: 'RN'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // exercício 4.2

var showInfo = function showInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(showInfo({
  nome: 'Renato',
  idade: 46
}));
