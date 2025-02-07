const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

const addTask = ()=>{
    if(inputBox.value===""){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

addButton.addEventListener("click",()=>{
    addTask();
});
ListContainer.addEventListener("click",(e)=>{
   if(e.target.tagName=== "LI"){
    e.target.classList.toggle("checked")
    saveData();
   }
   else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
   }
}, false);
  
const saveData=()=>{
    localStorage.setItem("data",ListContainer.innerHTML)
}
const showList=()=>{
    ListContainer.innerHTML = localStorage.getItem("data")
}
showList();