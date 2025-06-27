let tasks = [];
let editingIndex = null;

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskHtml = `
            <li class="list-group-item task">
                <span>${task}</span>
                <div>
                    <button class="edit-btn" data-index="${index}"><i class="bi bi-pencil-square"></i> Edit</button>
                    <button class="delete-btn" data-index="${index}"><i class="bi bi-trash-fill"></i> Delete</button>
                </div>
            </li>
        `;
        taskList.insertAdjacentHTML('beforeend', taskHtml);
    });

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            tasks.splice(index, 1);
            renderTasks();
        });
    });

    const editBtns = document.querySelectorAll('.edit-btn');
    editBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            editingIndex = index;
            const taskInput = document.getElementById('edit-task');
            taskInput.value = tasks[index];
            const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('editModal'));
            modal.show();
        });
    });
}

document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-holder');
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

document.getElementById('save-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('edit-task');
    const task = taskInput.value.trim();
    if (task) {
        tasks[editingIndex] = task;
        editingIndex = null;
        taskInput.value = '';
        renderTasks();
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('editModal'));
        modal.hide();
    }
});