alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 5;
console.log(numeroSecreto);

let chute = prompt('Digite um número entre 1 e 10: ');

if(chute == numeroSecreto){
        alert(`Você acertou, número secreto ${numeroSecreto}`);
} else {
    alert('Você errou!!');
}



