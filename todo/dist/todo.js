"use strict";
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(title) {
        const task = {
            id: Date.now(),
            title,
            completed: false
        };
        m1.tasks.push(task);
        m1.render();
    }
    toggleTask(id) {
        m1.tasks = m1.tasks.map((task) => task.id === id ? Object.assign(Object.assign({}, task), { completed: !task.completed }) : task);
        m1.render();
    }
    deleteTask(id) {
        m1.tasks = m1.tasks.filter(task => task.id !== id);
        m1.render();
    }
    render() {
        const list = document.getElementById("taskList");
        list.innerHTML = "";
        m1.tasks.forEach(task => {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => {
                m1.toggleTask(task.id);
            });
            const span = document.createElement("span");
            span.textContent = task.title;
            if (task.completed) {
                span.style.textDecoration = "line-through";
            }
            const del = document.createElement("button");
            del.textContent = "delete";
            del.addEventListener('click', (e) => {
                //  e.stopPropagation()
                m1.deleteTask(task.id);
            });
            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(del);
            list.appendChild(li);
        });
    }
}
const input = document.getElementById("taskInput");
const btn = document.getElementById("addBtn");
const m1 = new TaskManager();
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        // console.log(e)
        btn.click();
    }
});
btn.addEventListener('click', () => {
    if (input.value.trim() === "")
        return;
    m1.addTask(input.value);
    input.value = "";
});
