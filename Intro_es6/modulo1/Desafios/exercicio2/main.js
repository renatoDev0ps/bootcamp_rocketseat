// exercício 2.1
const usuarios = [
  {nome: 'Renato', idade: 46, empresa: 'Techtonica'},
  {nome: 'Glenda', idade: 36, empresa: 'Marista'},
  {nome: 'Caroline', idade: 41, empresa: 'Home Office'},
  {nome: 'Luciano', idade: 24, empresa: 'Techtonica'},
  {nome: 'Gabriel', idade: 17, empresa: 'Techtonica'}
];

const allIdade = usuarios.map(item => item.idade);

console.log(allIdade);

// exercício 2.2
const allEmpresa = usuarios.filter(item => {
  if (item.empresa === 'Techtonica' && item.idade >= 18) {
    return item;
  }
});

console.log(allEmpresa);

// exercício 2.3
const findUser = usuarios.find(user => user.empresa === 'Marista' ? user : undefined);

console.log(findUser);

// exercício 2.3
const joinOperator = usuarios.map(item => item.idade * 2).filter(item => item >= 50);

console.log(joinOperator);