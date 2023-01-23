// Declarar e iniciar duas variáveis que vão receber os números aleatórios de 1-10
const randomNumber1 = Math.ceil(Math.random() * 10);
const randomNumber2 = Math.ceil(Math.random() * 10);

//Declarar e iniciar variáveis que receberão o tipo de operação será realizado
const operacoes = [
    'somado com ', 
    'subtraído por ', 
    'multiplicado por ', 
    'dividido por '
];
const operacaoEscolhida = Math.floor(Math.random() * 4);

// Declarar e iniciar variáveis DOM 
const scoreDisplay = document.getElementById('pontuacao');
const msgFinal = document.querySelector('.msg-final');
const questao = document.getElementById('questao');
const resposta = document.getElementById('resposta');
const formResposta = document.getElementById('formResposta');
const enviarResposta = document.getElementById('enviarResposta');

let pontuacao = JSON.parse(localStorage.getItem("pontuacao"));
if (!pontuacao) {
  pontuacao = 0;
}

scoreDisplay.innerText = `Pontuação: ${pontuacao}`;

//Formular a questão com os dois numeros randomicos gerados e a operacao gerada
questao.innerHTML = `Qual valor de ${randomNumber1} ${operacoes[operacaoEscolhida]} ${randomNumber2}`;

//Gerar resultado da operacao para comparar com o que o usuário digitar
const operacaoResultado = (op, num1, num2) => {
    let result;
    switch(op) {
        case 0:
            result = num1+num2;
            break;
        case 1:
            result = num1-num2;
            break;
        case 2:
            result = num1*num2;
            break;
        case 3:
            result = num1/num2;
            break;
    }
    return result.toFixed(2);
    
};

let resultado = operacaoResultado(operacaoEscolhida, randomNumber1, randomNumber2);
console.log(resultado)

//Verificar o que usurio digitou com a resposta correta
enviarResposta.addEventListener('click', () => {
    //converter resposta em number e formatar em duas casas decimais
    const respostaUsuario = parseInt(resposta.value).toFixed(2);

    
    if(resultado == respostaUsuario) {
        pontuacao++;
        localStorage.setItem("pontuacao", JSON.stringify(pontuacao));
        msgFinal.innerHTML = "Você Acertou!!"
    } else {
        pontuacao--;
        localStorage.setItem("pontuacao", JSON.stringify(pontuacao));
        msgFinal.innerHTML = "Você Errou!!"
    }
})
