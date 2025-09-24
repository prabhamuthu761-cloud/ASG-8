    // Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new li
  const li = document.createElement("li");
  li.className = "list-group-item";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.cursor = "pointer";

  // Toggle strike-through
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-outline-warning";
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

 //  Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-outline-danger";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Button group
  const btnGroup = document.createElement("div");
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  // Append items
  li.appendChild(span);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});