/*
function toggle() {
  let button = document.querySelector(".button");
  let extraText = document.querySelector("#extra");

  if (button.textContent == "More") {
    extraText.style.display = "block";
    button.textContent = "Less";
  } else {
    extraText.style.display = "none";
    button.textContent = "More";
  }
}

*/
function toggle() {
    let buttonElement = document.querySelector("span.button");
    let extraTextElement = document.querySelector("#extra");

    if (buttonElement.textContent === "More") {
        extraTextElement.style.display = "block";
        buttonElement.textContent = "Less";
    } else {
        extraTextElement.style.display = "none";
        buttonElement.textContent = "More";
    }
}
