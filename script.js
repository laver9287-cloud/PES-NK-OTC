const timers = document.querySelectorAll(".timer");

timers.forEach(timer => {
  let time = parseInt(timer.getAttribute("data-time"));

  const interval = setInterval(() => {
    time--;
    timer.textContent = time;

    if (time <= 0) {
      timer.textContent = "Expired";
      clearInterval(interval);
    }
  }, 1000);
});