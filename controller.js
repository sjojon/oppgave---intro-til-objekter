// Controller
var taskDescriptionInput = document.getElementById('taskDescription');
let taskWhoInput = document.getElementById('taskWho');
let doneByInput = document.getElementById('taskDoneBy');

function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false,
        who: taskWhoInput.value,
        doneBy: doneByInput.value,
    });
    taskDescriptionInput.value = '';
    taskWhoInput.value = '';
    show();
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    show();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index) {
    const id = `editDescription${index}`;
    const id2 = `editWho${index}`;
    const date = `editDoneBy${index}`;
    const inputTag = document.getElementById(id);
    const inputTagWho = document.getElementById(id2);
    const inputDoneBy = document.getElementById(date);
    const task = tasks[index];
    task.description = inputTag.value;
    task.who = inputTagWho.value;
    task.doneBy = inputDoneBy.value;
    task.editMode = false;
    show();
}