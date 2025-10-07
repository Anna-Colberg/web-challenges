console.clear();

const colorslider = document.querySelector('[data-js="input-color"]')
const radiusslider = document.querySelector('[data-js="input-radius"]')
const rotationslider = document.querySelector('[data-js="input-rotation"]')
const box = document.querySelector('[data-js="box"]')


colorslider.addEventListener("input", () => {
    box.style.backgroundColor = `hsl(${colorslider.value}, 100%, 50%)`;  
})

radiusslider.addEventListener("input", () => {
    if (radiusslider.value == radiusslider.max) {
        box.style.borderRadius = "30%";
    } else {
        box.style.borderRadius = `${radiusslider.value}px`;
    }
})

rotationslider.addEventListener("input", () => {
    box.style.transform = `rotate(${rotationslider.value}deg)`;
})