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