const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const centisecondsText = document.getElementById("centiseconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");

let time = 0;
let isRunning = false;
let timeInterval;

startButton.addEventListener("click", () => {
  isRunning = true;
  if (!timeInterval) {
    timeInterval = setInterval(setTime, 10);
  }
  startButton.classList.add("button--active");
});

stopButton.addEventListener("click", () => {
  isRunning = false;
  startButton.classList.remove("button--active");
});

restartButton.addEventListener("click", () => {
  clearInterval(timeInterval);
  timeInterval = null;
  isRunning = false;
  time = 0;
  minutesText.textContent = "00";
  secondsText.textContent = "00";
  centisecondsText.textContent = "00";
});

function setTime() {
  if (!isRunning) return;
  time++;
  let centiseconds = time % 100;
  if (centiseconds < 10) {
    centiseconds = "0" + centiseconds;
  }
  let seconds = Math.floor((time / 100) % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let minutes = Math.floor((time / 6000) % 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  minutesText.textContent = minutes;
  secondsText.textContent = seconds;
  centisecondsText.textContent = centiseconds;
}
