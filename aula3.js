// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon
let pokemon = {};
pokemon.nome = "Bulbasaur";
pokemon.cor = "verde";
pokemon['nome-japones'] = "Fushigidane";
pokemon.animal = "anfibio";
pokemon.comida = function() {
    console.log(`O nome do pokemon é ${pokemon.nome}. Ele absorve a luz solar e fica dias sem comer`)
}
console.log(pokemon.comida());
// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."
console.log(`Oi, meu nome é ${pokemon.nome} e meu nome japones é ${pokemon['nome-japones']}.`)

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon['sabe-voar'] = false;

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".
pokemon.voar = function() {
    if (pokemon['sabe-voar']) {
        console.log(`To voaaaaaando!`);
    }
    else {
        console.log(`Desculpa, nao sei voar.`);
    }
}
console.log(pokemon.voar());

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".
pokemon.action = function() {
    const opcaoAcao = ["FIGHT", "BAG", "RUN"];
    const rand = Math.floor(Math.random() *opcaoAcao.length);
    console.log(opcaoAcao[rand]);
}
pokemon.action();

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.
pokemon.pergunta = function() {
    console.log(`O que o ${pokemon.nome} vai fazer?`);
    console.log(pokemon.action());
}

// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor

//9 Faça uma função construtora de pokemon