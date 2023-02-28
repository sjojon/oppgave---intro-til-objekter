// Model
var tasks = [
    { description: 'Handle til middag', isDone: true, who: 'Tom', doneBy: '', finished: '2023-02-27' },
    { description: 'Lage middag', isDone: false, who: '', doneBy: '', finished: '' },
    { description: 'Spise middag', isDone: false, who: '', doneBy: '', finished: '' },
];
var taskDescriptionInput = document.getElementById('taskDescription');
let taskWhoInput = document.getElementById('taskWho');
let doneByInput = document.getElementById('taskDoneBy');
// let finishedAt = document.getElementById('taskFinished');