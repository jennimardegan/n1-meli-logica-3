// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela

let cont = 0;
const array = [];

for (let i=1; cont < 10; i++) {
    if(i%2 !== 0) {
        array.push(i);
        cont++;
    }
}
console.log(array);