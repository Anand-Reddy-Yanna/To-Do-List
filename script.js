let tasks = [];

    function updateProgress() {
      const completed = tasks.filter(t => t.done).length;
      const total = tasks.length;
      document.getElementById('progressCount').innerText = `${completed}/${total}`;
    }

    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskEl = document.createElement('div');
        taskEl.className = 'task';
        taskEl.innerHTML = `
          <div class="text">
            <input type="checkbox" onchange="toggleTask(${index})" ${task.done ? 'checked' : ''}> ${task.text}
          </div>
          <div>
            <button onclick="editTask(${index})">✏️</button>
            <button onclick="deleteTask(${index})">🗑️</button>
          </div>
        `;
        taskList.appendChild(taskEl);
      });
      updateProgress();
    }

    function addTask() {
      const input = document.getElementById('taskInput');
      const text = input.value.trim();
      if (text) {
        tasks.push({ text, done: false });
        input.value = '';
        renderTasks();
      }
    }

    function toggleTask(index) {
      tasks[index].done = !tasks[index].done;
      renderTasks();
    }

    function editTask(index) {
      const newText = prompt('Edit task:', tasks[index].text);
      if (newText !== null) {
        tasks[index].text = newText.trim();
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  
