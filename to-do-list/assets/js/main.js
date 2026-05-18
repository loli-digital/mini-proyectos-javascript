const inputText = document.querySelector(".input__text");
const btnAddTask = document.querySelector(".btn__add__task");
const showListTask = document.querySelector(".show__list__task");
const completedListTask = document.querySelector(".completed__list__task");
const countTaskCompleted = document.querySelector(".count__task__completed");

//Función para crear elementos
function createElement(tag, classes = [], textContent = "") {
  const element = document.createElement(tag);
  element.classList.add(...classes);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

//Crear botones e iconos
function createButtonWithIcon(className, iconClassName) {
  const button = createElement("button", [className]);
  const icon = createElement("i", iconClassName.split(" "));
  button.appendChild(icon);
  return button;
}

//Crea elementos li y span. Añadimos las clases
function createTaskElement(taskText, isCompleted = false) {
  const taskAdded = createElement("li", ["task__added"], taskText);
  const alignIcons = createElement("span", ["align__icons"]);
  
  const btnFinished = createButtonWithIcon("btn__finished", "fa-solid fa-circle-check icon__finished");
  const btnDelete = createButtonWithIcon("btn__delete", "fa-solid fa-trash-can");
  const btnUndo = createButtonWithIcon("btn__undo", "fa-solid fa-rotate-left");

  btnFinished.addEventListener("click", () => moveToCompleted(taskAdded, btnFinished));

  btnDelete.addEventListener("click", () => removeTask(taskAdded));

  btnUndo.addEventListener("click", () => undoTask(taskAdded));

  alignIcons.appendChild(btnFinished);
  alignIcons.appendChild(btnUndo);
  alignIcons.appendChild(btnDelete);

  taskAdded.appendChild(alignIcons);

  if (isCompleted) {
        taskAdded.classList.add("task__completed");
        btnFinished.style.display = 'none';k
        btnUndo.style.display = 'inline-block';
        btnDelete.style.display = 'inline-block';
    } else {
        btnFinished.style.display = 'inline-block'; 
        btnUndo.style.display = 'none';
        btnDelete.style.display = 'inline-block';
    }


  return taskAdded;
}

function addTask() {
  const taskText = inputText.value.trim();
  if (taskText) {
    const newTask = createTaskElement(taskText);
    showListTask.appendChild(newTask);
    inputText.value = "";
    updateCompletedCount();
    saveTasks();
  }
}

function moveToCompleted(taskElement, iconCheck) {
  taskElement.classList.add("task__completed");

    const btnFinished = taskElement.querySelector(".btn__finished");
    const btnUndo = taskElement.querySelector(".btn__undo");

    if (btnFinished) {
        btnFinished.style.display = 'none';
    }
    if (btnUndo) {
        btnUndo.style.display = 'inline-block';
    }

  completedListTask.appendChild(taskElement);
  updateCompletedCount();
  saveTasks();
}

function removeTask(taskElement) {
  taskElement.remove();
  updateCompletedCount();
  saveTasks();
}

function undoTask(taskElement) {
    taskElement.classList.remove("task__completed");

    const btnFinished = taskElement.querySelector(".btn__finished");
    const btnUndo = taskElement.querySelector(".btn__undo");

    if (btnFinished) {
        btnFinished.style.display = 'inline-block';
    }
    if (btnUndo) {
        btnUndo.style.display = 'none';
    }

    showListTask.appendChild(taskElement);
    updateCompletedCount();
    saveTasks();
}

//Contador de tareas completadas
function updateCompletedCount() {
  const completedTaskCount = completedListTask.children.length;
  countTaskCompleted.textContent = `(${completedTaskCount})`;
}

//Guardar en localStorage
function saveTasks() {
  const pendingTasks = Array.from(showListTask.children).map(li => li.textContent);

  const completedTasks = Array.from(completedListTask.children).map(li => li.textContent);

  localStorage.setItem('pendingTasks', JSON.stringify(pendingTasks));
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
}

//Cargar en localStorage
function loadTasks() {
  const storedPendingTasks = localStorage.getItem('pendingTasks');
  const storedCompletedTasks = localStorage.getItem('completedTasks');

  if (storedPendingTasks) {
    JSON.parse(storedPendingTasks).forEach(taskText => {
      const task = createTaskElement(taskText);
      showListTask.appendChild(task);
    });
  }

  if (storedCompletedTasks) {
    JSON.parse(storedCompletedTasks).forEach(taskText => {
      const taskCompleted = createTaskElement(taskText, true);
      completedListTask.appendChild(taskCompleted);
    });
  }
  updateCompletedCount();
}

btnAddTask.addEventListener("click", addTask);

// Agregar tarea al presionar Enter
inputText.addEventListener("keypress", (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});

window.addEventListener('load', loadTasks);

/*Footer - Copyright*/
document.querySelector(".current__year").textContent = new Date().getFullYear();