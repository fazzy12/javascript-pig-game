/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 

/*****************************************
    // VARIABLES  
 *****************************************/
var scores, roundScores, activePlayer, gameplaying;
init(); 
 
var lastDice;
// var nickName;

// document.querySelector('#current-' + activePlayer).textContent = dice; 

// var x =  document.querySelector('#score-0').textContent;
document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gameplaying){
          //1. random number
    var dice1 = Math.floor(Math.random() * 6) +1;
    var dice2 = Math.floor(Math.random() * 6) +1;

    // get nickname value
    var nickName1 = document.querySelector('#nickname-1').value;
    var nickName2 = document.querySelector('#nickname-2').value;

    //display nickname value to screen
    document.querySelector('.namedisplay-1').textContent = nickName1;
    document.querySelector('.namedisplay-2').textContent = nickName2;

    document.querySelector('.namedisplay-1').style.display = 'block';
    document.querySelector('.namedisplay-2').style.display = 'block';
   
    //remove nickname input
    document.querySelector('#nickname-1').style.display = 'none';
    document.querySelector('#nickname-2').style.display = 'none';






    //2 dispaly result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'; 
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; 


    //update roundscore if the rolled number is not a one
    /*if (dice === 6 && lastDice === 6){
        //player looses
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';

    }else */
    if(dice1 !== 1 && dice2 !== 1){
        //adscore 
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        //next player
        nextPlayer(); 
    }
}
});    

    /*new dice
      lastDice = dice;
    }*/



//btn hold function
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplaying){
         //add current scrore to the palyers global score 
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;
    //undefined, 0, null or "" are COERCED to false
    //anything else is coerced to true
    if(input){
        winningScore = input;
    }else{
        winningScore = 100;
    }

    //check if player wins
    if(scores[activePlayer] >= winningScore){
          
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

    gameplaying = false;    

    }else{
         //next player
    nextPlayer();
    }

    }
    
});


//new game function
document.querySelector('.btn-new').addEventListener('click', init);




//game init
function init(){ 
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gameplaying = true;
 
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'; 
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');

//hide on new game click
document.querySelector('.namedisplay-1').style.display = 'none';
document.querySelector('.namedisplay-2').style.display = 'none';


document.querySelector('#nickname-1').style.display = 'block';
document.querySelector('#nickname-2').style.display = 'block';
}

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}


 


 







 










 