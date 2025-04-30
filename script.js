// Pomodoro Logic
let time = 1500; // 25 minutes
let isRunning = false;
let timerInterval;

const timerDisplay = document.getElementById("timer");
const startPauseBtn = document.getElementById("startPause");
const resetBtn = document.getElementById("reset");

function updateTimerDisplay() {
  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}`;
}

function startPauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        isRunning = false;
      }
    }, 1000);
  }
  isRunning = !isRunning;
  startPauseBtn.textContent = isRunning ? "Pause" : "Start";
}

function resetTimer() {
  time = 1500;
  isRunning = false;
  clearInterval(timerInterval);
  updateTimerDisplay();
  startPauseBtn.textContent = "Start";
}

startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);
updateTimerDisplay();

// Countdown Logic
const countdownTarget = new Date("2025-11-23T09:00:00");
const countdownDisplay = document.getElementById("countdownDisplay");

function updateCountdown() {
  const now = new Date();
  const diff = countdownTarget - now;

  if (diff <= 0) {
    countdownDisplay.textContent = "The exam day has arrived!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
