const searchButton = document.getElementById("search");
const input = document.getElementById("input");

function showHideInput() {
  if (input.classList == "input") {
    input.classList = "input hidden";
  } else {
    input.classList = "input";
  }
}

searchButton.addEventListener("click", showHideInput);
