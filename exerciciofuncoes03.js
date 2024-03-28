import entradaDados from 'readline-sync';

function numeros(num1, num2) {
    return (num1 + num2);
}

let num1 = entradaDados.questionFloat('Digite o primeiro número: ')
let num2 = entradaDados.questionFloat('Digite o segundo número: ')

numeros(num1,num2)
console.log(`${num1} + ${num2} = ${numeros(num1,num2)}`)