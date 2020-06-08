// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// Event Listeners
todoButton.addEventListener('click', addTodo);
// Functions

function addTodo(e) {
  // Prevent form from submitting / page refresh
  e.preventDefault();

  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // add Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);

  // Checked button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');

  todoDiv.appendChild(completedButton);

  // trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');

  todoDiv.appendChild(trashButton);

  // Append to UL
  todoList.appendChild(todoDiv);

  // Clear Input
  todoInput.value = '';
}
