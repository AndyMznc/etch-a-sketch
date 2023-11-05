const app = document.querySelector("#main");

const createSquare = () => {
  const square = document.createElement("div");
  square.style.cssText = "border: solid black 1px";
  square.className = "square";
  return square;
};

const WebPage = () => {
  for (let rows = 0; rows < 16; rows++) {
    for (let columns = 0; columns < 16; columns++) {
      app.appendChild(createSquare());
    }
  }
};
WebPage();

const squares = document.querySelectorAll(".square");

const drawOnHover = () => {
  Array.from(squares).forEach((square) => {
    square.addEventListener("mouseover", function (event) {
      console.log(event);
      event.target.style.backgroundColor = "orange";
    });
  });
};
drawOnHover();
