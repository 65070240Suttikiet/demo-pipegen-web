import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>

    <h1>Hello Mannnnnnnnnnnnnnnnnnnnnnnnnnnn!!</h1>
    <div class="man">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0wybwYIhRAD4u8iBeD029wwYx5Um2_DIyw&s"
      alt="man"
    />
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
