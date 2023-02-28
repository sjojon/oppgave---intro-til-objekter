// Controller
function addTask() {
    tasks.push({
        description: taskDescriptionInput.value,
        isDone: false,
        who: taskWhoInput.value,
        doneBy: doneByInput.value,  // doneByInput.value
        finished: '',
    });
    taskDescriptionInput.value = '';
    taskWhoInput.value = '';
    show();
}

function setDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return today = yyyy + '-' + mm + '-' + dd;
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    tasks[index].finished = setDate();
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
    task.finished = task.isDone ? setDate() : '';
    show();
}