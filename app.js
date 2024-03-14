//let titulo = document.querySelector('h1');
//titulo.innerHTML ='Bem vindo ao jogo secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'escolha um numero de 1 a 10. Que comecem os jogos!!';
let listaDeNumerosSorteado = [];
let limiteDeNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}
exibirTexto();
exibirTextoNaTela('h1','Bem vindo ao jogo secreto' );
exibirTextoNaTela('p','escolha um numero de 1 a 10. Que comecem os jogos!!' );

function verificarChute() {
    let numero = document.querySelector('input').value;
    
    if (numero == numeroSecreto) {
        exibirTextoNaTela('h1', 'voce acertou!!');
        let tentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let quantidadesDeTentativas = `voce descobriu o numero secreto com ${tentativas} ${tentativa}!`;
        exibirTextoNaTela('p', quantidadesDeTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (numero < numeroSecreto)
        exibirTextoNaTela('p', 'voce errou tente um numero acima');
      
    else {
        (numero > numeroSecreto)
        exibirTextoNaTela ('p', 'voce errou tente um numero a baixo');
    }
    tentativas ++;
    limparTela();
 }
}

function gerarNumeroAleatorio() {
    let numeroSorteados = parseInt(Math.random() * limiteDeNumero + 1);
    let quantidadesDeElementos = listaDeNumerosSorteado.length;

    if (quantidadesDeElementos == limiteDeNumero) {
        listaDeNumerosSorteado = []
    }

    if( listaDeNumerosSorteado.includes(numeroSorteados)) {
       return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteado.push(numeroSorteados);
        console.log(listaDeNumerosSorteado)
       return numeroSorteados;
    }
}

function limparTela() {
    numero = document.querySelector('input');
    numero.value = '';
}

function exibirTexto() {
    exibirTextoNaTela('h1','Bem vindo ao jogo secreto' );
    exibirTextoNaTela('p','escolha um numero de 1 a 10. Que comecem os jogos!!' );
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1;
    exibirTexto();
    document.getElementById('reiniciar').setAttribute('desabled', true);
}
