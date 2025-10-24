import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <button>click me / color red</button>
      <button>click me / color blue</button>
      <button>click me / color yellow</button>
      <button>click me / color black</button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      { children }
    </button>
  );
}
