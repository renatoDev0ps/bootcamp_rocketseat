"use strict";

// Desestruturação
var usuario = {
  nome: 'Renato',
  idade: 46,
  endereco: {
    cidade: 'Parnamirim',
    estado: 'RN'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

function showName(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome, idade, cidade, estado);
}

showName(usuario);
