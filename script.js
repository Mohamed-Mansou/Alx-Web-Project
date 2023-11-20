const todoinput = document.querySelector(".todo-input")
const todobutton = document.querySelector(".todo-button")
const todolist = document.querySelector(".todo-list")
const filteroption = document.querySelector(".filter-todo")

Document.addEventlistener("DOMContentLoaded",getlocaltodos)
todobutton.addEventlistener("click",addtodo)
todolist.addEventlistener("click",deletecheck)
filteroption.addEventlistener("change",filtertodo)

function addtodo(event) {
    event.preventDefault();
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo =document.createElement("li")
    newTodo.innerText = todoinput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo);
    saveLocalTodos(todoinput.value);

    const completedButton =document.createElement("button");
    completedButton.innerHTML= '<i class="fas fa-check-circle"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    todolist.appendChild(todoDiv);
    todoinput.value="";
}

