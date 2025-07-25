document.addEventListener('DOMContentLoaded', () => {
        const todoInput = document.getElementById('todo-input');
        const addTodoButton = document.getElementById('add-todo');
        const todoList = document.getElementById('todo-list');
        const todoCount = document.getElementById('todo-count');
        const clearCompletedButton = document.getElementById('clear-completed');
        const clearAllButton = document.getElementById('clear-all');

        let todos = [];

        function updateTodoCount() {
            todoCount.textContent = `${todos.filter(todo => !todo.completed).length} tâches restantes`;
        }

        function renderTodos() {
            todoList.innerHTML = '';
            todos.forEach((todo, index) => {
                const li = document.createElement('li');
                li.textContent = todo.text;
                if (todo.completed) {
                    li.classList.add('completed');
                }
                li.addEventListener('click', () => {
                    todo.completed = !todo.completed;
                    renderTodos();
                    updateTodoCount();
                });
                todoList.appendChild(li);
            });
            updateTodoCount();
        }

        addTodoButton.addEventListener('click', () => {
            const text = todoInput.value.trim();
            if (text) {
                todos.push({ text, completed: false });
                todoInput.value = '';
                renderTodos();
            }
        });

        clearCompletedButton.addEventListener('click', () => {
            todos = todos.filter(todo => !todo.completed);
            renderTodos();
        });

        clearAllButton.addEventListener('click', () => {
            todos = [];
            renderTodos();
        });

        renderTodos();
    }); 