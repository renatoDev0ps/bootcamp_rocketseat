// exercício 5.1
const arr = [1,2,3,4,5,6];
const [x, ...y] = arr;

console.log(x);
console.log(y);

const soma = (...item) => item.reduce((total, next) => total + next);
console.log(soma(1,2,3,4,5,6,7,8,9));

// exercício 5.2
const user = {
  nome: 'Renato',
  idade: 46,
  endereco: {
    cidade: 'Parnamirim',
    uf: 'RN',
    pais: 'Brasil',
  }
};

const user1 = { ...user, nome: 'Glenda' };
const user2 = { ...user, endereco: { cidade: 'Natal' } };
console.log(user);
console.log(user1);
console.log(user2);