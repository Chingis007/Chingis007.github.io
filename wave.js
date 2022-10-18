let textCount = 0
simplePhrases=["Happy birthday","Have a lovely day","cool bitch"]
bigPhrases=["Sonya","cool bitch","and " ]
let count = -1;
const colors = [
    "rgb(229,57,53)",
    "rgb(253,216,53)",
    "rgb(244,81,30)",
    "rgb(76,175,80)",
    "rgb(33,150,243)",
    "rgb(156,39,176)"
]
const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
  toggled = !toggled;
  
  document.body.classList.toggle("toggled");
}

const handleOnClick = index => {
  toggle();
  document.getElementById("smallt").innerText = simplePhrases[textCount];
  document.getElementById("bigt").innerText = bigPhrases[textCount];
  textCount += 1
  anime({
    targets: ".tile",
    // backgroundColor: colors[count % (colors.length - 1)],
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  });
}

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  tile.style.opacity = toggled ? 0 : 1;
  
  tile.onclick = e => handleOnClick(index);
  
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper.innerHTML = "";
  
  const size = document.body.clientWidth > 800 ? 100 : 50;
  
  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);
  
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);
  
  createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();