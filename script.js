function addTask() {
    const input = document.getElementById('taskInput');
    const dateInput = document.getElementById('taskDate');
    const list = document.getElementById('taskList');

    if (input.value === "" || dateInput.value === "") {
        alert("Please enter both task and date!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>
            <strong>${input.value}</strong><br>
            <small>${dateInput.value.replace('T', ' ')}</small>
        </span>
        <div class="actions">
            <button class="done-btn" onclick="toggleComplete(this)">Done</button>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="del-btn" onclick="this.parentElement.parentElement.remove()">Delete</button>
        </div>
    `;
    list.appendChild(li);
    input.value = "";
    dateInput.value = "";
}

function toggleComplete(btn) {
    btn.parentElement.parentElement.classList.toggle('completed');
}

function editTask(btn) {
    const li = btn.parentElement.parentElement;
    const taskStrong = li.querySelector('strong');
    const newText = prompt("Edit your task:", taskStrong.innerText);
    if (newText !== null && newText.trim() !== "") {
        taskStrong.innerText = newText;
    }
}