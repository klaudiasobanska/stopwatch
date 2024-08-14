const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const centisecondsText = document.getElementById("centiseconds");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const buttons = document.getElementsByClassName("button--hover");

let time = 0;
let isRunning = false;
let timeInterval;

startButton.addEventListener("click", () => {
  isRunning = !isRunning;
  if (!timeInterval) {
    timeInterval = setInterval(setTime, 10);
  }
});

restartButton.addEventListener("click", () => {
  clearInterval(timeInterval);
  timeInterval = null;
  isRunning = false;
  changeStartButton();
  time = 0;
  minutesText.textContent = "00";
  secondsText.textContent = "00";
  centisecondsText.textContent = "00";
});

Array.from(buttons).forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    let x = e.pageX - button.offsetLeft;
    let y = e.pageY - button.offsetTop;

    if (button.className.includes("button--active")) {
      button.style.setProperty("--bgcolor", "#d479ca");
    } else {
      button.style.setProperty("--bgcolor", "#faa063");
    }

    button.style.setProperty("--x", x + "px");
    button.style.setProperty("--y", y + "px");
  });
});

function setTime() {
  changeStartButton();
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

function changeStartButton() {
  if (isRunning) {
    startButton.classList.add("button--active");
    startButton.children[0].innerHTML = "Stop";
  } else {
    startButton.classList.remove("button--active");
    startButton.children[0].innerHTML = "Start";
  }
  
}
