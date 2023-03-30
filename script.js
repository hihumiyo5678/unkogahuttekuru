const app = document.getElementById('app');
const startFallingButton = document.getElementById('startFalling');

function createPoop() {
  const poop = document.createElement('div');
  poop.textContent = '💩';
  poop.className = 'poop';
  poop.style.left = `${Math.random() * 100}vw`;
  poop.style.animationDuration = `${Math.random() * 1 + 2}s`;
  poop.style.animationDelay = `${Math.random() * 2}s`;
  app.appendChild(poop);
}

function startFalling() {
  for (let i = 0; i < 50; i++) {
    createPoop();
  }
}

startFallingButton.addEventListener('click', startFalling);
