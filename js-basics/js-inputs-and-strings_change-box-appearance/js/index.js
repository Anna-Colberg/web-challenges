console.clear();

const colorslider = document.querySelector('[data-js="input-color"]')
const radiusslider = document.querySelector('[data-js="input-radius"]')
const rotationslider = document.querySelector('[data-js="input-rotation"]')
const box = document.querySelector('[data-js="box"]')


colorslider.addEventListener("input", () => {
    box.style.backgroundColor = `hsl(${colorslider.value}, 70%, 60%)`;  
});

radiusslider.addEventListener("input", () => {
   box.style.borderRadius = `${radiusslider.value}%`;
});

rotationslider.addEventListener("input", () => {
    box.style.transform = `rotate(${rotationslider.value}deg)`;
});