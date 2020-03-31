// Desestruturação
const usuario = {
  nome: 'Renato',
  idade: 46,
  endereco: {
    cidade: 'Parnamirim',
    estado: 'RN',
  },
};

const { nome, idade, endereco: { cidade, estado } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

function showName({ nome, idade, endereco: { cidade, estado } }) {
  console.log(nome, idade, cidade, estado);
}

showName(usuario);