body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: #f0f0f0;
}

@keyframes falling {
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

.poop {
  font-size: 30px;
  position: absolute;
  animation-name: falling;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
