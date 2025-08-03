alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
//math random gera números aleatórios entre 0 e 1.
// gera um número entre 0 a 9 ("+1" no cógigo gera entre 1 a 10)
// * 10 gera número inteiro e quebrados, (*10) <- menor que isso gera número decimal
//parseInt transforma o número em int, removendo casas decimais após a vírgula.

// * 100 vai de 0 a 99, com +1 gera de 1 a 100
console.log(numeroSecreto)
let chute;
let tentativas = 1;







// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que: ${chute}`)
        } else {
            alert(`O número secreto é maior que: ${chute}`)
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

// Usa um operador ternário para verificar: se o número de tentativas for maior que 1, a variável recebe 'tentativas' (plural); senão, recebe 'tentativa' (singular).
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);