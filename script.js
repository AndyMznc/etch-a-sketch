const app = document.querySelector("#main");

const createSquare = () => {
  const square = document.createElement("div");
  square.style.cssText = "width: 10px; height: 10px; border: solid black 1px";
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
