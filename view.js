// View
var tasksTable = document.getElementById('tasksTable');
show();

function show() {
    let html = /*HTML*/`
                <tr>
                    <th>Oppgave</th>
                    <th>Gjøres av</th>
                    <th>Frist</th>
                    <th>Gjort</th>
                    <th></th>
                </tr>`;
    for (let i = 0; i < tasks.length; i++) {
        html += createHtmlRow(i);
    }
    tasksTable.innerHTML = html;
}

function createHtmlRow(i) {
    const task = tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    if (!task.editMode)
        return /*HTML*/`<tr>
                    <td>${task.description}</td>
                    <td>${task.who}</td>
                    <td>${task.doneBy}</td>
                    <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                    <td>
                        <button onclick="deleteTask(${i})">Slett</button>
                        <button onclick="editTask(${i})">Rediger</button>
                    </td>
                </tr>
                `;
    return /*HTML*/`<tr>
                    <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                    <td><input id="editWho${i}" type="text" value="${task.who}"/></td>
                    <td><input id="editDoneBy${i}" type="date" value="${task.doneBy}"/></td>
                    <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml}/></td>
                    <td>
                        <button onclick="updateTask(${i})">Lagre</button>
                    </td>
                </tr>
                `;
}