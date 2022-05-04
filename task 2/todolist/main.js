window.addEventListener("load", () => {
  let task = document.querySelector("#task");
  let button = document.querySelector("#liveToastBtn");
  let list = document.querySelector("#list");
  const form = document.querySelector("#new-task-form");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (task.value.trim()) {
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      task_el.appendChild(task_content_el);

      const task_input_el = document.createElement("input");
      task_input_el.classList.add("text");
      task_input_el.type = "text";
      task_input_el.value = task.value;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      const task_actions_el = document.createElement("div");
      task_actions_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.classList.add("edit");
      task_edit_el.innerHTML = "Düzenle";

      const task_delete_el = document.createElement("button");
      task_delete_el.classList.add("delete");
      task_delete_el.innerHTML = "Sil";

      task_actions_el.appendChild(task_edit_el);
      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);

      list_el.appendChild(task_el);
      $(".success").toast("show");
      task.value = "";

      task_edit_el.addEventListener("click", () => {
        if (task_edit_el.innerText.toLowerCase() == "düzenle") {
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
          task_edit_el.innerText = "Kaydet";
          console.log("kaydet");
        } else if (task_edit_el.innerText.toLowerCase() == "kaydet") {
          task_input_el.setAttribute("readonly", "readonly");
          task_edit_el.innerText = "Düzenle";
          console.log("kaydet2");
        } else {
          task_input_el.setAttribute("readonly", "readonly");
          task_input_el.innerText = "Düzenle";
          console.log("düzenle");
        }
      });

      task_delete_el.addEventListener("click", () => {
        list_el.removeChild(task_el);
      });
    } else {
      $(".error").toast("show");
    }
  });
});
