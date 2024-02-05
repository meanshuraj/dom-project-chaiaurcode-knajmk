let randomNumber=parseInt(Math.random()*100+1);
const UserInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prvGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter Valid number');
  }
  else if(guess<1){
    alert('please enter greater than 1');
  }
  else if(guess>100){
    alert('please enter smaller or equal to 100');
  }
  else{
     if(numGuess===11){
       displayGuess(guess);
       displayMessage(`Game Over.Random number was ${randomNumber}`);
       endGame();
     }
     else{
       displayGuess(guess);
       checkGuess(guess);
     }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage('Your guessed is write');
    endGame();
  }
  else if(guess>randomNumber){
    displayMessage('Number is too high');
  }
  else{
    displayMessage('Number is too low');
  }
}

function displayGuess(guess){
UserInput.value='';
guessSlot.innerHTML+=`${guess}, `;
numGuess++;
remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
  loworHi.innerHTML=`${message}`
}

function endGame(){
  UserInput.value='';
  UserInput.setAttribute('disabled','');
  p.classList.add('button');
  // p.innerHTML='<h2 id="newGame"> start new Game</h2>';
  p.innerHTML=`<h2 id="newGame">start new Game</h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame();
}

function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess} `;
    UserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  });
}