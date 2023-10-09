const countdown = document.querySelector("p");

let count = 0;

const timer = setInterval(function () {
  count++;
  countdown.innerText = count + "%";
  if (count === 100) {
    clearInterval(timer);
  }
}, 43);
