const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const pendingTasksList = document.getElementById('pending-tasks');
const completedTasksList = document.getElementById('completed-tasks');


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});


function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button onclick="markComplete(this)">✔️</button>
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;
    pendingTasksList.appendChild(taskItem);
}


function markComplete(button) {
    const taskItem = button.closest('li');
    taskItem.classList.add('completed');
    completedTasksList.appendChild(taskItem);
}


function editTask(button) {
    const taskItem = button.closest('li');
    const taskText = taskItem.querySelector('span');
    const newText = prompt('Edit your task:', taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}


function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}