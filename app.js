alert('Boas vindas ao jogo do numero secreto');
let numMaximo = prompt('Digite o numero limite para a geracao do numero aleatorio:')
let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
console.log(numeroSecreto)
let chute;
let contador = 1;

// Comentario = se chute for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        contador++;
        if (numeroSecreto > chute) {
            alert(`O numero secreto e maior que ${chute}. Tente novamente!`);
        } else {
            alert(`O numero secreto e menor que ${chute}. Tente novamente`);
        }
    }
}

let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto (${numeroSecreto}) com ${contador} ${palavraTentativa}!`);
/*if (contador > 1) {
    alert(`Isso ai! Voce descobriu o numero secreto (${numeroSecreto}) com ${contador} tentativas!`);
} else {
    alert(`Isso ai! Voce descobriu o numero secreto (${numeroSecreto}) com apenas uma tentativa!`);
}*/

