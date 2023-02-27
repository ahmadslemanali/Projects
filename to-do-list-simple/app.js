// Get DOM elements
const input = document.getElementById("input-task");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add task to list function
function addTask() {
	// Get task input value
	const task = input.value;

	// Create new list item element
	const listItem = document.createElement("li");
	listItem.classList.add("task");
	listItem.textContent = task;

	// Add delete button to list item
	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Delete";
	deleteBtn.classList.add("delete-btn");
	listItem.appendChild(deleteBtn);

	// Add list item to task list
	taskList.appendChild(listItem);

	// Clear input field
	input.value = "";

	// Add event listener to delete button
	deleteBtn.addEventListener("click", () => {
		listItem.remove();
	});
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on enter key press
input.addEventListener("keydown", (event) => {
	if (event.keyCode === 13) {
		addTask();
	}
});