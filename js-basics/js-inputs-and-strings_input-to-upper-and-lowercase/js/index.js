console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const downcasebutton = document.querySelector('[data-js="button-downcase"]')


uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

downcasebutton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
})
