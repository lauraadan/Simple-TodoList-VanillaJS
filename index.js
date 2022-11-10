
const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const clean = document.querySelector("#clean");
const list = document.querySelector("#list");

// ADD TASK
const handleClick = (event) => {
  event.preventDefault(); 
  const newTodo = todo.value.trim(); 
  if (newTodo.length === 0) return; 
  list.innerHTML += `
    <div class="todo">
        <span>${newTodo}</span>
        <button class="btn-remove"><i class="fa-solid fa-trash-can"></i></button>
    </div>`;

  // DELETE TASK Funcion para el botón remove de cada tarea
  const todoList = document.querySelectorAll(".todo button");
  for (let i = 0; i < todoList.length; i++) {
    const element = todoList[i];
    element.addEventListener("click", handleClickDelete);
  }
  todo.value = "";
};

// DELETE TASK
const handleClickDelete = (event) => {
  console.log(event.currentTarget);
  const node = event.currentTarget; 
  const parent = node.parentNode;
  swal({
    title: "Are you sure?",
    text: "Once deleted, you can't go back!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your task are deleted!", {
        icon: "success",
      });
      parent.remove();
    } else {
      swal("Your task is safe!", {
        icon: "success",
      });
    }
  });
};

// EMPTY TASKS
const handleClickClean = () => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you can't go back!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your tasks are deleted", {
        icon: "success",
      });
      list.innerHTML = "";
    } else {
      swal("Your tasks aren't deleted", {
        icon: "success",
      });
      return;
    }
  });
};
// ADD TASK
add.addEventListener("click", handleClick);

// EMPTY TASKS
clean.addEventListener("click", handleClickClean);

