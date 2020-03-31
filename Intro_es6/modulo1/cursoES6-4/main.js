const arr = [1,3,4,5,8,9];

const map = arr.map(function(item, index) {
  return item * 2;
});

const reduce = arr.reduce(function(total, next) {
  return total + next;
});

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);