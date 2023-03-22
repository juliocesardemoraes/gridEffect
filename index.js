const colors = ["#DD2D4A", "#313638", "#E4B363", "#E8E9EB", "#399E5A"];
const lastPos = null;

let size = document.body.clientWidth > 800 ? 100 : 250;
let rows = Math.floor(document.body.clientWidth / size);
let columns = Math.floor(document.body.clientHeight / size);

window.onresize = () => {
  size = document.body.clientWidth > 800 ? 100 : 250;
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);
  createGrid();
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let count = -1;

const handleOnClick = (index) => {
  count++;
  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createEachTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.addEventListener("click", () => handleOnClick(index));
  return tile;
};

const createTiles = (quantity, grid) => {
  for (let i = 0; i < quantity; i++) grid.appendChild(createEachTile(i));
};

const createGrid = () => {
  const grid = document.getElementById("grid__tiles");
  grid.innerHTML = "";

  document.body.style.setProperty("--gridsize", columns * rows);
  document.body.style.setProperty("--columns", columns);
  document.body.style.setProperty("--rows", rows);

  createTiles(rows * columns, grid);
};

createGrid();
