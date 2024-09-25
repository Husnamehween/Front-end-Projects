const inputEl=document.querySelector('#input-el');
const dateEl=document.querySelector("#date-el");
const addBtn=document.querySelector("#add-btn");
const listContainer=document.querySelector('#list-container');

addBtn.addEventListener('click',()=>{
    updateTask();
    saveData();
    
})

function updateTask(){
    const inputValue=inputEl.value;
    const dateValue=dateEl.value
    if(inputValue===''){
        alert("you must write something")
    }
    else{
        let li =document.createElement('li');
        li.innerHTML=inputValue;
        listContainer.appendChild(li)
    
        let span=document.createElement('span');
        span.innerHTML=`<img  class='delete'src='/images/delete.png'></img>`;
        li.appendChild(span);
    
        let dateInput=document.createElement('span');
        dateInput.innerHTML=`<p class='date'>${dateValue}</p>`
        li.appendChild(dateInput)
        
        inputEl.value='';
        dateEl.value='';
        
    }
    saveData();
    }
    

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
}, false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();



