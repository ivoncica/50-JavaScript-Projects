const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const strokes = document.querySelectorAll(".stroke");
let currentActive = 0;

function buttonsChange() {
  if (currentActive === 0) {
    prev.classList.remove("active");
    prev.setAttribute("disabled", "");
  } else if (currentActive === 3) {
    next.classList.remove("active");
    next.setAttribute("disabled", "");
  } else {
    prev.classList.add("active");
    prev.removeAttribute("disabled");
    next.classList.add("active");
    next.removeAttribute("disabled");
  }
}

function addCircle() {
  circles[currentActive].classList.add("active");
  strokes[currentActive - 1].classList.add("active");
}
function removeCircle() {
  circles[currentActive + 1].classList.remove("active");
  strokes[currentActive].classList.remove("active");
}

next.addEventListener("click", () => {
  if (currentActive < 3) {
    currentActive++;
    console.log(currentActive);
  }
  addCircle();
  buttonsChange();
});
prev.addEventListener("click", () => {
  if (currentActive > 0) {
    currentActive--;
    console.log(currentActive);
  }
  removeCircle();
  buttonsChange();
});
