    let addButton = document.getElementById("addTask");
  
  // Funktion zum Hinzufügen einer Aufgabe
  function addTask(status, task, list) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let text = document.createElement("div");
    let button = document.createElement("button");
  
    // Einstellungen für die Checkbox
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = 'check2';
    checkbox.checked = status;
  
    // Text für das Aufgabenelement
    text.innerHTML = task;
  
    // Einstellungen für den Löschbutton
    button.textContent = "Delete";
    button.className = "delete";
    button.onclick = function(e) {
      alert('Dieser Satz wurde gelöscht!!!');
      e.target.parentNode.remove();
    };
  
    // Elemente zum Listenelement hinzufügen
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    list.appendChild(li);
    list.className = 'hauptList';
  };
  
  // Ereignis bei Klick auf den "Add Task"-Button
  addButton.onclick = function () {
    let userInput = document.getElementById("userInput");
    let myList = document.getElementById('liste2');
    addTask(false, userInput.value, myList);
    userInput.value = ""; // Eingabefeld leeren
  };
  
  // Funktion zum Abrufen und Anzeigen von Aufgaben von einem externen Dienst
  function getTodos(myList) {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json.forEach((taskObject) => {
        let toDoCompleted = taskObject.completed;
        addTask(toDoCompleted, taskObject.title, myList);
      }));
  };
  
  // Initialisiere die Todo-Liste mit Daten
  let myList = document.getElementById('liste2');
  getTodos(myList);
  
 
  