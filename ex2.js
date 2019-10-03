// 1 - Usando um loop, crie uma matriz 5 x 5 cujos elementos são:
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

//const matriz = [];
//let cont = 1;

//for (let i=0; i < 5; i++){
//     const linha = [];
//     console.log(linha);
//     for (let j=0; j < 5; j++) { 
//         linha[j] = cont;       // j é o índice do array da linha
//         console.log(cont);     // cont é o número de 1 a 25
//         cont++;
//     }
//     matriz[i] = linha;
// }
// console.log(matriz);

// 2 - Agora inverta o loop e gere números de 25 a 1
// [ [ 25, 24, 23, 22, 21 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 15, 14, 13, 12, 11 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 5, 4, 3, 2, 1 ] ]

// 3 - Retorne o valor mais alto das somas entre o total de valors por linha, de uma array 4x4.
//const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
// exemplo:
// 4 4 4 4
// 5 6 6 7
// // 9 9 9 9
// // Resultado esperado -> 36
// const arr4x4 = [[23, 56, 9, 0], 
//                 [8, 24, 50, 5], 
//                 [9, 10, 40, 7], 
//                 [9, 48, 15, 2]];
// let somaLinhas = [];
// for (let i=0; i<arr4x4.length ; i++) {     // i= indice do array principal
//     let soma = 0;

//     for (let j=0; j<arr4x4.length; j++) {      // j= indice dos arrays internos
//         soma = soma + arr4x4[i][j]; 
//     }  

// somaLinhas[i] = soma;
// }
// console.log(somaLinhas);
// console.log("O maior valor de soma das linhas é " + Math.max(...somaLinhas));


// 4 - Recebemos dados do front-end, que foram salvos na const abaixo.
// para salvar no banco de dados, primeiro, precisamos criar uma função que verifica
// se os valores são todos do type number.
// Caso não sejam number, a função modifica os dados para que possam ser salvos corretamente.
// const dados = [["1", 2, 4, 5], [2, 3, "56"], [23, 23, "23"]]

// 5 - Agora recebemos, alguns valores em string. Porém a nossa tabela no banco só aceita
// valores lowercase. Crie uma função que checa em uma array bidimensional se todas as strings
// estão obedecendo as regras da tabela. E caso nao estejam, modifique a string para que possam ser
// salvas no banco.
// const dados = [
//   ["Antonia Maria", "ar@gol.com", "Engenheira"],
//   ["Joana Maranhão", "ar@gol.com", "Engenheira de software"],
//   ["Juliana Paes", "argh@gol.com", "Advogada"],
//   ["mariana DA SILVA", "mariana@gmail.com", "MEDICA"],
//   ["MARINA BATISTA", "marina@gol.com", "professora"],
//   ["Antonia Maria", "ari@gol.com", "cientista"]
// ]
// let posicao;

// for (i=0; i<dados.length; i++) {
//     for (j=0; j<dados[i].length; j++) {

//         posicao = dados[i].toLocaleString().toLowerCase().split(',');
//         //toLocaleString() - transforma array em string
//         //toLowerCase() - reduz as letras para minusculas
//         //split - volta a string para array
//     }
//     console.log(posicao);
// }

// 6 - Printe no console os números que são múltiplos de 3.
//  - os que são multiplos de 3 e 5.
// const superDupperVetor = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25],
//   [26, 27, 28, 29, 30],
//   [31, 32, 33, 34, 35],
//   [36, 37, 38, 39, 40],
//   [41, 42, 43, 44, 45],
//   [46, 47, 48, 49, 50],
//   [51, 52, 53, 54, 55],
//   [56, 57, 58, 59, 60],
//   [61, 62, 63, 64, 65],
//   [66, 67, 68, 69, 70],
//   [71, 72, 73, 74, 75]
// ]

// 7- ache as palavras da array palavras na array cacaPalavras e diga em qual linha e em qual coluna
// elas estao.
// Ex: a palavra elefante está na linha 4 e começa na coluna 3.
const cacaPalavras = [
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "l", "e", "f", "a", "n", "t", "e"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["c", "a", "s", "a", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
  ["a", "w", "e", "r", "e", "d", "e", "u", "i", "r"],
  ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"]
]
const palavras = ["elefante", "casa", "rede"]

for (let i=0; i<cacaPalavras.length; i++) {
    cacaPalavras[i] = cacaPalavras[i].join("");
    
    for (let j=0; j<palavras.length; j++) {
        if (cacaPalavras[i].indexOf(palavras[j]) > -1) {
          console.log(`A palavra ${palavras[j]} está na linha ${i+1} e 
          começa na coluna ${cacaPalavras[i].indexOf(palavras[j]) +1}`)
        }
    }
}


// 8-Dada uma url, vamos quebra-la e printar na tela o protocolo, domínio, path e parametros.

// www.google.com/mail/user=fulano
// Entrada: www.google.com/mail/user=fulano

// Saída:
// protocolo: http
// domínio: google.com
// path: mail
// parâmetros:user=fulano
