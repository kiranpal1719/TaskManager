const TaskInput = document.getElementById("TaskInput");
const Category = document.getElementById("Category");
const AddBtn = document.getElementById("AddBtn");
const TaskContainer = document.getElementById("TaskContainer");
const Total = document.getElementById("Total");
const Complete = document.getElementById("Complete");
const Pending = document.getElementById("Pending");
const ThemeBtn = document.getElementById("themeBtn");

let TotalTask = 0;
let CompleteTask = 0;

function updateStatus(){
  Total.textContent=TotalTask;
  Complete.textContent=CompleteTask;
  Pending.textContent=TotalTask-CompleteTask;
}

AddBtn.addEventListener("click",function(){
  const text = TaskInput.value.trim();
  if(text === "") {alert("Please Enter Task");
  return;
  }

  const Task = document.createElement("div");
  Task.classList.add("Task");

  Task.setAttribute("data-status","Pending");
  Task.setAttribute("data-Category",Category.value);
  
  Task.innerHTML = `
  <h3>${text}</h3>
  <p>Category:${Category.value}</p>
  <button class="complete">Complete</button>
  <button class="delete">Delete</button>
  `;

  TaskContainer.append(Task);

  TotalTask++;
  updateStatus();
  TaskInput.value="";

  const completeBtn = Task.querySelector(".complete");
  completeBtn.addEventListener("click",function(){
    if(Task.getAttribute("data-Status")==="Pending"){
      Task.setAttribute("data-Status","Complete");
      Task.style.textDecoration="line-through";
      CompleteTask++;
      updateStatus();
    }
  });
    

  
  const deleteBtn = Task.querySelector(".delete");
  deleteBtn.addEventListener("click",function(){
    if(Task.getAttribute("data-Status")==="Complete"){
      CompleteTask--;
    }
    TotalTask--;
    Task.remove();
      updateStatus();
    
  });


});



