console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Not necessary for the challenge, just adding some flavor.
  const date = new Date().toDateString();
  const message = `A new message! Received at: ${date}`;

  addToast(message);
});

clearButton.addEventListener("click", () => {
  clearToasts();
});

function clearToasts() {
  toastContainer.innerHTML = "";
}

function addToast(message) {
  const message = document.createElement("li");
  message.classList.add("message");
  message.textContent = message;
  toastContainer.append(message);
}
