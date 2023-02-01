const body = document.querySelector(".todo-list__body");
const todo_items = document.querySelectorAll(".todo-item");

addEventListenerToAll(todo_items);

// 切記：要用 eventListener 監聽 form 上面的 submit，而不是加在 input 上
document
  .querySelector(".todo-list__top")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // 若輸入為空白，不新增 todo item
    const input = document.querySelector(".create-item");
    if (!input.value) return;

    const todo_item = document.createElement("div");
    todo_item.classList.add("todo-item", "uncompleted");

    const square = document.createElement("i");
    square.classList.add("bi", "bi-square", "todo-item__square");

    const delete_btn = document.createElement("i");
    delete_btn.classList.add("bi", "bi-x-lg", "todo-item__delete-btn");

    const input_text = document.createElement("span");
    input_text.classList.add("item-name");
    input_text.innerText = input.value;

    const todo_edit_form = document.createElement("form");
    todo_edit_form.classList.add("todo__edit-form", "hide");
    todo_edit_form.innerHTML = `
      <input type="text" class="todo__edit-input" value="${input.value}" />
      <button class="todo__btn-cancel">Cancel</button>
    `;

    input.value = ""; // 清空 input value

    // 利用 insertAdjacentElement 將 todo_item 新增在清單的最上方
    body.insertAdjacentElement("afterbegin", todo_item);
    body.insertAdjacentElement("afterbegin", todo_edit_form);

    const todo_items = document.querySelectorAll(".todo-item");
    todo_items[0].appendChild(square);
    todo_items[0].appendChild(input_text);
    todo_items[0].appendChild(delete_btn);

    addEventListenerToNewItem(todo_items);
  });

function addEventListenerToAll(todo_items) {
  for (let todo_item of todo_items) {
    const square = todo_item.querySelector(".todo-item__square");
    const delete_btn = todo_item.querySelector(".todo-item__delete-btn");
    const item_name = todo_item.querySelector(".item-name");
    const todo_edit_form = document.querySelector(".todo__edit-form");

    square.addEventListener("click", function () {
      todo_item.classList.remove("uncompleted");
      todo_item.classList.add("completed");
      square.classList.toggle("bi-square");
      square.classList.toggle("bi-check2-square");
      todo_item.classList.toggle("checked");
    });

    delete_btn.addEventListener("click", function () {
      todo_item.remove();
    });

    todo_item.addEventListener("dblclick", function () {
      todo_item.classList.add("hide"); // 把原本的 todo-item 隱藏
      todo_edit_form.classList.remove("hide");
      // let todo_edit_form = document.createElement("form");
      // todo_edit_form.classList.add("todo__edit-form");
      // todo_edit_form.innerHTML = `
      //   <input type="text" class="todo__edit-input" value="${item_name.innerText}" />
      //   <button class="todo__btn-cancel">Cancel</button>
      // `;
      // 用 edit form 取代掉原本的 todo item
      // todo_item.parentNode.replaceChild(todo_edit_form, todo_item);
    });
  }
}

function addEventListenerToNewItem(todo_items) {
  const square = todo_items[0].querySelector(".todo-item__square");
  const delete_btn = todo_items[0].querySelector(".todo-item__delete-btn");
  const todo_edit_form = document.querySelector(".todo__edit-form");

  square.addEventListener("click", function () {
    square.classList.toggle("bi-square");
    square.classList.toggle("bi-check2-square");
    todo_items[0].classList.toggle("checked");
  });

  delete_btn.addEventListener("click", function () {
    todo_items[0].remove();
  });

  todo_items[0].addEventListener("dblclick", function () {
    todo_items[0].classList.add("hide"); // 把原本的 todo-item 隱藏
    todo_edit_form.classList.remove("hide");
  });
}
