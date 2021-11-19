const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", getTodo);
todoButton.addEventListener("click", createTodo);
todoList.addEventListener("click", deleteCheck);

//FUCTIONS
function createTodo(event) {
  if (todoInput.value === "") {
    alert("Please write some thing");
    event.preventDefault();
  } else {
    //Prevent form from submiting
    event.preventDefault();
    //CREATE DIV
    const divmaker = document.createElement("div");
    divmaker.classList.add("todo");
    //CREATE LI
    const createLi = document.createElement("li");
    createLi.innerText = todoInput.value;
    createLi.classList.add("todo-txt");
    divmaker.appendChild(createLi);
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);
    //CREATE COMPLITE BUTTON
    const CheckButton = document.createElement("button");
    CheckButton.innerHTML = '<i class="fa fa-check"></i>';
    CheckButton.classList.add("CheckButton");
    divmaker.appendChild(CheckButton);
    //CREATE TRUSH BUTTON
    const TrushButton = document.createElement("button");
    TrushButton.innerHTML = '<i class="fa fa-trash"></i>';
    TrushButton.classList.add("TrushButton");
    divmaker.appendChild(TrushButton);
    //ADD TODO TO TODOLIST
    todoList.appendChild(divmaker);
    //get todoinput empty
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const Item = e.target;
  if (Item.classList.value === "CheckButton") {
    Item.parentElement.classList.add("Complete");
  } else if (Item.classList.value === "TrushButton") {
    Item.parentElement.remove();
    removeLocalTodos(Item);
  }
}

function saveLocalTodos(Todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(Todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodo() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //CREATE DIV
    const divmaker = document.createElement("div");
    divmaker.classList.add("todo");
    //CREATE LI
    const createLi = document.createElement("li");
    createLi.innerText = todo;
    createLi.classList.add("todo-txt");
    divmaker.appendChild(createLi);
    //CREATE COMPLITE BUTTON
    const CheckButton = document.createElement("button");
    CheckButton.innerHTML = '<i class="fa fa-check"></i>';
    CheckButton.classList.add("CheckButton");
    divmaker.appendChild(CheckButton);
    //CREATE TRUSH BUTTON
    const TrushButton = document.createElement("button");
    TrushButton.innerHTML = '<i class="fa fa-trash"></i>';
    TrushButton.classList.add("TrushButton");
    divmaker.appendChild(TrushButton);
    //ADD TODO TO TODOLIST
    todoList.appendChild(divmaker);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoindex = todo.parentElement.firstChild.innerText;
  todos.splice(todos.indexOf(todoindex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
