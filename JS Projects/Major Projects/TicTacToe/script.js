let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turn=true;//playerX,player0
let count=0;//to track draw

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame=()=>{
    turn=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add('hide');
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            //player0
            box.innerText='0';
            turn=false;
            
        }else{
            //playerX
            box.innerText='X'
            turn=true;
        }
      box.disabled=true;
      count++;
       let isWinner=checkWinner();

       if (count === 9 && !isWinner) {
        gameDraw();
       } 
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=''
    }
};



const showWinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner=()=>{
  for(let pattern of winningPatterns){
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val !=='' && pos2Val !=='' &&pos3Val !==''){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
            return true;
               
        }
    }
  }
}
resetBtn.addEventListener('click', resetGame)
newBtn.addEventListener('click', resetGame)






