
let scorePlayer1El =document.querySelector("#score-player1-el");
let scorePlayer2El =document.querySelector("#score-player2-el");


//Score Counter
let player1Score =0;
let player2Score =0;
 

function updateScore(player,points){
if(player ==='player1'){
    player1Score+=points;
    scorePlayer1El.innerText =player1Score;
}
if (player ==='player2'){
    player2Score+=points;
        scorePlayer2El.innerText =player2Score;
}
}






