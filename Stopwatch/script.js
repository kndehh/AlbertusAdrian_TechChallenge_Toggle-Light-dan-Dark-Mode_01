// memberikan sebuah deklarasi variable  
document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const startBtn = document.getElementById('startBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  //manipulasi waktu
  let startTime, elapsedTime = 0, timerInterval, isRunning = false;

  // fungsi untuk pengaturan waktu pada stopwatch
  function formatTime(timeInMs) {
    let hours = Math.floor(timeInMs / 3600000);
    let minutes = Math.floor((timeInMs % 3600000) / 60000);
    let seconds = Math.floor((timeInMs % 60000) / 1000);
    let milliseconds = timeInMs % 1000;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
  }

  // fungsi untuk mengupdate stopwatch
  function updateDisplay() {
    let currentTime = Date.now();
    let totalElapsedTime = elapsedTime + (currentTime - startTime);
    display.textContent = formatTime(totalElapsedTime);
  }

  //untuk memulai timer
  function startTimer() {
    if (!isRunning) {
      isRunning = true;
      startTime = Date.now();
      timerInterval = setInterval(updateDisplay, 10);
    }
  }

  // untuk melakukan pause timer
  function pauseTimer() {
    if (isRunning) {
      isRunning = false;
      clearInterval(timerInterval);
      elapsedTime += (Date.now() - startTime);
    }
  }

  // untuk melakukan reset pada timer
  function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = "00:00:00:000";
  }

  // list untuk fungsi jika button di klik
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
});
