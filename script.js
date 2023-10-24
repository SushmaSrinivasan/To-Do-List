const itemInput=document.getElementById("task");
const addBtn=document.getElementById("add");
const taskList=document.getElementById("taskList");

//adding an item
addBtn.addEventListener("click",()=>{
    const itemText=itemInput.value.trim();
    if(itemText !== " "){
        createTask(itemText);
        itemInput.value= " ";
    }
});

//creating a new item
function createTask(text){
    const taskItem=document.createElement("li");
    taskItem.innerHTML=`
    <span>${text}</span>
    <button class="delete">Delete</button>`;
    taskList.appendChild(taskItem);

//Delete task
const delBtn = taskItem.querySelector(".delete");
delBtn.addEventListener("click", ()=>{
    taskItem.remove();
});

// mark as completed
taskItem.addEventListener("click", ()=>{
    taskItem.classList.toggle("completed");
});
}