alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');


if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if(chute < numeroSecreto) {
        alert(`Você errou, o numero secreto é maior que ${chute}`)
    } else {
        alert(`Você errou, o número secreto é menor que ${chute}`)
    }
}