//Resposta do desafio 1 - Fibonacci
function fibonacci(numero) {
    let menorValor = 0;
    let maiorValor = 1;

    while (maiorValor < numero) {
      let proximoValor = menorValor + maiorValor;
      menorValor = maiorValor;
      maiorValor = proximoValor;
    }

    return maiorValor === numero;
}

const numero = 3

if (fibonacci(numero)) {
    console.log(`o número informado pertence a sequência de Fibonacci: ${numero}`);
} else {
    console.log(`o número informado não pertence a sequência de Fibonacci: ${numero}`);
}

//Resposta do desafio 2 - Possui letra A
function letraA(palavra) {
    let possuiA = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == 'a' ||  palavra[i] == 'A') {
            possuiA++;
        }
    }

    if (possuiA > 0) {
        console.log(`Possui a letra "A", ela se repete ${possuiA} vezes`);
    } else {
        console.log("Não possui a letra A");
    }
}

const qualquerPalavra = "Amar";

letraA(qualquerPalavra);

//Resposta do desafio 3 - valor da variável soma e de 77
let inidice = 12
let soma = 0
let k = 1

while (k < inidice) {
    k = k + 1
    soma = soma + k
}

console.log(soma)
