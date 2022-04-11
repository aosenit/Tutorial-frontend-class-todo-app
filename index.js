// make todoApp display none from start
document.querySelector(".todoApp").classList.add("displayNone");

//handle form

const form = document.querySelector("#form");
const deleteBtn = document.querySelector(".delete");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  const formName = document.querySelector(".formName");
  const userName = document.querySelector(".username");
  e.preventDefault();

  userName.textContent = formName.value;
  document.querySelector(".todoApp").classList.remove("displayNone");

  document.querySelector(".formContainer").classList.add("displayNone");
}

const todoForm = document.querySelector("#todoForm");
todoForm.addEventListener("submit", handleTodoForm);

function handleTodoForm(e) {
  const todoFormInput = document.querySelector(".todoFormInput");

  e.preventDefault();
  const lists = `
    <div class="todoList">
    <h6 class="todoName">${todoFormInput.value}</h6>
    <div class="todoListBtns">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>
    </div>
  `;

  const todoListContainer = document.querySelector(".todoListContainer");
  //   todoListContainer.insertAdjacentHTML("beforeend", lists);
  todoListContainer.innerHTML += lists;
  todoFormInput.value = "";
  todoFormInput.focus();

  deleteTodo();
  editTodo();
}

function deleteTodo() {
  const deleteBtns = document.querySelectorAll(".delete");

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      deleteBtn.parentElement.parentElement.remove();
    });
  });
}

function editTodo() {
  const editBtns = document.querySelectorAll(".edit");

  editBtns.forEach((editBtn) => {
    const todoName = editBtn.parentElement.previousElementSibling;

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText === "Save") {
        editBtn.innerText = "Edit";
        todoName.contentEditable = false;
      } else {
        todoName.contentEditable = true;
        editBtn.innerText = "Save";
      }
    });
  });
}

// editTodo();
