const inputTarea = document.querySelector("#list"),
  addTask = document.querySelector("#add"),
  taskTotal = document.querySelector("#total"),
  realizada = document.querySelector("#done"),
  listaTareas = document.querySelector("#task_list"),
  arregloTareas = [];


const deleteTask = (id) => {
  const index = arregloTareas.findIndex((tarea) => tarea.id === id);
  arregloTareas.splice(index, 1);
  renderTemplate();
};

const updateTask = (id) => {
  const index = arregloTareas.findIndex((tarea) => tarea.id == id);
  arregloTareas[index].done
    ? (arregloTareas[index].done = false)
    : (arregloTareas[index].done = true);
  renderTemplate();
};

const getTask = (tarea) => {
  if (tarea.value != "") {
    const newTask = {
      id: Date.now(),
      name: tarea.value,
      realizada: false,
    };
    arregloTareas.push(newTask);
    tarea.value = "";
    renderTemplate();
    return;
  }
  return alert("Debe ingresar una tarea");
};

const renderTemplate = () => {
    let html = "";
    let total = 0;
    done = 0;
    arregloTareas.forEach((tarea, index, arr) => {
        if (tarea.done) {
            done++;
            var style = "checked";
        }
        html += `<li class="${style}"><p>${tarea.name}</p> <div class="task-controls"><i class="fa-solid fa-circle-check" onclick="{updateTask(${tarea.id})}"></i><i class="fa-solid fa-trash" onclick="{confirm('¿Estás seguro de eliminar la tarea ${tarea.name}?') ? deleteTask(${tarea.id}) : null}"></i></div></li>`;
        total++;
    });
    listaTareas.innerHTML = html;
    taskTotal.innerHTML = total;
    realizada.innerHTML = done
};

document.querySelector("#add").addEventListener("click", () => {
    getTask(inputTarea);
});

document.querySelector("#list").addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        getTask(inputTarea);
    }
});
