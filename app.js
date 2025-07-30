alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//while = enquanto
while (chute != numeroSecreto){

    chute = prompt('Escolha um número de 1 a 10');

    if (chute == numeroSecreto) 
        {
            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
        }
    else 
    {

        if(chute > numeroSecreto) 
        {
            alert(`Você errou, o numero secreto é menor que ${chute}`);
        } 
        else 
        {
            alert(`Você errou, o número secreto é maior que ${chute}`);
        }
        tentativas++;

    }
}

//exercícios:
/*
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.*/