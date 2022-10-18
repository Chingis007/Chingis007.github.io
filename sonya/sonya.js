let textCount = 0
simplePhrases=["Happy birthday","b","g","d","Send you biggest hug"]
bigPhrases=["Sonya","","and " ]
let count = -1;

const congratMusic = new Audio("/music/привітання.ogg");

function playmusic(){
  congratMusic.play()
}
const colors = [
    "rgb(229,57,53)",
    "rgb(253,216,53)",
    "rgb(76,175,80)",
    "rgb(227, 158, 193)",
    "rgb(33,150,243)",
    "rgb(156,39,176)"
]

let columns = 0,
    rows = 0,
    toggled = false;

const toggle = () => {
    toggled = !toggled;
    
    document.body.classList.toggle("toggled");
  }

const wrapper = document.getElementById("tiles");

const handleOnClick = index => {
    count += 1
    if (textCount == 0){
      toggle();
        document.getElementById("clickMe").remove()
    }
    if (textCount == 1){
      toggle();
      document.getElementById("smallt").innerText = "Бажаю вдачі,";
      document.getElementById("bigt").innerText = "strong кохання,";
    }
    if (textCount == 2){
        document.getElementById("smallt").innerText = "";
        document.getElementById("bigt").innerText = "";
        document.getElementsByClassName("right")[0].classList.remove("animateLeft")
        document.getElementsByClassName("left")[0].classList.remove("animateRight")
        document.getElementById("textleft").classList.remove("visible")
        document.getElementById("textright").classList.remove("visible")
    }
    if (textCount == 2){  
        document.getElementById("title").style.width = "100vw"
        document.getElementById("smallt").innerText = "Ціль світлу мати й досягать її бажання";
        document.getElementById("bigt").innerText = "";
        document.getElementById("title").classList.remove("centered")
        document.getElementById("title").classList.add("leftMid")
    }
    
    if (textCount == 3){
      toggle();
      document.getElementById("title").style.width = "50vw"
      document.getElementById("smallt").innerText = "";
      document.getElementById("bigt").innerText = "";
      document.getElementsByClassName("right")[0].classList.add("animateLeft")
      document.getElementsByClassName("left")[0].classList.add("animateRight")
      document.getElementById("textleft").classList.add("visible")
      document.getElementById("textright").classList.add("visible")
  }
    if (textCount == 4){
        toggle();
        document.getElementsByClassName("right")[0].remove()
        document.getElementsByClassName("left")[0].remove()
        document.getElementById("textleft").remove()
        document.getElementById("textright").remove()
        document.getElementById("smallt").innerText = "А головне шоб dick";
        document.getElementById("bigt").innerText = "стояв";
        document.getElementById("smalltt").innerText = "Та сердце";
        document.getElementById("bigtt").innerText = "билось";
        document.getElementById("title").classList.remove("leftMid")
        document.getElementById("title").classList.add("LeftTop")
    }
    if (textCount == 5){
        document.getElementById("smalltt").innerText = "";
        document.getElementById("bigtt").innerText = "";
        document.getElementById("musDiv").style.visibility = "visible";
        document.getElementById("musDiv").style.position = "static";
        document.getElementById("musDiv").style.top = "";
        document.getElementById("musDiv").style.left = "";
        document.getElementById("banana-left").classList.add("visible1")
        document.getElementById("banana-right").classList.add("visible1")
        document.getElementById("smallt").innerText = "Sending you the biggest hug";
        document.getElementById("bigt").innerText = "EVER";
        document.getElementById("title").classList.remove("rightTop")
        document.getElementById("title").classList.add("centered")
        document.getElementById("gift").style.visibility = "visible";
        document.getElementById("musDiv").classList.add("visible1")
    }
    if (textCount == 6){toggle();
      document.getElementById("banana-left").remove()
      document.getElementById("banana-right").remove()
      document.getElementById("gift").remove()
      document.getElementById("musDiv").remove()}
    if (textCount == 7){
      toggle();
      document.getElementById("smallt").innerText = "THE END";
      document.getElementById("bigt").innerText = "";
    }

    if (textCount == 8){
      document.getElementById("smallt").innerText = "";
      document.getElementById("bigt").innerText = "";
    }
    textCount += 1
    anime({
      targets: ".tile",
      backgroundColor: colors[count % (colors.length - 1)],
    //   opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    });
  }





const createTile = index => {
    const tile = document.createElement("div");
    
    tile.classList.add("tile");
    
    
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