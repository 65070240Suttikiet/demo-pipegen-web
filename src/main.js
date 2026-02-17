import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>

    <h1>Hello My name is Mantou kaa!!</h1>
    <div class="mantou">
    <img
      src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/607066678_122096332623199836_3316483764289744902_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=xab0vM6THcoQ7kNvwH77JKF&_nc_oc=AdncK4WO0-v0JZtwHCZ8PCaASHT5B71nzoxuDTPbltZ0SisJOsJ4wVRYE-OyB9fuVf8&_nc_zt=23&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=GseHmq7fx7n7VbSgVz9LSQ&oh=00_Afuw_rKfEJEyCfza4lEkj5BqWuak96uaS_i3amuhKrfaMA&oe=6999DEEC"
      alt="mantou"
    />
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
