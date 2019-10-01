// 5 - Dada a array const array = [23, 45, 13, 71];
// Insira o número 11 no meio, chegando ao output = 23, 45, 11, 13, 71

const array = [23, 45, 13, 71];
array.splice(2,0,11);
console.log(array);