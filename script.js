const app = document.querySelector(".app");
const settings = document.querySelector(".settings");

function createSquare() {
  const square = document.createElement("div");
  square.style.cssText = "border: solid black 1px";
  square.className = "square";
  return square;
}

function WebPage() {
  for (let rows = 0; rows < 16; rows++) {
    for (let columns = 0; columns < 16; columns++) {
      app.style.cssText =
        "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);";
      app.appendChild(createSquare());
    }
  }
}
WebPage();

function drawOnHover() {
  const squares = document.querySelectorAll(".square");
  Array.from(squares).forEach(function (square) {
    square.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "orange";
    });
  });
}
drawOnHover();

const settingsBtn = document.createElement("div");
settingsBtn.textContent = "⚙️ Settings";
settings.appendChild(settingsBtn);

settings.addEventListener("click", function (event) {
  const maxSquare = 100;
  const squaresPromptNumber = prompt(
    `How many squares do you want horizontally and vertically? Maximum : ${maxSquare}.`,
    16
  );

  if (!isNaN(squaresPromptNumber) && squaresPromptNumber < maxSquare) {
    while (app.firstChild) {
      app.removeChild(app.firstChild);
    }

    for (let rows = 0; rows < squaresPromptNumber; rows++) {
      for (let columns = 0; columns < squaresPromptNumber; columns++) {
        app.style = "";
        app.style.cssText = `display: grid; grid-template-columns: repeat(${squaresPromptNumber}, 1fr); grid-template-rows: repeat(${squaresPromptNumber}, 1fr);`;
        app.appendChild(createSquare());
      }
    }

    drawOnHover();
  } else {
    alert("You do not specify a number or value less than 100. Try again.");
  }
});
