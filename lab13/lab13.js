class Task {
    constructor(id, title, state) {
        this.id = id;
        this.title = title;
        this.state = state;
    }
}

class Todolist {
    constructor() {
        this.all_tasks = [];
        this.count = 0;
    }

    addTask(title) {
        let task = new Task(this.count++, title, false);
        this.all_tasks.push(task);
    }

    filterTasks(state) {
        return this.all_tasks.filter(task => task.state === state);
    }

    deleteTask(id) {
        this.all_tasks = this.all_tasks.filter(task => task.id !== id);
        todoList.updateTasks(todoList.all_tasks);
    }

    changeState(id) {
        let task = this.all_tasks.find(t => t.id === id);
        if (task) {
            task.state = !task.state;
        }
    }

    changeName(id) {
        let task = todoList.all_tasks.find(t => t.id === id);
        let newTitle = prompt("Редактировать задачу:", task.title);
        if (newTitle) {
            task.title = newTitle;
            todoList.updateTasks(todoList.all_tasks);
        }
    }
    updateTasks(tasks) {
        let taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            let li = document.createElement('li');
            li.innerHTML = `
                <input  class="first" type = "checkbox" onchange="todoList.changeState(${task.id})" ${task.state ? 'checked' : ''}>
                <span class = "title">${task.title}</span>
                <button class = "but_edit" onclick="todoList.changeName(${task.id})">Редактировать</button>
                <button class = "but_delete" onclick="todoList.deleteTask(${task.id})">Удалить</button>
            `;
            taskList.appendChild(li);
        });
    }
}

let todoList = new Todolist();

document.getElementById('addTask').addEventListener('click', () => {
    let taskTitle = document.getElementById('taskTitle').value;
    if (taskTitle) {
        todoList.addTask(taskTitle);
        document.getElementById('taskTitle').value = '';
        todoList.updateTasks(todoList.all_tasks);
    }
});

document.getElementById('showAll').addEventListener('click', () => {
    todoList.updateTasks(todoList.all_tasks);
});

document.getElementById('showCompleted').addEventListener('click', () => {
    todoList.updateTasks(todoList.filterTasks(true));
});

document.getElementById('showUncompleted').addEventListener('click', () => {
    todoList.updateTasks(todoList.filterTasks(false));
});