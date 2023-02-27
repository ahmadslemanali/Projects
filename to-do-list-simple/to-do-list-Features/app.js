const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearCompletedButton = document.getElementById('clear-completed');
const remainingTasks = document.querySelector('.remaining-tasks');

let tasks = [];

function addTask() {
  const task = {
    id: Date.now(),
    name: newTaskInput.value,
    completed: false
  };

  tasks.push(task);

  newTaskInput.value = '';

  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.setAttribute('data-id', task.id);
    taskElement.innerText = task.name;
    taskElement.classList.add('task');

    if (task.completed) {
      taskElement.classList.add('completed');
    }
    
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete-button');
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    
    taskElement.appendChild(taskActions);
    
    taskList.appendChild(taskElement);
    });
    
    updateRemainingTasks();
    }
    
    function updateTaskStatus(taskId, completed) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[taskIndex].completed = completed;
    renderTasks();
    }
    
    function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
    }
    
    function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
    }
    
    function updateRemainingTasks() {
    const remainingTasksCount = tasks.filter(task => !task.completed).length;
    
    if (remainingTasksCount === 0) {
    remainingTasks.innerHTML = 'No remaining tasks';
    } else if (remainingTasksCount === 1) {
    remainingTasks.innerHTML = '1 remaining task';
    } else {
    remainingTasks.innerHTML = `${remainingTasksCount} remaining tasks`;
    }
    }
    
    addTaskButton.addEventListener('click', addTask);
    
    newTaskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    addTask();
    }
    });
    
    taskList.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('complete-button')) {
    const taskId = target.closest('.task').getAttribute('data-id');
    updateTaskStatus(parseInt(taskId), true);
    }
    
    if (target.classList.contains('delete-button')) {
    const taskId = target.closest('.task').getAttribute('data-id');
    deleteTask(parseInt(taskId));
    }
    });
    
    clearCompletedButton.addEventListener('click', clearCompletedTasks);
    
    renderTasks();