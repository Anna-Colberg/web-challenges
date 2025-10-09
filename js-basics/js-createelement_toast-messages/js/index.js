console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');



addButton.addEventListener("click", (event) => {
  event.preventDefault ();
  const newElement = document.createElement ("li");
  newElement.classList.add("toast-container__message");
  newElement.textContent = "Neue Liste";
  toastContainer.append(newElement);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault ();
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
