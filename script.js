let addButton = document.getElementById("addTask");

//0. Li, 1. Checkbox, 2. Text, 3. Button
function addTask(status, task, list) {
  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  let text = document.createElement("div");
  let button = document.createElement("button");
  checkbox.setAttribute("type", "checkbox");
  checkbox.class = 'check2';

  checkbox.checked = status;

  // Delete-Button
  text.innerHTML = task;
  button.textContent ="Delete";
  button.onclick=function(e){
    alert('Dieser Satz wurde gelöscht!!!');
    e.target.parentNode.remove();
    button.class = "delete";
};

  
  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(button);

  list.appendChild(li); 
  list.class = 'hauptList'
};

addButton.onclick = function () {
  let userInput = document.getElementById("userInput");
  let myList = document.getElementById('liste2')
  addTask(false, userInput.value, myList);
  userInput.value = "";
};

function getTodos(myList) {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) =>
      json.forEach((taskObject) => {
    let toDoCompleted = (taskObject.completed);
    addTask(toDoCompleted, (taskObject.title), myList)
      })
    );
};

//getTodos();

let myList = document.getElementById('liste2')
getTodos(myList)