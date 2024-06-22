// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listeners
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo);

// Functions
function addTodo(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function deleteTodo(event) {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
}
