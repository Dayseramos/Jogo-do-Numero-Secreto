let listaDeNumeroSorteado = [];
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio() ;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto){
      exibirTextoNaTela('h1', 'Você acertou!!');
      let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
      let mensagemTentativa = (`você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
      exibirTextoNaTela('p',mensagemTentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute>numeroSecreto){
          exibirTextoNaTela('p', 'o número secreto é menor...');
        }else{ 
            exibirTextoNaTela('p', 'o número secreto é maior...');
          
          } 
          tentativas++
          limparCampo();
        }
      }

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 10 + 1);
   let quantidadeDeNumero = listaDeNumeroSorteado.length;
if (quantidadeDeNumero==10){
  listaDeNumeroSorteado= [];
}
   
   if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
   }
   
}
function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}
function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas=1;
 exibirMensagemInicial();
 document.getElementById('reiniciar').setAttribute('disabled', true);
}