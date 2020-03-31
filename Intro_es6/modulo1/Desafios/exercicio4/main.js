// exercício 4.1
const empresa = {
  nome: 'Techtonica',
  endereco: {
    cidade: 'Natal',
    estado: 'RN',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

// exercício 4.2
const showInfo = ({ nome, idade }) => `${nome} tem ${idade} anos.`;

console.log(showInfo({ nome: 'Renato', idade: 46 }));

