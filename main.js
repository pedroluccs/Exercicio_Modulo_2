const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

window.addEventListener("load", () => {
const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
storedTasks.forEach(task => {
createTaskRow(task);
});
});

addButton.addEventListener("click", addTask);

function addTask() {
const taskText = taskInput.value.trim();
if (taskText !== "") {
const task = { text: taskText, completed: false };
createTaskRow(task);
saveTasksToLocalStorage();
taskInput.value = "";
}
}

function createTaskRow(task) {
const row = document.createElement("tr");
row.innerHTML = `
<td class="${task.completed ? 'completed' : ''}">${task.text}</td>
`;
row.addEventListener("click", () => toggleTaskCompletion(row, task));
taskList.appendChild(row);
}

function toggleTaskCompletion(row, task) {
task.completed = !task.completed;
row.querySelector("td").classList.toggle("completed", task.completed);
saveTasksToLocalStorage();
}


function saveTasksToLocalStorage() {
const tasks = [];
const rows = taskList.querySelectorAll("tr");
rows.forEach(row => {
const taskText = row.querySelector("td").textContent;
const completed = row.querySelector("td").classList.contains("completed");
tasks.push({ text: taskText, completed: completed });
});
localStorage.setItem("tasks", JSON.stringify(tasks));
}
