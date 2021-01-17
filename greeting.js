const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting"),
  button = document.querySelector("button");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  GONE_CN = "gone",
  FORM_CN = "form";

function handleDelete() {
  localStorage.removeItem(USER_LS);
}

function deleteName() {
  button.addEventListener("click", handleDelete);
}

function setName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  setName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.add(GONE_CN);
  form.classList.remove(FORM_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  deleteName();
}
init();
