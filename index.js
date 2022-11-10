// GUARDAR LA REFERENCIA DE LOS NODOS CON LOS ID DE HTML
const todo = document.querySelector("#todo");
const add = document.querySelector("#add");
const clean = document.querySelector("#clean");
const list = document.querySelector("#list");

// ADD TASK
const handleClick = (event) => {
  event.preventDefault(); // preventDefault() detiene el evento, el caso de un submit detiene la carga de la pagina
  const newTodo = todo.value.trim(); // Accede al input (todo) y retorna su valor y lo guarda en la const newTodo. Con .trim elimina espacios en blanco en los extremos de la string
  if (newTodo.length === 0) return; // Si el input esta vacio no hacemos nada y terminamos la funcion con return
  // Agregamos al final del html el nuevo html con la tarea
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

  // Vaciamos el contenido del input una vez añadida la tarea
  todo.value = "";
};

// DELETE TASK
const handleClickDelete = (event) => {
  // toda funcion que se ejecuta con addeventlistenner, recibe un argumento event o e. A veces se necesita y a veces no
  //Event da informacion sobre el evento que se ha producido al darle clic.
  console.log(event.currentTarget);
  const node = event.currentTarget; // currentTarget da el boton exacto en el que se ha hecho click
  const parent = node.parentNode; // para que no borre solo el boton si no el div entero (padre) parentNode devuelve el padre del nodo especificado en el arbol.
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
  
  // node.parentNode.remove()
};

// EMPTY TASKS
const handleClickClean = () => {
  // Nos pide confirmacion, retorna true si aceptas y false si rechazas
  //METODO 1 - SWEET ALERT
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
  // METODO 2 - NAVEGADOR
//   const canDelete = confirm('Estas seguro que quieres vaciar la lista?')
//   if (canDelete == false) // si canDelete es false, no hagas nada, si no, borra todo de list.
//       return;
//   list.innerHTML = ''
};

// ESCUCHAR EVENTOS DE BOTON

// ADD TASK
add.addEventListener("click", handleClick);

// EMPTY TASKS
clean.addEventListener("click", handleClickClean);

