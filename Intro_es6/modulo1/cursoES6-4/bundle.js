"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var map = arr.map(function (item, index) {
  return item * 2;
});
var reduce = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
