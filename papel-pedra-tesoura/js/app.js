const keys = ['paper', 'rock', 'scissors', 'lizard', 'spock'];
const hands = [];
keys.forEach(function(key){
    hands.push(document.getElementById(key));
  });

let handPlayerOutput = document.querySelector('#handPlayer');
let handComputerOutput = document.querySelector('#handComputer');
let scorePlayerOutput = document.querySelector('#scorePlayer');
let scoreComputerOutput = document.querySelector('#scoreComputer');
let resultOutput = document.querySelector('#result');


var playerHand ='';
var computerHand ='';
let scorePlayer = 0;
let scoreComputer = 0;

const computerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 5);
    computerHand = keys[randomChoice];
    handComputerOutput.src = `./img/${computerHand}BW.png`;
};
const playerChoice = (e) => {
    playerHand = e.target.id;
    handPlayerOutput.src = `./img/${playerHand}BW.png`;
}

hands.forEach((hand) => {
    hand.addEventListener('click', (e) => {
        playerChoice(e);
        computerChoice();
        play();
    });
    
});

const play = () => {
    //Esperar o usuario escolher a mão
    if(playerHand !=="" && computerHand !=="") {
        if(playerHand===computerHand) {
            resultOutput.innerHTML = "Houve empate!"
        } else {
            switch(playerHand) {
                case 'paper':
                    if(computerHand=='scissors' || computerHand =='lizard') {
                        resultOutput.innerHTML = "Computador Venceu!";
                        scoreComputer++;
                    } else {
                        resultOutput.innerHTML = "Jogador Venceu!";
                        scorePlayer++;
                    }
                    break;
                case 'rock':
                    if(computerHand=='paper' || computerHand =='spock') {
                        resultOutput.innerHTML = "Computador Venceu!";
                        scoreComputer++;
                    } else {
                        resultOutput.innerHTML = "Jogador Venceu!";
                        scorePlayer++;
                    }
                    break;
                case 'scissors':
                    if(computerHand=='rock' || computerHand =='spock') {
                        resultOutput.innerHTML = "Computador Venceu!";
                        scoreComputer++;
                    } else {
                        resultOutput.innerHTML = "Jogador Venceu!";
                        scorePlayer++;
                    }
                    break;
                case 'lizard':
                    if(computerHand=='scissors' || computerHand =='rock') {
                        resultOutput.innerHTML = "Computador Venceu!";
                        scoreComputer++;
                    } else {
                        resultOutput.innerHTML = "Jogador Venceu!";
                        scorePlayer++;
                    }
                    break;
                case 'spock':
                    if(computerHand=='paper' || computerHand =='lizard') {
                        resultOutput.innerHTML = "Computador Venceu!";
                        scoreComputer++;
                    } else {
                        resultOutput.innerHTML = "Jogador Venceu!";
                        scorePlayer++;
                    }
                    break;
            };
            scorePlayerOutput.innerHTML = scorePlayer;
            scoreComputerOutput.innerHTML = scoreComputer;
        }
        
    }

}