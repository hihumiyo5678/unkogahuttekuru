const app = document.getElementById("app");
const addPoopButton = document.getElementById("addPoop");

let numberOfPoops = 50;

addPoopButton.addEventListener("click", startFalling);

function createPoop() {
  const poop = document.createElement("span");
  poop.innerHTML = "💩";
  poop.classList.add("poop");
  
  const xPos = Math.random() * 100;
  const animationDuration = 2 + Math.random() * 4;
  
  poop.style.left = xPos + "%";
  poop.style.animationDuration = animationDuration + "s";
  
  app.appendChild(poop);
  
  setTimeout(() => {
    poop.remove();
  }, animationDuration * 1000);
}

function startFalling() {
  for (let i = 0; i < numberOfPoops; i++) {
    createPoop();
  }
  numberOfPoops += 10;
}
