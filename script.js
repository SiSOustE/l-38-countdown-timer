function startCountdown(minutes) {
  let totalSeconds = minutes * 60;
  const timerElement = document.getElementById('timer')

  const interval = setInterval(() => {
    const minutesLeft = Math.floor(totalSeconds / 60);
    const secondsLeft = totalSeconds % 60;

    timerElement.textContent = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

    if (totalSeconds % 60 === 0 && totalSeconds !== 0) {
      alert(`На одну минуту стало меньше!`);
    }

    totalSeconds--;

    if (totalSeconds < 0) {
      clearInterval(interval);
      timerElement.textContent = 'Время вышло!';

    }

  }, 1000);
}

// Start the countdown with 5 minutes
startCountdown(5);