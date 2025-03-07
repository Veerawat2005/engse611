const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();

  // ตรวจสอบความยาวไม่เกิน 50 ตัวอักษร
  if (todoText.length === 0) {
    alert("Task cannot be empty!");
    return;
  }
  if (todoText.length > 50) {
    alert("Task must not exceed 50 characters.");
    return;
  }

  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false,
  };

  todos.push(todo);
  todoInput.value = "";
  renderTodos();
}

function deleteTodo(id) {
  // แสดงกล่องยืนยันก่อนลบ
  if (confirm("Are you sure you want to delete this task?")) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("click", () => toggleCompleted(todo.id));

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    if (todo.completed) {
      todoItem.classList.add("completed");
      todoText.style.textDecoration = "line-through";
    } else {
      todoText.style.textDecoration = "none";
    }

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);

    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();
