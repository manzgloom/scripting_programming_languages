class Task {
    constructor(id, title, state) {
        this.id = id;
        this.title = title;
        this.state = state;
    }
    newName(new_title) {
        this.title = new_title;
    }
    newState(new_state) {
        this.state = new_state;
    }
}
class Todolist {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.all_tasks = [];
    }
    setName(title) {
        this.title = title;
    }
    addTask(task) {
        this.all_tasks.push(task);
    }
    filterTasks(state) {
        return this.all_tasks.filter(task => task.state === state);
    }
}

let task1 = new Task(11, "Задача1", false);
let task2 = new Task(12, "Задача2", false);
let task3 = new Task(13, "Задача3", true);

let TodoList1 = new Todolist(1, "Список дел1");
let TodoList2 = new Todolist(2, "Список дел2");

task1.newName("Задача11");
task1.newState(true);

TodoList2.setName("Список дел12");

TodoList1.addTask(task1);
TodoList1.addTask(task2);
TodoList2.addTask(task3);

console.log(TodoList1.filterTasks(true));
console.log(TodoList1.filterTasks(false));

console.log(task1.title);