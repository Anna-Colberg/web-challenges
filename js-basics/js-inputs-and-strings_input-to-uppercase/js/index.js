console.clear();

const nameInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]')


button.addEventListener("click", () =>{
    const oldValue = nameInput.value;
    const newValue = oldValue.toUpperCase();
    nameInput.value = newValue;
})


