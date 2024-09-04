let counterValue=0;

let counterDisplay=document.getElementById("counter")
let decreaseEl=document.getElementById("decrease")
let increaseEL=document.getElementById("increase")
let resetEl=document.getElementById("reset")


decreaseEl.addEventListener("click",function(){
    counterValue--;
    updateCounter();

})
increaseEL.addEventListener("click",function(){
    counterValue++
    updateCounter()
})

resetEl.addEventListener("click",function(){
    counterValue=0
    updateCounter()
})
function updateCounter(){
 counterDisplay.textContent=counterValue;
}