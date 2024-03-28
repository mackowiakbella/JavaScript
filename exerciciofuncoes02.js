import entradaDados from 'readline-sync';

function numero(num) {
    if (num %2 == 0 ) {
        console.log(`O número ${num} é par! `)
    }
    else{
        console.log(`O número ${num} é ímpar!`)
    }
}

let num = entradaDados.questionFloat('Digite um número: ')
numero(num)