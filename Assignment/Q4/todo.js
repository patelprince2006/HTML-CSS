
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const filterButtons = document.querySelectorAll('.filter-btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

const renderTodos = () => {
  list.innerHTML = '';

  const filtered = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  filtered.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    if (todo.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.textContent = todo.text;
    span.addEventListener('click', () => toggleTodo(index));

    const delBtn = document.createElement('button');
    delBtn.textContent = 'clear';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => deleteTodo(index));

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  saveTodos();
};

const addTodo = () => {
  const text = input.value.trim();
  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  todos.push({ text, completed: false });
  input.value = '';
  renderTodos();
};

const toggleTodo = (index) => {
  todos[index].completed = !todos[index].completed;
  renderTodos();
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
};

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderTodos();
  });
});

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

addBtn.addEventListener('click', addTodo);
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') addTodo();
});

renderTodos();
