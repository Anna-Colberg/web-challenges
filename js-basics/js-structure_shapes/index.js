

console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import Square from "./components/Square/square.js";
import Pentagon from "./components/Pentagon/pentagon.js";


const root = document.getElementById("root");

const circle = Circle();
const square = Square();
const pentagon = Pentagon();



/* const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
}); */

/* const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
}); */

/* const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
}); */



root.append(circle, square, pentagon);
