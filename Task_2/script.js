// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorField = document.getElementById("form-error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    errorField.textContent = "All fields are required.";
    return;
  }

  if (!emailPattern.test(email)) {
    errorField.textContent = "Please enter a valid email address.";
    return;
  }

  errorField.textContent = "";
  alert("Form submitted successfully!");
  this.reset();
});

// To-Do List
function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="removeTask(this)">X</button>`;
  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

function removeTask(btn) {
  btn.parentElement.remove();
}
