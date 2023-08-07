const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

const playGame = () => {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");
  const playerOptions = [rockButton, paperButton, scissorsButton];
  const computerOptions = ["rock", "paper", "scissors"];

  playerOptions.forEach(option =>{
      option.addEventListener('click', function (){

          const movesleft = document.querySelector('.moves-left');
          moves++;
          movesleft.innerText = `${10-moves}`;
          const randomNumber = Math.floor(Math.random()*3);
          const computerChoice = computerOptions[randomNumber];
          console.log(this.innerText)
          console.log(`computer: ${computerChoice}`)
          winner(this.innerText, computerChoice)
          if (moves === 10){
              alert('game over')
              gameOver(playerOptions,movesleft)
          }
      })
  })
}

const winner = (player,computer) => {
    let narrator = document.querySelector('.narrate-text');
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    const typing = {
        rock: {weakTo: 'paper', strongTo: 'scissors'},
        paper: {weakTo: 'scissors', strongTo: 'rock'},
        scissors: {weakTo: 'rock', strongTo: 'paper'}
    }

    if (typing[player].strongTo === computer){
        narrator.textContent = `You won, you played ${player} against computer's ${computer}.`;
    }

    else if (typing[player].weakTo === computer){
        narrator.textContent = `Computer won, you played ${player} against computer's ${computer}.`;
    }

    else if (player === computer){
        narrator.textContent = `Tie, you played ${player} against computer's ${computer}.`;
    }

}

playGame();
}

game();

const animationRandomizer = () => {
    const rockText = document.querySelector('.rock-text')
    const paperText = document.querySelector('.paper-text')
    const scissorsText = document.querySelector('.scissors-text')

    let currentText = [rockText, paperText, scissorsText][Math.floor(Math.random() * 3)];
    currentText.style.animationName = 'grow';
    currentText.style.animationDuration = '4s';
    console.log(`we HAVE ${rockText}`)
}

animationRandomizer();