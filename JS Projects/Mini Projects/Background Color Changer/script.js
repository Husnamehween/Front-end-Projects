
function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
}
//intervalId consumes space,inorder to avoid that setting intervalId to null after stopbtn is clicked can solve our problem
let intervalId;
const startChangingColor = function () {
    //intervalId=setInterval(changeBgColor,1000)
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector(".stop");

startBtn.addEventListener('click', startChangingColor)
stopBtn.addEventListener('click', stopChangingColor)
