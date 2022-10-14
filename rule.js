//tower parametres
let towers = document.querySelectorAll(".towerDropDiv");
let life = 20;
let topp  = 6;
let left = 1;
var imgId = 0;
let about = 0;
let towerSelling;
let stunImgId = 0;
let dropRadius;
let stopimgId = 0;
document.getElementById("розлитиПиво").addEventListener("click",pivoSpell)


let grassTile = document.querySelectorAll(".towerDropDiv")
for(let i=0; i< grassTile.length; i++) {
    grassTile[i].addEventListener("dragover",allowDrop)
    grassTile[i].addEventListener("drop",drop)
}
let dirtTile = document.querySelectorAll(".spellDropDiv")
for(let i=0; i<dirtTile.length; i++) {
    dirtTile[i].addEventListener("dragover",allowdropSpell)
    dirtTile[i].addEventListener("drop",dropSpell)
}  

let towerimg = document.querySelectorAll(".towerimg")
for(let i=0; i<towerimg.length; i++) {
    towerimg[i].addEventListener("dragstart",drag)
    towerimg[i].addEventListener("dragend",dragEnd)
    towerimg[i].addEventListener("mouseover",displayStats)
    towerimg[i].addEventListener("mouseout",hideRadius)
} 
// Waves:
let allWaves = [
{name:"Філянін", amount:"3"},
{name:"Сторожилова", amount:"2"},
{name:"Розен", amount:"1"},
{name:"Куліш", amount:"4"},
// {name:"Калінчик", amount:"2"},
// {name:"Дубровська", amount:"2"},
// {name:"Босак", amount:"3"},
{name:"Філянін", amount:"5"},
{name:"Філянін", amount:"5"},
{name:"Філянін", amount:"5"},
{name:"Філянін", amount:"5"},
{name:"Філянін", amount:"5"},
{name:"Філянін", amount:"5"},
{name:"Філянін", amount:"6"},
{name:"Філянін", amount:"7"},
]


//starting parametres of wave
waveCount = 0
var hpBarId = "bar0";
let panelCount = 0;
//all audio to play
const lifeLoss = new Audio('music/ненавижуигру.mp3');
const NotEnoughtGold = new Audio("music/NyznoZoloto.mp3");
const backgroundMusic = new Audio("music/backmusic.mp3");
backgroundMusic.loop=true;
//div for radius
let radDiv = document.getElementById('radDiv');

    //mob parametres
    mob1 = document.getElementById('Куліш');
    mob1.setAttribute('name', 'Куліш');
    mob1.setAttribute('cost', 5);
    mob1.setAttribute('life',10);
    mob1.setAttribute('speed',1);
    mob1.setAttribute('special',"Силою смороду сповільнює ближні башти");

    mob2 = document.getElementById('Сторожилова');
    mob2.setAttribute('name', 'Сторожилова');
    mob2.setAttribute('cost', 5);
    mob2.setAttribute('life',10);
    mob2.setAttribute('speed',1);
    mob2.setAttribute('special',"Силою дсту зменьшує отриманий урон навколишніх вчителів");

    mob3 = document.getElementById('Розен');
    mob3.setAttribute('name', 'Розен');
    mob3.setAttribute('cost', 5);
    mob3.setAttribute('life',30);
    mob3.setAttribute('speed',0.5);
    mob3.setAttribute('special',"Повільний але потужний");

    mob4 = document.getElementById('Філянін');
    mob4.setAttribute('name', 'Філянін');
    mob4.setAttribute('cost', 3);
    mob4.setAttribute('life',5);
    mob4.setAttribute('speed',3);
    mob4.setAttribute('special',"Слабий проте дуже прудкий");

    mob5 = document.getElementById('Калінчик');
    mob5.setAttribute('name', 'Калінчик');
    mob5.setAttribute('cost', 5);
    mob5.setAttribute('life',10);
    mob5.setAttribute('speed',1);
    mob5.setAttribute('special',"При першому пошкодженні стає невидимим на 7с");

    mob6 = document.getElementById('Дубровська');
    mob6.setAttribute('name', 'Дубровська');
    mob6.setAttribute('cost', 5);
    mob6.setAttribute('life',10);
    mob6.setAttribute('speed',1);
    mob6.setAttribute('radius',200);
    mob6.setAttribute('power',2);
    mob6.setAttribute('special',"Лікує вчителів поблизу кожних 5с");

    mob7 = document.getElementById('Босак');
    mob7.setAttribute('name', 'Босак');
    mob7.setAttribute('cost',6);
    mob7.setAttribute('life',9);
    mob7.setAttribute('speed',1);
    mob7.setAttribute('special',"При смерті породжує трьох дітей з сумарнимими Оз як у носія");

    mob8 = document.getElementById('kid');
    mob8.setAttribute('name', 'kid');
    mob8.setAttribute('cost',2);
    mob8.setAttribute('life',6);
    mob8.setAttribute('speed',1);
    mob8.setAttribute('special',"Босаченятко");

    //tower parametres
    tower1 = document.getElementById('кузь');
    tower1.setAttribute('radius',1);
    tower1.setAttribute('damage', 1);
    tower1.setAttribute('fireRate', 1);
    tower1.setAttribute('name', 'Євгеній');
    tower1.setAttribute('cost', 100);
    tower1.setAttribute('special', "Solar panel power +5");
    
    tower2 = document.getElementById('мінченко');
    tower2.setAttribute('radius',2);
    tower2.setAttribute('damage', 2);
    tower2.setAttribute('fireRate', 2);
    tower2.setAttribute('name', 'Констянтин');
    tower2.setAttribute('cost', 100);
    tower2.setAttribute('special', "none");
    
    tower3 = document.getElementById('мороз');
    tower3.setAttribute('radius',1);
    tower3.setAttribute('damage', 0.5);
    tower3.setAttribute('fireRate', 0.5);
    tower3.setAttribute('name', 'Андрій');
    tower3.setAttribute('cost', 100);
    tower3.setAttribute('special', "none");
    
    tower4 = document.getElementById('колесніков');
    tower4.setAttribute('radius',1);
    tower4.setAttribute('damage', 1);
    tower4.setAttribute('fireRate', 1);
    tower4.setAttribute('name', 'Михайло');
    tower4.setAttribute('cost', 100);
    tower4.setAttribute('special', "none");

    tower5 = document.getElementById('сергієнко');
    tower5.setAttribute('radius',1);
    tower5.setAttribute('damage', 1);
    tower5.setAttribute('fireRate', 1);
    tower5.setAttribute('name', 'Владислав');
    tower5.setAttribute('cost', 100);
    tower5.setAttribute('special', "stun target for 0.25s");

    tower6 = document.getElementById('маламан');
    tower6.setAttribute('radius',1);
    tower6.setAttribute('damage', 1);
    tower6.setAttribute('fireRate', 1);
    tower6.setAttribute('name', 'Дімітрій');
    tower6.setAttribute('cost', 100);
    tower6.setAttribute('special', "none");

    tower7 = document.getElementById('лівіщенко');
    tower7.setAttribute('radius',1);
    tower7.setAttribute('damage', 1);
    tower7.setAttribute('fireRate', 1);
    tower7.setAttribute('name', 'Дмитро');
    tower7.setAttribute('cost', 100);
    tower7.setAttribute('special', "none");

    tower8 = document.getElementById('караульний');
    tower8.setAttribute('radius',1);
    tower8.setAttribute('damage', 0);
    tower8.setAttribute('fireRate', 10);
    tower8.setAttribute('name', 'Кирило');
    tower8.setAttribute('cost', 100);
    tower8.setAttribute('special', "30% dmg boost for 5 sec(not stackable)");

    tower9 = document.getElementById('петровський');
    tower9.setAttribute('radius',1);
    tower9.setAttribute('damage', 1);
    tower9.setAttribute('fireRate', 1);
    tower9.setAttribute('name', 'Орест');
    tower9.setAttribute('cost', 100);
    tower9.setAttribute('special', "none");

    //spells parametres
    spell1 = document.getElementById('розлитиПиво');
    spell1.setAttribute('name', 'Розлити пиво');
    spell1.setAttribute('cost', 50);
    spell1.setAttribute('power',100);
    spell1.setAttribute('radius',1);
    spell1.setAttribute('special',"Вороги зупиняються на двох обраних блоках впродовж 4сек");

    spell2 = document.getElementById('панель');
    spell2.setAttribute('name', 'Спиздити панель');
    spell2.setAttribute('cost', 50);
    spell2.setAttribute('power',5);
    spell2.setAttribute('special',"На початку нової хвилі ви отримуєте 5 золота (можна продати за золото)");
    
    spell3= document.getElementById('автомат');
    spell3.setAttribute('name', 'Пішов у армію');
    spell3.setAttribute('cost', 50);
    spell3.setAttribute('power',100);
    spell3.setAttribute('special',"Обрана вежа відправляється у армію, сила волі решти башен збільшується на 10%, ефект сумується");
    

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
};
async function nextText(){
    document.getElementById("nextText").remove();
    document.getElementById("pre1").style.opacity = 0;
    await sleep(500);
    document.getElementById("pre1").remove();
    document.getElementById("pre2").style.opacity = 1;
    document.getElementById("startGame").style.opacity = 1;
}
function startGame(){
    document.getElementById("blackDiv").remove();
    // backgroundMusic.play();
}
async function aboutUnits(){
    div2 =  document.getElementById("settings");
    div1 =  document.getElementById("info");
    if (about == 0){
        return
    }
    if (about == 1 ){
        document.getElementById("aboutUnits").classList.add("disabled")
        document.getElementById("settingsDiv").classList.add("disabled")
        about = 0;
        div2.style.width = "0%";
        div1.style.width = "50%";
        await sleep(1100)
        document.getElementById("settingsDiv").classList.remove("disabled")
        document.getElementById("aboutUnits").classList.remove("disabled")
        return
    }
}
async function settings(){   
    div2 =  document.getElementById("settings");
    div1 =  document.getElementById("info");
    if (about == 0){
        document.getElementById("aboutUnits").classList.add("disabled")
        document.getElementById("settingsDiv").classList.add("disabled")
        about = 1;
        div2.style.width = "50%";
        div1.style.width = "0%";
        await sleep(1100)
        document.getElementById("aboutUnits").classList.remove("disabled")
        document.getElementById("settingsDiv").classList.remove("disabled")
        return
    }
    if (about == 1 ){
        return
    }
}
function audioPausePlay() {
    music = document.getElementById("music")
    backgroundMusic.paused ? backgroundMusic.play() : backgroundMusic.pause();
    backgroundMusic.paused ? music.setAttribute("src","pictures/music.jpg") : music.setAttribute("src","pictures/musicoff.png");
}
async function spinbiden(){
    document.getElementById("bidenDiv").classList.add("spinning")
    await sleep(3000)
    document.getElementById("bidenDiv").classList.add("fading")
    await sleep(8000)
    document.getElementById("bidenDiv").classList.remove("spinning")
    document.getElementById("bidenDiv").classList.remove("fading")
}
function addMoney(){
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText = Number(money) + Number(1000); 
}
function addMana(){
    mana = document.getElementById("mana").innerText;
    document.getElementById("mana").innerText = Number(mana) + Number(1000); 
}



  
async function healReload(picture){
    picture.setAttribute('healReloading', 1);
    await sleep(7000);
    picture.setAttribute('ready', 1);
    picture.setAttribute('healReloading', 0);
};
async function reloadFunction(ftd,i,fireRate){
    fireRate *= 1000;
    await sleep(fireRate);
    ftd[i].setAttribute('ready' , 1);
};
async function declarationReloadFunction(tower,fireRate){
    fireRate *= 1000;
    await sleep(fireRate);
    tower.setAttribute('ready' , 1);
};


function nextWave(){
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText =
    Number(money) + Number(panelCount*document.getElementById("панель").getAttribute("power"));

    unit = document.getElementById("p24");
    amount = document.getElementById("p25");
    skill = document.getElementById("p26");;
    let mobName = (allWaves[waveCount].name)
    let mobQuantity = (allWaves[waveCount].amount)
    let waitTime = 1000;
    runMob(mobName,mobQuantity,waitTime)
    unit.innerText = "Unit: "+mobName;
    amount.innerText = "Amount: "+mobQuantity;
    skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    waveCount += 1;
}

async function runMob(mobName,mobQuantity,waitTime){    
    for(var i = 0; i < mobQuantity; i++){
        moveByPath(mobName);
        await sleep(waitTime);
    }
};
function moveByPath(mobName) {
    let hpBar = document.createElement("hpBar");
    hpBar.style.width = "2.2vw";
    hpBar.style.height = "0.3vh"; 
    hpBar.style.display = "block";
    hpBar.style.position = "absolute";
    hpBar.style.padding = "0";
    hpBar.style.zIndex = "5";
    hpBar.style.backgroundColor = "red";
    hpBar.style.top = topp + "vh"; 
    hpBar.style.left = left + "vw";
    hpBar.setAttribute('id' , hpBarId);
    hpBarId = hpBarId[0]+hpBarId[1]+hpBarId[2]+(Number(hpBarId.slice(3)) + 1);
    document.getElementById('mainTable').appendChild(hpBar);


    let img = document.createElement("img");
    img.src = "pictures/" + mobName + ".jpg";
    img.classList.add("mobOnField");
    
    img.style.width = "2.2vw";
    img.style.opacity = "1";
    img.style.height = "4.5vh";
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.padding = "0";
    img.style.zIndex = "4";
    img.style.top = topp + "vh"; 
    img.style.left = left + "vw";
    img.setAttribute("stunned",0)
    img.setAttribute("stopped",0)
    img.setAttribute("finished",0);
    img.addEventListener("animationend",function(){setfinish(img)})
    document.getElementById('mainTable').appendChild(img);
    mobType = document.getElementById(mobName);
    if (mobName == "Дубровська"){
        img.setAttribute('radius', mobType.getAttribute("radius") )
    }
    life = mobType.getAttribute("life");
    cost = mobType.getAttribute("cost");
    img.setAttribute('life' , life);
    img.setAttribute("name", mobName)
    img.setAttribute('id' , imgId);
    imgId += 1;
    if (mobName == "Куліш"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
    if (mobName == "Сторожилова"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
    if (mobName == "Розен"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
    if (mobName == "Філянін"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
    if (mobName == "Калінчик"){
        changeCoordКалінчик(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
    if (mobName == "Дубровська"){
        changeCoordДубровська(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
    if (mobName == "Босак"){
        changeCoordБосак(img,topp,left,hpBar,cost,mobName);
        animateOne(img,hpBar,cost,mobName);
    }
};
function setfinish(img){
    img.setAttribute("finished",1);
};
function animateOne(img,hpBar,cost,mobName){
    img.classList.add("mainAnimation")
    hpBar.classList.add("mainAnimation")
};
async function changeCoord(pict,up,onleft,hpBar,cost,mobName){
    let times = 2000;
    for(var i = 0; i < times; i++){
    let life = pict.getAttribute('life');
    if (life <= 0) {
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText = Number(money) + Number(cost); 
    let allStunImg = document.querySelectorAll('img[iAmStunPicture]');
    console.log(allStunImg)
    for(var b = 0; b < allStunImg; b++){
        demandedId = allStunImg[b].getAttribute("id")
        console.log("demandedId ", demandedId)
        if (document.querySelectorAll('img['+demandedId+']').length){}
        else{console.log("demandedId pict remove ", demandedId)
        allStunImg[b].remove()}
    }
    if (document.getElementById(pict.getAttribute("stunImgId"))){
        document.getElementById(pict.getAttribute("stunImgId")).remove()
    }
    if (document.getElementById(pict.getAttribute("stopImgId"))){
        document.getElementById(pict.getAttribute("stopImgId")).remove()
    }
    pict.remove();
    hpBar.remove();
    return
    };   
    if (pict.getAttribute("finished") == 1){
    if (document.getElementById(pict.getAttribute("stunImgId"))){
        document.getElementById(pict.getAttribute("stunImgId")).remove()
    }
    if (document.getElementById(pict.getAttribute("stopImgId"))){
        document.getElementById(pict.getAttribute("stopImgId")).remove()
    }
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
    return
    }
    // up += 0;
    // onleft += 0.2;;
    // hpBar.style.top = up + "vh"; 
    // hpBar.style.left = onleft + "vw";
    // pict.style.top = up + "vh"; 
    // pict.style.left = onleft + "vw";
    frameAction(pict,hpBar,mobName);
    await sleep(50);
    };


};
async function changeCoordКалінчик(pict,up,onleft,hpBar,cost,mobName){
    pict.setAttribute("invisible", 0);
    pict.setAttribute("invisibleDone", 0);
    let times = 2000;
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
        let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText = Number(money) + Number(cost);
    if (document.getElementById(pict.getAttribute("stunImgId"))){
        document.getElementById(pict.getAttribute("stunImgId")).remove()
    }
    if (document.getElementById(pict.getAttribute("stopImgId"))){
        document.getElementById(pict.getAttribute("stopImgId")).remove()
    } 
    pict.remove();
    hpBar.remove();
    return
    };  
    if (pict.getAttribute("finished") == 1){
    if (document.getElementById(pict.getAttribute("stunImgId"))){
        document.getElementById(pict.getAttribute("stunImgId")).remove()
    }
    if (document.getElementById(pict.getAttribute("stopImgId"))){
        document.getElementById(pict.getAttribute("stopImgId")).remove()
    } 
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
    return
    } 
    if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
        getInvisibility(pict);
    };
    // up += 0;
    // onleft += 0.2;;
    // hpBar.style.top = up + "vh"; 
    // hpBar.style.left = onleft + "vw";
    // pict.style.top = up + "vh"; 
    // pict.style.left = onleft + "vw";
    if (invisible == 0){
        frameAction(pict,hpBar,mobName);;
    }
    await sleep(50);
    };  
};
async function changeCoordДубровська(pict,up,onleft,hpBar,cost,mobName){
    pict.setAttribute('ready', 0);
    pict.setAttribute('healReloading', 0);
    let times = 2000;
    for(var i = 0; i < times; i++){
    let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost); 
        pict.remove();
        hpBar.remove();
        if (document.getElementById(pict.getAttribute("stunImgId"))){
            document.getElementById(pict.getAttribute("stunImgId")).remove()
        }
        if (document.getElementById(pict.getAttribute("stopImgId"))){
            document.getElementById(pict.getAttribute("stopImgId")).remove()
        }
        return
        }; 
    if (pict.getAttribute("finished") == 1){
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
    return
    }; 
    // up += 0;
    // onleft += 0.2;;
    // hpBar.style.top = up + "vh"; 
    // hpBar.style.left = onleft + "vw";
    // pict.style.top = up + "vh"; 
    // pict.style.left = onleft + "vw";
    frameAction(pict,hpBar,mobName);;
    HealframeAction(pict);
    await sleep(50);
    };  
};
async function changeCoordБосак(pict,up,onleft,hpBar,cost,mobName){
    let lifeLossedCounter = 0;
    let times = 2000;
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
    money = document.getElementById("money").innerText;
    if (lifeLossedCounter == 3){ 
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText = Number(money) + Number(cost); 
    pict.remove();
    hpBar.remove();
    return
    }
    if (lifeLossedCounter == 2){
    lifeLossedCounter = 3
    hpBar.style.width = "3vw" 
    pict.setAttribute("life", document.getElementById(mobName).getAttribute("life"))
    pict.setAttribute("src","pictures/kid3.jpg")
    document.getElementById("money").innerText = Number(money) + Number(cost);
    }
    if (lifeLossedCounter == 1){
    lifeLossedCounter = 2 
    hpBar.style.width = "3vw" 
    pict.setAttribute("life", document.getElementById(mobName).getAttribute("life"))
    pict.setAttribute("src","pictures/kid2.jpg")
    document.getElementById("money").innerText = Number(money) + Number(cost);
    }
    if (lifeLossedCounter == 0){
    lifeLossedCounter = 1 
    document.getElementById("money").innerText = Number(money) + Number(cost);
    mobName = "kid"
    cost = document.getElementById("kid").getAttribute("cost");
    hpBar.style.width = "3vw"
    pict.setAttribute("life", document.getElementById(mobName).getAttribute("life"))
    pict.setAttribute("src","pictures/kid1.jpg")
    }
    if (pict.getAttribute("finished") == 1){
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
    return
    }; 
    };
    // up += 0;
    // onleft += 0.2;;
    // hpBar.style.top = up + "vh"; 
    // hpBar.style.left = onleft + "vw";
    // pict.style.top = up + "vh"; 
    // pict.style.left = onleft + "vw";
    frameAction(pict,hpBar,mobName);
    await sleep(50);
    };  
};

async function getInvisibility(pict){
    pict.setAttribute("invisible", 1);
    pict.setAttribute("invisibleDone", 1);
    pict.style.opacity = 0.3;
    await sleep(7000);
    pict.style.opacity = 1;
    pict.setAttribute("invisible", 0);
}

function allowdropSpell(ev) {
    ev.preventDefault();
    radDiv.style.visibility = "hidden";
};
function dragSpell(ev) {
let roads = document.querySelectorAll(".spellDropDiv");

ev.dataTransfer.setData("text", ev.target.id);
ev.dataTransfer.setData("cost", ev.target.getAttribute('cost'));
for(let i=0; i<roads.length; i++) {
    roads[i].style.backgroundColor = "rgba(255, 255, 255, 1)";
    roads[i].style.border = "solid rgba(0, 0, 0, 1)";
}
let grass = document.querySelectorAll(".towerDropDiv")
for(let i=0; i<grass.length; i++) {
    grass[i].removeEventListener("dragover",allowDrop)
    grass[i].removeEventListener("drop",drop)
}
};
function SpellDragEnd(ev){
    let roads = document.querySelectorAll(".spellDropDiv");
for(let i=0; i<roads.length; i++) {
    roads[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
    roads[i].style.border = "solid rgba(0, 0, 0, 0)";
}
let grass = document.querySelectorAll(".towerDropDiv")
for(let i=0; i<grass.length; i++) {
    grass[i].addEventListener("dragover",allowDrop)
    grass[i].addEventListener("drop",drop)
}
radDiv.style.visibility = "hidden";
}
async function dropSpell(ev) {
    ev.preventDefault();
    let cost = ev.dataTransfer.getData("cost");
    let dropEventId = ev.dataTransfer.getData("text");
    let clone = document.getElementById(dropEventId).cloneNode(true);
    clone.src = "pictures/лужа.png"
    if (Number(document.getElementById("mana").innerText) < Number(cost)){
        NotEnoughtGold.play();
        return
        }
    if (Number(document.getElementById("mana").innerText) >= Number(cost)){
        ev.target.append(clone);
        clone.setAttribute("draggable",false)
        clone.removeAttribute("ondragstart"); 
        clone.removeAttribute("ondragend");
        clone.classList.remove('towerimg');
        clone.classList.remove('spellimg');
        clone.removeAttribute("id");
        clone.classList.add('pixelimg');
        clone.classList.add('dropedTower');
        document.getElementById("mana").innerText -= cost;
    }
};

function allowDrop(ev) {
    ev.preventDefault();
    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "visible"; 
    radDiv.style.width = dropRadius * 10 + "vw";
    radDiv.innerText = "";
    radDiv.style.height = radius * 20.26 + "vh"; 
    topDist = ev.target.getBoundingClientRect().top * (100 / document.documentElement.clientHeight);
    radiusH = radDiv.clientHeight * (100 / document.documentElement.clientHeight)/2;
    squareRadiusH = ev.target.clientHeight * (100 / document.documentElement.clientHeight)/2;

    leftDist = ev.target.getBoundingClientRect().left * (100 / document.documentElement.clientWidth);
    radiusW = radDiv.clientWidth * (100 / document.documentElement.clientWidth)/2;
    squareRadiusW = ev.target.clientWidth * (100 / document.documentElement.clientWidth)/2;

    radDiv.style.top = topDist - radiusH + squareRadiusH + "vh";
    radDiv.style.left = leftDist - radiusW + squareRadiusW + "vw";
};
function drag(ev) {
ev.dataTransfer.setData("text", ev.target.id);
ev.dataTransfer.setData("radius", ev.target.getAttribute('radius'));
dropRadius = ev.target.getAttribute('radius') ;
ev.dataTransfer.setData("fireRate", ev.target.getAttribute('fireRate'));
ev.dataTransfer.setData("damage", ev.target.getAttribute('damage'));
ev.dataTransfer.setData("cost", ev.target.getAttribute('cost'));

grassBacklightOn()
dirtRemoveListener()     
};
async function drop(ev) {
    ev.preventDefault();
    let cost = ev.dataTransfer.getData("cost");
    let dropEventId = ev.dataTransfer.getData("text");
    let clone = document.getElementById(dropEventId).cloneNode(true);
    if (clone.getAttribute("id") == "панель"){
    if (Number(document.getElementById("mana").innerText) < Number(cost)){
    NotEnoughtGold.play();
    return
    }
    if (Number(document.getElementById("mana").innerText) >= Number(cost)){
    panelCount+=1;
    let dropRadius = ev.dataTransfer.getData("radius");
    let fireRate = ev.dataTransfer.getData("fireRate");
    let damage = ev.dataTransfer.getData("damage");

    let clone = document.getElementById(dropEventId).cloneNode(true);
    clone.setAttribute("draggable",false)
    clone.setAttribute("dmgBoost",0)
    clone.removeAttribute("ondragstart"); 
    clone.removeAttribute("ondragend");
    clone.classList.remove('towerimg');
    clone.classList.remove('spellimg');
    clone.removeAttribute("id");
    clone.classList.add('pixelimg');
    clone.classList.add('dropedTower');
    clone.addEventListener("click",towerOption)
    clone.removeEventListener("mouseover",displayStats)
    clone.addEventListener("mouseover",displayDroppedStats)
    clone.addEventListener("mouseout",hideRadius)
    clone.removeEventListener("dragstart",drag)
    clone.removeEventListener("dragend",dragEnd)
    ev.target.append(clone);

    ev.target.classList.add('withTower');

    let rect = clone.getBoundingClientRect();
    let midx = (rect.left + rect.width/2)* 100 / document.documentElement.clientWidth;
    let midy = (rect.top + rect.height/2)* 100 / document.documentElement.clientHeight;

    clone.setAttribute('midx' , midx);
    clone.setAttribute('midy' , midy);
    clone.setAttribute('ready' , 0);
    clone.setAttribute('reloading' , 0);

    declarationReloadFunction(clone,fireRate)

    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "hidden";

    document.getElementById("mana").innerText -= cost;
    return
    }
    }
    if (clone.getAttribute("id") == "автомат"){
        if (!ev.target.classList.contains('towerDropDiv')){
    if (Number(document.getElementById("mana").innerText) < Number(cost)){
        NotEnoughtGold.play();
        return
    }
    if (Number(document.getElementById("mana").innerText) >= Number(cost)){
        document.getElementById("mana").innerText -= cost;
        let ftd = document.getElementsByClassName('dropedTower')
        ev.target.parentNode.classList.remove("withTower")
        ev.target.remove()
        for(let i=0; i<ftd.length; i++) {
        let damage = ftd[i].getAttribute('damage');
        damage = Number(damage * 1.1)
        ftd[i].setAttribute('damage', damage);
        }
        return
    }
        }
        if (ev.target.classList.contains('towerDropDiv')){
            return
        }
    }
    else {
    if (Number(document.getElementById("money").innerText) < Number(cost)){
    NotEnoughtGold.play();
    return
    }
    if (Number(document.getElementById("money").innerText) >= Number(cost)){
    
    let dropRadius = ev.dataTransfer.getData("radius");
    let fireRate = ev.dataTransfer.getData("fireRate");
    let damage = ev.dataTransfer.getData("damage");

    let clone = document.getElementById(dropEventId).cloneNode(true);
    clone.setAttribute("draggable",false)
    clone.setAttribute("dmgBoost",0)
    clone.removeAttribute("ondragstart"); 
    clone.removeAttribute("ondragend");
    clone.classList.remove('towerimg');
    clone.classList.remove('spellimg');
    clone.removeAttribute("id");
    clone.classList.add('pixelimg');
    clone.classList.add('dropedTower');
    clone.addEventListener("click",towerOption)
    clone.removeEventListener("mouseover",displayStats)
    clone.addEventListener("mouseover",displayDroppedStats)
    clone.addEventListener("mouseout",hideRadius)
    clone.removeEventListener("dragstart",drag)
    clone.removeEventListener("dragend",dragEnd)
    ev.target.append(clone);

    ev.target.classList.add('withTower');

    let rect = ev.target.getBoundingClientRect();
    let midx = (rect.left + rect.width/2)* 100 / document.documentElement.clientWidth;
    let midy = (rect.top + rect.height/2)* 100 / document.documentElement.clientHeight;


    clone.setAttribute('midx' , midx);
    clone.setAttribute('midy' , midy);
    clone.setAttribute('ready' , 0);
    clone.setAttribute('reloading' , 0);

    declarationReloadFunction(clone,fireRate)

    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "hidden";
    document.getElementById("money").innerText -= cost;
    }
}
};
function dragEnd(ev){
grassBacklightOff()
dirtAddListener()
radDiv.style.visibility = "hidden";
};

function displayStats(ev){
    radius = ev.target.getAttribute("radius");
    fireRate = ev.target.getAttribute("fireRate");
    damage = ev.target.getAttribute("damage");
    names = ev.target.getAttribute("name");
    cost = ev.target.getAttribute("cost");
    id = ev.target.getAttribute("id");
    special = ev.target.getAttribute("special");

    document.getElementById('imageDiv').innerHTML = "";
    let img = document.createElement("img");
    img.src = ev.target.getAttribute("src");
    img.style.width = "5vw";
    img.style.height = "10vh";
    img.style.display = "block";
    img.style.borderRadius = "1vw";
    img.style.padding = "0";
    img.style.zIndex = "4";
    document.getElementById('p1').innerText = "";
    document.getElementById('p2').innerText = "";
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "";
    document.getElementById('p5').innerText = "";
    document.getElementById('p6').innerText = "";
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    document.getElementById('imageDiv').appendChild(img);
    document.getElementById('p1').innerText = "Cost: " + cost;
    document.getElementById('p2').innerText = "Skill: " + special;
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "Damage: " + damage;
    document.getElementById('p5').innerText = "Reload time: " + fireRate + "sec";
    document.getElementById('p6').innerText = "Radius: " + radius;
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "visible";
    radDiv.style.width = radius * 10 + "vw";
    radDiv.style.height = radius * 20.26 + "vh"; 
    radDiv.style.top = "38.8vh";
    radDiv.style.left = "37.2vw";
    radDiv.innerText = "Radius Comparison";

};
function displayDroppedStats(ev){
    radius = ev.target.getAttribute("radius");
    fireRate = ev.target.getAttribute("fireRate");
    damage = ev.target.getAttribute("damage");
    names = ev.target.getAttribute("name");
    cost = ev.target.getAttribute("cost");
    id = ev.target.getAttribute("id");
    special = ev.target.getAttribute("special");

    document.getElementById('imageDiv').innerHTML = "";
    let img = document.createElement("img");
    img.src = ev.target.getAttribute("src");
    img.style.width = "5vw";
    img.style.height = "10vh";
    img.style.display = "block";
    img.style.borderRadius = "1vw";
    img.style.padding = "0";
    img.style.zIndex = "4";
    document.getElementById('p1').innerText = "";
    document.getElementById('p2').innerText = "";
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "";
    document.getElementById('p5').innerText = "";
    document.getElementById('p6').innerText = "";
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    document.getElementById('imageDiv').appendChild(img);
    document.getElementById('p1').innerText = "Cost: " + cost;
    document.getElementById('p2').innerText = "Skill: " + special;
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "Damage: " + damage;
    document.getElementById('p5').innerText = "Reload time: " + fireRate + "c";
    document.getElementById('p6').innerText = "Radius: " + radius;
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "visible";
    radDiv.style.width = radius * 10 + "vw";
    radDiv.innerText = "";
    radDiv.style.height = radius * 20.26 + "vh";      
    topDist = ev.target.getBoundingClientRect().top * (100 / document.documentElement.clientHeight);
    radiusH = radDiv.clientHeight * (100 / document.documentElement.clientHeight)/2;
    squareRadiusH = ev.target.clientHeight * (100 / document.documentElement.clientHeight)/2;

    leftDist = ev.target.getBoundingClientRect().left * (100 / document.documentElement.clientWidth);
    radiusW = radDiv.clientWidth * (100 / document.documentElement.clientWidth)/2;
    squareRadiusW = ev.target.clientWidth * (100 / document.documentElement.clientWidth)/2;

    radDiv.style.top = topDist - radiusH + squareRadiusH + "vh";
    radDiv.style.left = leftDist - radiusW + squareRadiusW + "vw";
}
function hideRadius(e){
    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "hidden";
    
};
function displayMobStats(ev){
    document.getElementById('imageDiv').innerHTML = ""
    let img = document.createElement("img");
    img.src = ev.target.getAttribute("src");
    img.style.width = "5vw";
    img.style.height = "10vh";
    img.style.display = "block";
    img.style.borderRadius = "1vw";
    img.style.padding = "0";
    img.style.zIndex = "4";
    document.getElementById('imageDiv').appendChild(img);

    names = ev.target.getAttribute("name");
    cost = ev.target.getAttribute("cost");
    life = ev.target.getAttribute("life");
    speed = ev.target.getAttribute("speed");
    special = ev.target.getAttribute("special");
    document.getElementById('p1').innerText = "";
    document.getElementById('p2').innerText = "";
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "";
    document.getElementById('p5').innerText = "";
    document.getElementById('p6').innerText = "";
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    document.getElementById('p1').innerText = "Hp " + life;
    document.getElementById('p2').innerText = "Speed " + speed;
    document.getElementById('p3').innerText = "Value " + cost;
    document.getElementById('p4').innerText = "Skill: " + special;
    document.getElementById('p5').innerText = "";
    document.getElementById('p6').innerText = "";
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";
};
function displaySpellStats(ev){
    document.getElementById('imageDiv').innerHTML = "";
    let img = document.createElement("img");
    img.src = ev.target.getAttribute("src");
    img.style.width = "5vw";
    img.style.height = "10vh";
    img.style.display = "block";
    img.style.borderRadius = "1vw";
    img.style.padding = "0";
    img.style.zIndex = "4";
    document.getElementById('imageDiv').appendChild(img);

    names = ev.target.getAttribute("name");
    cost = ev.target.getAttribute("cost");
    life = ev.target.getAttribute("life");
    radius = ev.target.getAttribute("radius");
    special = ev.target.getAttribute("special");
    document.getElementById('p1').innerText = "";
    document.getElementById('p2').innerText = "";
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "";
    document.getElementById('p5').innerText = "";
    document.getElementById('p6').innerText = "";
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    document.getElementById('p1').innerText = names;
    document.getElementById('p2').innerText = "Energy cost: " + cost;
    document.getElementById('p3').innerText = "";
    document.getElementById('p4').innerText = "Skill: " + special;
    document.getElementById('p5').innerText = "";
    document.getElementById('p6').innerText = "";
};



async function frameAction(picture,hpBar,mobName){
    let rectp = picture.getBoundingClientRect();
    let midpx = rectp.left + rectp.width/2;
    let midpy = rectp.top + rectp.height/2;
    let ftd = document.getElementsByClassName('dropedTower');
    if (picture.getAttribute("stunned") > 0){
        let stunTime = picture.getAttribute("stunned");
        stunTime -= 1;
        picture.setAttribute("stunned",stunTime)
        if (stunTime == 0){
        if (picture.getAttribute("stopped") > 0){}
        else{
        picture.style.animationPlayState = 'running';
        hpBar.style.animationPlayState = 'running'; 
        if (document.getElementById(picture.getAttribute("stunImgId"))){
            document.getElementById(picture.getAttribute("stunImgId")).remove()
        }
        }
        }

    }
    if (picture.getAttribute("stopped") > 0){
        let stopped = picture.getAttribute("stopped");
        stopped -= 1;
        picture.setAttribute("stopped",stopped)
        if (stopped == 0){
        if(picture.getAttribute("stunned") > 0){}
        else{picture.style.animationPlayState = 'running';
        hpBar.style.animationPlayState = 'running';
        if (document.getElementById(picture.getAttribute("stopimgId"))){
            document.getElementById(picture.getAttribute("stopimgId")).remove()
        }
     }
        }
    }
for(let i=0; i<ftd.length; i++) {
if (ftd[i].getAttribute("dmgBoost") != 0){
    let dmgBoostTime = ftd[i].getAttribute("dmgBoost");
    dmgBoostTime -= 1 / document.querySelectorAll(".mobOnField").length ;
    ftd[i].setAttribute("dmgBoost",dmgBoostTime)
    if (dmgBoostTime <= 0){
    ftd[i].classList.remove("glowTower")
    ftd[i].setAttribute("damage", ftd[i].getAttribute("damage")/1.3)
    }
}

let compmidx = ftd[i].getAttribute('midx');
let compmidy = ftd[i].getAttribute('midy');
let radius = ftd[i].getAttribute('radius');
let damage = ftd[i].getAttribute('damage');
let fireRate = ftd[i].getAttribute('fireRate');
let towerName =  ftd[i].getAttribute('name');
compmidx = compmidx * document.documentElement.clientWidth / 100 
compmidy = compmidy * document.documentElement.clientHeight / 100
// let complenght = Math.sqrt((midpx-compmidx)*(midpx-compmidx)+(midpy-compmidy)*(midpy-compmidy));
let axeWidth = radius * 5 * document.documentElement.clientWidth / 100 // після радіуса множник до vw
let axeHeight = radius * 10.14 * document.documentElement.clientHeight / 100
if  (axeWidth>=axeHeight){
    if (((midpx-compmidx)*(midpx-compmidx)/axeWidth/axeWidth + 
    (midpy-compmidy)*(midpy-compmidy)/axeHeight/axeHeight)<= 1){
        let ready = ftd[i].getAttribute('ready');
    if (ready == 1){
        if  (towerName == "Кирило"){
        boostDamage(compmidx,compmidy,ftd,radius)
        ftd[i].setAttribute('ready' , 0);
        reloadFunction(ftd,i,fireRate)
        }
        else{
        bulletFire(compmidx,compmidy,midpx,midpy,towerName)
        ftd[i].setAttribute('ready' , 0);
        reloadFunction(ftd,i,fireRate)
        let life = picture.getAttribute('life');
        // await sleep(500)
        life -= damage;
        picture.setAttribute('life' , life);
        
        if  (towerName == "Владислав"){stunning(picture,hpBar,midpx,midpy)}
        PrimalLife = document.getElementById(mobName).getAttribute("life");
        if (life/PrimalLife < 0.84 && life/PrimalLife >= 0.66){
            hpBar.style.width = "1.8vw";
        } else if(life/PrimalLife < 0.66 && life/PrimalLife >= 0.5) {
            hpBar.style.width = "1.4vw";
        } else if(life/PrimalLife < 0.5 && life/PrimalLife >= 0.33) {
            hpBar.style.width = "1.1vw";
        } else if(life/PrimalLife < 0.33 && life/PrimalLife >= 0.16) {
            hpBar.style.width = "0.73vw";
        } else if (life/PrimalLife < 0.16){
            hpBar.style.width = "0.37vw";
        }
        }
        }
    }
} else if  (axeWidth<axeHeight){
    if (((midpx-compmidx)*(midpx-compmidx)/axeHeight/axeHeight + 
    (midpy-compmidy)*(midpy-compmidy)/axeWidth/axeWidth)<= 1){
    let ready = ftd[i].getAttribute('ready');
        if (ready == 1){
    if  (towerName == "Кирило"){
    boostDamage(compmidx,compmidy,ftd,radius)
    ftd[i].setAttribute('ready' , 0);
    reloadFunction(ftd,i,fireRate)
    }
        else{
    bulletFire(compmidx,compmidy,midpx,midpy,towerName)
    ftd[i].setAttribute('ready' , 0);
    reloadFunction(ftd,i,fireRate)
    let life = picture.getAttribute('life');
    // await sleep(500)
    life -= damage;
    picture.setAttribute('life' , life);
    
    if  (towerName == "Владислав"){stunning(picture,hpBar,midpx,midpy)}
    PrimalLife = document.getElementById(mobName).getAttribute("life");
    if (life/PrimalLife < 0.84 && life/PrimalLife >= 0.66){
        hpBar.style.width = "1.8vw";
    } else if(life/PrimalLife < 0.66 && life/PrimalLife >= 0.5) {
        hpBar.style.width = "1.4vw";
    } else if(life/PrimalLife < 0.5 && life/PrimalLife >= 0.33) {
        hpBar.style.width = "1.1vw";
    } else if(life/PrimalLife < 0.33 && life/PrimalLife >= 0.16) {
        hpBar.style.width = "0.73vw";
    } else if (life/PrimalLife < 0.16){
        hpBar.style.width = "0.37vw";
    }
        }
    } 
        }
} else{}
    };   
};
function boostDamage(compmidx,compmidy,ftd,radius){
    
    for(let i=0; i<ftd.length; i++){
    let compmidxx = ftd[i].getAttribute('midx');
    let compmidyy = ftd[i].getAttribute('midy');
    let axeWidth = radius * 5 * document.documentElement.clientWidth / 100 // після радіуса множник до vw
    let axeHeight = radius * 10.14 * document.documentElement.clientHeight / 100
    compmidxx = compmidxx * document.documentElement.clientWidth / 100 
    compmidyy = compmidyy * document.documentElement.clientHeight / 100
    if  (axeWidth>=axeHeight){
    if (((compmidxx-compmidx)*(compmidxx-compmidx)/axeWidth/axeWidth + 
    (compmidyy-compmidy)*(compmidyy-compmidy)/axeHeight/axeHeight)<= 1){

    ftd[i].setAttribute("dmgBoost",100)
    ftd[i].setAttribute("damage",ftd[i].getAttribute("damage")*1.3)
    ftd[i].classList.add("glowTower") 

        }
    }else if  (axeWidth<axeHeight){
    if (((compmidxx-compmidx)*(compmidxx-compmidx)/axeHeight/axeHeight + 
    (compmidyy-compmidy)*(compmidyy-compmidy)/axeWidth/axeWidth)<= 1){
        ftd[i].setAttribute("dmgBoost",100)
        ftd[i].setAttribute("damage",ftd[i].getAttribute("damage")*1.3)
        ftd[i].classList.add("glowTower") 

    }
        }
    }
}

async function bulletFire(compmidx,compmidy,midpx,midpy,towerName){
    let xstep = (midpx-compmidx)/20
    let ystep = (midpy-compmidy)/20
    let dodx = 0;
    let dody = 0;
    let img = document.createElement("img");
    if (towerName == "Євгеній"){
    img.src = "pictures/бургер.png";
    }
    if (towerName == "Андрій"){
        img.src = "pictures/бургер.png";
    }
    if (towerName == "Дімітрій"){
        img.src = "pictures/каблук.png";
        img.classList.add("rotateBullet")
    }
    img.style.width = "1.5vw";
    img.style.opacity = "1";
    img.style.height = "3vh";
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.padding = "0";
    img.style.zIndex = "6";
    img.style.top = Number(compmidy * (100 / document.documentElement.clientHeight)) - 1 + "vh"; 
    img.style.left = Number(compmidx * (100 / document.documentElement.clientWidth)) - 0.5 + "vw";
    document.getElementById('body').appendChild(img);
    for(let i=0; i<20; i++){
        dodx += xstep;
        dody += ystep;
        img.style.left = Number(Number(Number(compmidx) + Number(dodx)) * (100 / document.documentElement.clientWidth)) - 0.5 + "vw";
        img.style.top =  Number(Number(Number(compmidy) + Number(dody)) * (100 / document.documentElement.clientHeight)) - 1 + "vh"; 
        await sleep(25)
    }
    img.remove();
    
};

function HealframeAction(picture){
    let ready = picture.getAttribute('ready');
    let healReloading = picture.getAttribute('healReloading');
    if (ready == 0 && healReloading == 0){
        healReload(picture)
    }

    if (ready == 1){
picture.setAttribute('ready', 0);
let rectp = picture.getBoundingClientRect();
let midpx = rectp.left + rectp.width/2;
let midpy = rectp.top + rectp.height/2;
let ftd = document.getElementsByClassName('mobOnField');
let radius = picture.getAttribute('radius');
let healList =[];
for(let i=0; i<ftd.length; i++) {
    bounders = ftd[i].getBoundingClientRect();
let compmidx = bounders.left + ftd[i].width/2;
let compmidy = bounders.top + ftd[i].height/2;
let complenght = Math.sqrt((midpx-compmidx)*(midpx-compmidx)+(midpy-compmidy)*(midpy-compmidy));
    if (complenght <= radius) {
        healList.push(ftd[i]);
        };
};
    if (!healList.length == 0){
    let healDiv = document.createElement("healDiv");
    healDiv.style.width = "20vw";
    healDiv.style.height =  "40.52vh"; 
    healDiv.style.display = "block";
    healDiv.style.position = "absolute";
    healDiv.style.padding = "0";
    healDiv.style.zIndex = "25";
    healDiv.style.backgroundColor = "green";
    healDiv.style.opacity = "0";
    healDiv.style.borderRadius = "50%";
    document.getElementById('mainframe').appendChild(healDiv);
    // healDiv.style.height =  healDiv.clientWidth * (100 / document.documentElement.clientWidth) * window.innerWidth / window.innerHeight + "vh";
    let topDist = rectp.top * (100 / document.documentElement.clientHeight);
    let radiusH = healDiv.clientHeight * (100 / document.documentElement.clientHeight)/2;
    let squareRadiusH = picture.clientHeight * (100 / document.documentElement.clientHeight)/2;

    let leftDist = rectp.left * (100 / document.documentElement.clientWidth);
    let radiusW = healDiv.clientWidth * (100 / document.documentElement.clientWidth)/2;
    let squareRadiusW = picture.clientWidth * (100 / document.documentElement.clientWidth)/2;

    healDiv.style.top = topDist - radiusH + squareRadiusH + "vh";
    healDiv.style.left = leftDist - radiusW + squareRadiusW + "vw";
    healDivFunction(healDiv)

        for(let i=0; i<healList.length; i++){
            let mobName =  healList[i].getAttribute("name")
            let PrimalLife = document.getElementById(mobName).getAttribute("life");
            if (Number(healList[i].getAttribute("life")) < Number(PrimalLife)){
            maxHeal = Number(PrimalLife) - Number(healList[i].getAttribute("life"));
            power = document.getElementById("Дубровська").getAttribute("power");
if (power >= maxHeal){
    healList[i].setAttribute("life", PrimalLife);
}
if (power < maxHeal){
    healList[i].setAttribute("life", Number(healList[i].getAttribute("life")) + Number(power));
};
let life = healList[i].getAttribute("life");
let hpBar = document.getElementById("bar" + healList[i].getAttribute("id"))
if (life == PrimalLife){
    hpBar.style.width = "3vw";
}
if (life/PrimalLife < 0.84 && life/PrimalLife >= 0.66){
    hpBar.style.width = "2.5vw";
} else if(life/PrimalLife < 0.66 && life/PrimalLife >= 0.5) {
    hpBar.style.width = "2vw";
} else if(life/PrimalLife < 0.5 && life/PrimalLife >= 0.33) {
    hpBar.style.width = "1.5vw";
} else if(life/PrimalLife < 0.33 && life/PrimalLife >= 0.16) {
    hpBar.style.width = "1vw";
} else if (life/PrimalLife < 0.16){
    hpBar.style.width = "0.5vw";
}
            };
        };
    };
    
};
};
async function healDivFunction(healDiv){
    healDiv.classList.add("healDivClass");
    await sleep(1000);
    healDiv.remove();
}

async function towerOption(ev){
    towerSelling = ev.target
    document.addEventListener("click",cancelSell)
    if (document.getElementById("option1")){
        document.getElementById("option1").remove()
    }
    if (document.getElementById("option2")){
        document.getElementById("option2").remove()
    }
    let option1 = document.createElement("img");
    option1.setAttribute("id","option1")
    option1.src = "pictures/dollar.jpg";
    option1.classList.add("optionOnField");
    option1.style.width = "3vw";
    option1.style.height = "4.5vh";
    let rectp = ev.target.getBoundingClientRect();
    let midpx = (Number(rectp.left) + Number(rectp.width/2)) * (100 / document.documentElement.clientWidth) - Number(option1.style.width.slice(0,-2))/2;
    let midpy = (Number(rectp.top) + Number(rectp.height/2)) * (100 / document.documentElement.clientHeight) - Number(option1.style.height.slice(0,-2))/2;
    option1.style.position = "absolute";
    option1.style.padding = "0";
    option1.style.zIndex = "5";
    option1.style.top = midpy + "vh";
    option1.style.left = midpx + "vw";
    document.getElementById('body').appendChild(option1);
    funcAddListener(option1)
    // let option2 = document.createElement("img");
    // option2.setAttribute("id","option2")
    // option2.src = "pictures/dollar.jpg";
    // option2.classList.add("optionOnField");// this class will have an animation
    // option2.style.width = "3vw";
    // option2.style.height = "4.5vh";
    // option2.style.position = "absolute";
    // option2.style.padding = "0";
    // option2.style.zIndex = "2000";
    // option2.style.top = midpy + "vh"; 
    // option2.style.left = midpx + "vw";
    // document.getElementById('body').appendChild(option2);
    // мають зявитись віконця, згідно кількості таке місце,

}
function cancelSell(ev){
if (ev.target.id != "option1" && ev.target.id != "option2" && !ev.target.classList.contains("dropedTower") ){
    if (document.getElementById("option1")){
        document.getElementById("option1").remove()
    }
    if (document.getElementById("option2")){
        document.getElementById("option2").remove()
    }
}
}
function sell(){
    document.getElementById("option1").remove()
    cost = towerSelling.getAttribute("cost")
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText = Number(money) + Number(cost);
    let parent = towerSelling.parentNode
    parent.setAttribute("ondrop", "drop(event)")
    parent.setAttribute("ondragover", "allowDrop(event)")
    parent.classList.remove("withTower")
    parent.removeAttribute("midx")
    parent.removeAttribute("midy")
    parent.removeAttribute("radius")
    parent.removeAttribute("ready")
    parent.removeAttribute("reloading")
    parent.removeAttribute("firerate")
    parent.removeAttribute("damage")
    towerSelling.remove()
}
function funcAddListener(option1){
    option1.addEventListener("click",sell)
}

function stunning(picture,hpBar,midpx,midpy){
picture.style.animationPlayState = 'paused';
hpBar.style.animationPlayState = 'paused';
if (picture.getAttribute("stunned") > 0){
    picture.setAttribute("stunned",5)
    return
}
if (picture.getAttribute("stopped") > 0){
    return
}
let stunimg = document.createElement("img");
stunimg.id = "stunImgId" + stunImgId;
picture.setAttribute("stunImgId","stunImgId" + stunImgId)
stunimg.setAttribute("iAmStunPicture",1);
stunimg.src = "pictures/stunimg.png"
stunimg.style.width = "2vw";
stunimg.style.opacity = "1";
stunimg.style.height = "4vh";
stunimg.style.display = "block";
stunimg.style.position = "absolute";
stunimg.style.padding = "0";
stunimg.style.zIndex = "5";
stunImgId += 1;
stunimg.style.top = Number(midpy * (100 / document.documentElement.clientHeight)) - 6.5 + "vh"; 
stunimg.style.left = Number(midpx * (100 / document.documentElement.clientWidth)) - 0.85 + "vw";
document.getElementById('body').appendChild(stunimg);
picture.setAttribute("stunned",5)
}

function pivoSpell(ev){
    document.getElementById("розлитиПиво").classList.add("glowSpell")
    let escDiv = document.createElement("div")
    escDiv.classList.add("cancelDiv")
    escDiv.id = "escDivId"
    escDiv.innerText = '"Esc" to cancel';
    document.getElementById('body').appendChild(escDiv);
    document.addEventListener('keydown', escListener)
    document.getElementById("розлитиПиво").removeEventListener("click",pivoSpell)
    document.getElementById("розлитиПиво").addEventListener("click",pivoSpellDeny)
    ev.stopPropagation()
    document.getElementById("mainframe").addEventListener("click",pivoSpellClick)
    
    grassRemoveListener()
    dirtBacklightOn()

// ev.dataTransfer.setData("text", ev.target.id);
// ev.dataTransfer.setData("cost", ev.target.getAttribute('cost'));
}
function escListener(ev){
if(ev.key === 'Escape') {
document.removeEventListener('keydown', escListener)
document.getElementById("розлитиПиво").classList.remove("glowSpell")
document.getElementById("escDivId").remove()
document.getElementById("розлитиПиво").addEventListener("click",pivoSpell)
document.getElementById("розлитиПиво").removeEventListener("click",pivoSpellDeny)

grassAddListener()
dirtBacklightOff()
}
}
function pivoSpellDeny(){
document.removeEventListener('keydown', escListener)
document.getElementById("розлитиПиво").classList.remove("glowSpell")
document.getElementById("escDivId").remove()
document.getElementById("розлитиПиво").removeEventListener("click",pivoSpellDeny)
document.getElementById("розлитиПиво").addEventListener("click",pivoSpell)

grassAddListener()
dirtBacklightOff()
}
function pivoSpellDrop(){
    
    // let compmidx =   ;
    // let compmidy =   ;
    let radius = ftd[i].getAttribute('radius');// spell instead of ftd[i]
    let mobs = document.querySelectorAll(".mobOnField")
    for(let i=0; i<mobs.length; i++) {
        let rectp = mobs[i].getBoundingClientRect();
        let midpx = rectp.left + rectp.width/2;
        let midpy = rectp.top + rectp.height/2;
    
        let axeWidth = radius * 5 * document.documentElement.clientWidth / 100 // після радіуса множник до vw
        let axeHeight = radius * 10.14 * document.documentElement.clientHeight / 100
    
        if  (axeWidth>=axeHeight){
            if (((midpx-compmidx)*(midpx-compmidx)/axeWidth/axeWidth + 
            (midpy-compmidy)*(midpy-compmidy)/axeHeight/axeHeight)<= 1){
    
    
            // asadad
        }else if  (axeWidth<axeHeight){
        if (((midpx-compmidx)*(midpx-compmidx)/axeHeight/axeHeight + 
        (midpy-compmidy)*(midpy-compmidy)/axeWidth/axeWidth)<= 1){
            // sada
    
        }
    }
        }
    }
}
function pivoSpellClick(ev){
    let cost = document.getElementById("розлитиПиво").getAttribute("cost")
    let compmidx = ev.pageX;
    let compmidy = ev.pageY;
    let radius = document.getElementById("розлитиПиво").getAttribute('radius');// spell instead of ftd[i]
    let axeWidth = radius * 5 * document.documentElement.clientWidth / 100 // після радіуса множник до vw
    let axeHeight = radius * 10.14 * document.documentElement.clientHeight / 100
    let mobs = document.querySelectorAll(".mobOnField")
    for(let i=0; i<mobs.length; i++) {
        let rectp = mobs[i].getBoundingClientRect();
        let midpx = rectp.left + rectp.width/2;
        let midpy = rectp.top + rectp.height/2;
        if  (axeWidth>=axeHeight){
            if (((midpx-compmidx)*(midpx-compmidx)/axeWidth/axeWidth + 
            (midpy-compmidy)*(midpy-compmidy)/axeHeight/axeHeight)<= 1){
if (Number(document.getElementById("mana").innerText) < Number(cost)){
    NotEnoughtGold.play();
    document.getElementById("mainframe").removeEventListener("click",pivoSpellClick)
    return
    }
if (Number(document.getElementById("mana").innerText) >= Number(cost)){
    document.getElementById("mana").innerText -= cost
    if (mobs[i].getAttribute("stopped") != 0){
        mobs[i].getAttribute("stopped",100)
        return
    }  
    document.getElementById("mainframe").removeEventListener("click",pivoSpellClick)
    mobs[i].style.animationPlayState = 'paused';
    mobs[i].setAttribute("stopped",100)
    document.getElementById("bar"+mobs[i].getAttribute("id")).style.animationPlayState = 'paused';
    let stopimg = document.createElement("img");
    stopimg.src = "pictures/redx.png";
    stopimg.style.width = "2.2vw";
    stopimg.style.opacity = "1";
    stopimg.style.height = "4.5vh";
    stopimg.style.display = "block";
    stopimg.style.position = "absolute";
    stopimg.style.padding = "0";
    stopimg.style.zIndex = "5";
    stopimgId += 1;
    stopimg.id = "stopimgId" + stopimgId;
    stopimg.style.top = Number(rectp.top * (100 / document.documentElement.clientHeight)) + "vh"; 
    stopimg.style.left = Number(rectp.left * (100 / document.documentElement.clientWidth)) + "vw";
    document.getElementById('body').appendChild(stopimg);
    mobs[i].setAttribute("stopimgId","stopimgId" + stopimgId);
}
            }
        }else if (axeWidth<axeHeight){
            if (((midpx-compmidx)*(midpx-compmidx)/axeHeight/axeHeight + 
            (midpy-compmidy)*(midpy-compmidy)/axeWidth/axeWidth)<= 1){
if (Number(document.getElementById("mana").innerText) < Number(cost)){
    NotEnoughtGold.play();
    document.getElementById("mainframe").removeEventListener("click",pivoSpellClick)
    return
    }
if (Number(document.getElementById("mana").innerText) >= Number(cost)){
    document.getElementById("mana").innerText -= cost
    if (mobs[i].getAttribute("stopped") != 0){
        mobs[i].getAttribute("stopped",100)
        return
    }  
    document.getElementById("mainframe").removeEventListener("click",pivoSpellClick)
    mobs[i].style.animationPlayState = 'paused';
    mobs[i].setAttribute("stopped",100)
    document.getElementById("bar"+mobs[i].getAttribute("id")).style.animationPlayState = 'paused';
    let stopimg = document.createElement("img");
    stopimg.src = "pictures/redx.png";
    stopimg.style.width = "2.2vw";
    stopimg.style.opacity = "1";
    stopimg.style.height = "4.5vh";
    stopimg.style.display = "block";
    stopimg.style.position = "absolute";
    stopimg.style.padding = "0";
    stopimg.style.zIndex = "5";
    stopimgId += 1;
    stopimg.id = "stopimgId" + stopimgId;
    stopimg.style.top = Number(rectp.top * (100 / document.documentElement.clientHeight)) + "vh"; 
    stopimg.style.left = Number(rectp.left * (100 / document.documentElement.clientWidth)) + "vw";
    document.getElementById('body').appendChild(stopimg);
    mobs[i].setAttribute("stopimgId","stopimgId" + stopimgId);
}
    }
        }
    }
}



function grassAddListener(){
let grass = document.querySelectorAll(".towerDropDiv")
for(let i=0; i<grass.length; i++) {
    grass[i].addEventListener("dragover",allowDrop)
    grass[i].addEventListener("drop",drop)
}
}
function grassRemoveListener(){
let grass = document.querySelectorAll(".towerDropDiv")
for(let i=0; i<grass.length; i++) {
    grass[i].removeEventListener("dragover",allowDrop)
    grass[i].removeEventListener("drop",drop)
    }
}

function dirtAddListener(){
let roads = document.querySelectorAll(".spellDropDiv");
for(let i=0; i<roads.length; i++) {
    roads[i].addEventListener("dragover",allowdropSpell)
    roads[i].addEventListener("drop",dropSpell)
    }
}
function dirtRemoveListener(){
let roads = document.querySelectorAll(".spellDropDiv");
for(let i=0; i<roads.length; i++) {
    roads[i].removeEventListener("dragover",allowdropSpell)
    roads[i].removeEventListener("drop",dropSpell)
    }
}
function dirtBacklightOn(){
let roads = document.querySelectorAll(".spellDropDiv");
for(let i=0; i<roads.length; i++) {
    roads[i].style.backgroundColor = "rgba(255, 255, 255, 1)";
    roads[i].style.border = "solid rgba(0, 0, 0, 1)";
    }
}
function dirtBacklightOff(){
    let roads = document.querySelectorAll(".spellDropDiv");
    for(let i=0; i<roads.length; i++) {
        roads[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
        roads[i].style.border = "solid rgba(0, 0, 0, 0)";
        }
}
function grassBacklightOn(){
for(let i=0; i<towers.length; i++) {
towers[i].style.backgroundColor = "rgba(255, 255, 255, 1)";
towers[i].style.border = "solid rgba(0, 0, 0, 1)";
}
}
function grassBacklightOff(){
let towers = document.querySelectorAll(".towerDropDiv");
for(let i=0; i<towers.length; i++) {
towers[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
towers[i].style.border = "solid rgba(0, 0, 0, 0)";
}
} 








function changeTiles(){
    var table = document.getElementById("mainTable");
    
    for (var i = 0, row; row = table.rows[i]; i++) {
    
    for (var j = 0, col; col = row.cells[j]; j++) {
        element = col.getElementsByTagName('img')[0]
    
        if(element.getAttribute("src") == 'pictures/grass.jpg'){
    
    if(i == 0 && j==0){
    right = table.rows[i].cells[j+1].getElementsByTagName('img')[0].getAttribute("src");
    bot =  table.rows[i+1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
    if (right == "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
        element.setAttribute("way","center")
    }
    if(right == "pictures/grass.jpg" && bot != "pictures/grass.jpg"){
        element.setAttribute("way","bot")
    }
    if(right != "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
        element.setAttribute("way","right")
    }
    }
    
        if (i == 0 && j!=0 && j!=row.cells.length-1){
        left = table.rows[i].cells[j-1].getElementsByTagName('img')[0].getAttribute("src");
        right = table.rows[i].cells[j+1].getElementsByTagName('img')[0].getAttribute("src");
        bot =  table.rows[i+1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
        
        if (left == "pictures/grass.jpg" && right == "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
            element.setAttribute("way","center")
        }
        if (left == "pictures/grass.jpg" && right == "pictures/grass.jpg" && bot != "pictures/grass.jpg"){
            element.setAttribute("way","bot")
        }
        if (left == "pictures/grass.jpg" && right != "pictures/grass.jpg" && bot != "pictures/grass.jpg"){
            element.setAttribute("way","rightbot")
        }
        if (left == "pictures/grass.jpg" && right != "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
            element.setAttribute("way","right")
        }
        if (left != "pictures/grass.jpg" && right == "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
            element.setAttribute("way","left")
        }
        if (left != "pictures/grass.jpg" && right != "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
            element.setAttribute("way","leftright")
        }
        if (left != "pictures/grass.jpg" && right == "pictures/grass.jpg" && bot != "pictures/grass.jpg"){
            element.setAttribute("way","leftbot")
        }
        if (left != "pictures/grass.jpg" && right != "pictures/grass.jpg" && bot != "pictures/grass.jpg"){
            element.setAttribute("way","leftrightbot")
        }
        }
    
    if (i == 0 && j ==row.cells.length-1){
    left = table.rows[i].cells[j-1].getElementsByTagName('img')[0].getAttribute("src");
    bot =  table.rows[i+1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
    if (left == "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
        element.setAttribute("way","center")
    }
    if(left == "pictures/grass.jpg" && bot != "pictures/grass.jpg"){
        element.setAttribute("way","bot")
    }
    if(left != "pictures/grass.jpg" && bot == "pictures/grass.jpg"){
        element.setAttribute("way","left")
    }
    }
    
        if (i != 0 &&  i != table.rows.length-1 && j ==0){
        topich= table.rows[i-1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
        right = table.rows[i].cells[j+1].getElementsByTagName('img')[0].getAttribute("src");
        bot =  table.rows[i+1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
        if (topich== "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
        element.setAttribute("way","center")
        }
        if (topich== "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
        element.setAttribute("way","right")
        }
        if (topich== "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
        element.setAttribute("way","bot")
        }
        if (topich!= "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
        element.setAttribute("way","top")
        }
        if (topich== "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
        element.setAttribute("way","rightbot")
        }
        if (topich!= "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
        element.setAttribute("way","righttop")
        }
        if (topich!= "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
        element.setAttribute("way","topbot")
        }
        if (topich!= "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
        element.setAttribute("way","righttopbot")
        }
        }
    if (i != 0 &&  i != table.rows.length-1 && j!=0 && j != row.cells.length-1){
    topich = table.rows[i-1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
    left = table.rows[i].cells[j-1].getElementsByTagName('img')[0].getAttribute("src");
    right = table.rows[i].cells[j+1].getElementsByTagName('img')[0].getAttribute("src");
    bot =  table.rows[i+1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
    if (left == "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","center")
    }
    if (left == "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","right")
    }
    if (left == "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","rightbot")
    }
    if (left == "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","righttopbot")
    }
    if (left == "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","bot")
    }
    if (left == "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","topbot")
    }
    if (left == "pictures/grass.jpg" && topich!= "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","top")
    }
    if (left == "pictures/grass.jpg" && topich!= "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","righttop")
    }
    if (left != "pictures/grass.jpg" && topich== "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","left")
    }
    if (left != "pictures/grass.jpg" && topich== "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","leftright")
    }
    if (left != "pictures/grass.jpg" && topich== "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","leftrightbot")
    }
    if (left != "pictures/grass.jpg" && topich!= "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","leftrighttopbot")
    }
    if (left != "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","leftbot")
    }
    if (left != "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
    bot != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","leftbottop")
    }
    if (left != "pictures/grass.jpg" && topich!= "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","lefttop")
    }
    if (left != "pictures/grass.jpg" && topich!= "pictures/grass.jpg" && 
    bot == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","lefttopright")
    }
    }
        if (i != 0 &&  i != table.rows.length-1 && j == row.cells.length-1){
        topich = table.rows[i-1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
        left = table.rows[i].cells[j-1].getElementsByTagName('img')[0].getAttribute("src");
        bot =  table.rows[i+1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
        if (left == "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg"){
        element.setAttribute("way","center")
        }
        if (left == "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg"){
        element.setAttribute("way","bot")
        }
        if (left == "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg"){
        element.setAttribute("way","top")
        }
        if (left != "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg"){
        element.setAttribute("way","left")
        }
        if (left != "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
        bot == "pictures/grass.jpg"){
        element.setAttribute("way","lefttop")
        }
        if (left != "pictures/grass.jpg" && topich == "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg"){
        element.setAttribute("way","leftbot")
        }
        if (left == "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg"){
        element.setAttribute("way","topbot")
        }
        if (left != "pictures/grass.jpg" && topich != "pictures/grass.jpg" && 
        bot != "pictures/grass.jpg"){
        element.setAttribute("way","leftbottop")
        }
        }    
    if (i == table.rows.length-1 && j==0){
    topich = table.rows[i-1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
    right = table.rows[i].cells[j+1].getElementsByTagName('img')[0].getAttribute("src");
    if (topich == "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","center")
    }
    if (topich != "pictures/grass.jpg" && right == "pictures/grass.jpg"){
    element.setAttribute("way","top")
    }
    if (topich == "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","right")
    }
    if (topich != "pictures/grass.jpg" && right != "pictures/grass.jpg"){
    element.setAttribute("way","righttop")
    }
    }
        if (i == table.rows.length-1 && j!=0 && j != row.cells.length-1){
        topich = table.rows[i-1].cells[j].getElementsByTagName('img')[0].getAttribute("src");
        left = table.rows[i].cells[j-1].getElementsByTagName('img')[0].getAttribute("src");
        right = table.rows[i].cells[j+1].getElementsByTagName('img')[0].getAttribute("src");
        if (topich == "pictures/grass.jpg" && left == "pictures/grass.jpg"
        && right == "pictures/grass.jpg"){
        element.setAttribute("way","center")
        }
        if (topich != "pictures/grass.jpg" && left == "pictures/grass.jpg"
        && right == "pictures/grass.jpg"){
        element.setAttribute("way","top")
        }
        if (topich == "pictures/grass.jpg" && left != "pictures/grass.jpg"
        && right == "pictures/grass.jpg"){
        element.setAttribute("way","left")
        }
        if (topich == "pictures/grass.jpg" && left == "pictures/grass.jpg"
        && right != "pictures/grass.jpg"){
        element.setAttribute("way","right")
        }
        if (topich != "pictures/grass.jpg" && left == "pictures/grass.jpg"
        && right != "pictures/grass.jpg"){
        element.setAttribute("way","righttop")
        }
        if (topich == "pictures/grass.jpg" && left != "pictures/grass.jpg"
        && right != "pictures/grass.jpg"){
        element.setAttribute("way","leftright")
        }
        if (topich != "pictures/grass.jpg" && left != "pictures/grass.jpg"
        && right == "pictures/grass.jpg"){
        element.setAttribute("way","lefttop")
        }
        if (topich != "pictures/grass.jpg" && left != "pictures/grass.jpg"
        && right != "pictures/grass.jpg"){
        element.setAttribute("way","lefttopright")
        }
        }
    
    if (i == table.rows.length-1 && j == row.cells.length-1){
    topich = table.rows[i-1].cells[j].getElementsByTagName('img')[0].getAttribute("src")
    left = table.rows[i].cells[j-1].getElementsByTagName('img')[0].getAttribute("src");
    if (topich == "pictures/grass.jpg" && left == "pictures/grass.jpg"){
    element.setAttribute("way","center")
    }
    if (topich != "pictures/grass.jpg" && left == "pictures/grass.jpg"){
    element.setAttribute("way","top")
    }
    if (topich == "pictures/grass.jpg" && left != "pictures/grass.jpg"){
    element.setAttribute("way","left")
    }
    if (topich != "pictures/grass.jpg" && left != "pictures/grass.jpg"){
    element.setAttribute("way","lefttop")
    }
    }
        }
        
    
        }  
    }
    
        
}
function overhaul(){
    changeTiles()
    var table = document.getElementById("mainTable");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
        element = col.getElementsByTagName('img')[0]

            if(element.getAttribute("src") == 'pictures/grass.jpg'){
            way = element.getAttribute("way")
            element.setAttribute("src","pictures/" + way + ".png")
            }
        }
    }
    left = 1;
    document.getElementById("changeStyle").remove()
}


// document.body.addEventListener("click", event => {
//     if (event.target.nodeName == "BUTTON") {
//       console.log("Clicked", event.target.textContent);
//     }
//   });