const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    const playerPoint = document.querySelector('.player-points');
    const computerPoint = document.querySelector('.computer-points');

const playGame = () => {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");
  const playerOptions = [rockButton, paperButton, scissorsButton];
  const computerOptions = ["rock", "paper", "scissors"];

  playerOptions.forEach(option =>{
      option.addEventListener('click', function (){

          const movesLeft = document.querySelector('.moves-left');
          moves++;
          movesLeft.innerText = `${10-moves}`;
          const randomNumber = Math.floor(Math.random()*3);
          const computerChoice = computerOptions[randomNumber];
          console.log(this.innerText)
          console.log(`computer: ${computerChoice}`)
          winner(this.innerText, computerChoice)
          if (moves === 10){
              console.log('game over')
              gameOver(playerOptions,movesLeft)
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
        playerScore++;
        playerPoint.textContent = playerScore;
        computerPoint.textContent = computerScore;
    }

    else if (typing[player].weakTo === computer){
        narrator.textContent = `Computer won, you played ${player} against computer's ${computer}.`;
        computerScore++;
        computerPoint.textContent = computerScore;
        playerPoint.textContent = playerScore;
    }

    else if (player === computer){
        narrator.textContent = `Tie, you played ${player} against computer's ${computer}.`;
        computerPoint.textContent = computerScore;
        playerPoint.textContent = playerScore;
    }

}

const gameOver = (playerOptions, moveLeft) => {
    const restartButton = document.querySelector('.restart-button');
    const menuBar = document.querySelector('.endgame-menu');
    const options = document.querySelector('.options');
    let narrate = document.querySelector(".narrate-text");
    let movesText = document.querySelector(".moves-left");
    options.style.display = 'none';
    movesText.textContent = `Game Over`
    if(playerScore > computerScore)
    narrate.innerText = 'You win!';
    else if (playerScore === computerScore){
        narrate.innerText = 'You tied!'
    }
    else{
        narrate.innerText = 'You have been vanquished by the computer...'
    }
    menuBar.style.display = 'flex';
    restartButton.addEventListener('click',()=>{

        moves = 0;
        playerScore = 0;
        computerScore =0;
        playerPoint.textContent = '0';
        computerPoint.textContent = '0';
        menuBar.style.display = 'none';
        options.style.display = 'flex';
        movesText.textContent = 'You have 10 tries'
        narrate.textContent = "Let's do this again!"
        console.log("Game restarted!")
    },{once:true})

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