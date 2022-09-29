//tower parametres
let towers = document.querySelectorAll(".towerDropDiv");
let life = 20;
let topp  = 6;
let left = 1;
var imgId = 0;
let about = 0;
let towerSelling;
// clone of empty div to remove existing event listeners
let emptyDiv = document.getElementById("divToCopy");
let fullDiv;
//starting parametres of wave
waveCount = 1;
mobName = 'куліш';
mobQuantity = 1;
waitTime = 1000;
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
    tower1.setAttribute('radius',100);
    tower1.setAttribute('damage', 1);
    tower1.setAttribute('fireRate', 1);
    tower1.setAttribute('name', 'Євгеній');
    tower1.setAttribute('cost', 100);
    tower1.setAttribute('special', "none");
    
    tower2 = document.getElementById('мінченко');
    tower2.setAttribute('radius',100);
    tower2.setAttribute('damage', 2);
    tower2.setAttribute('fireRate', 2);
    tower2.setAttribute('name', 'Констянтин');
    tower2.setAttribute('cost', 100);
    tower2.setAttribute('special', "none");
    
    tower3 = document.getElementById('мороз');
    tower3.setAttribute('radius',100);
    tower3.setAttribute('damage', 0.5);
    tower3.setAttribute('fireRate', 0.5);
    tower3.setAttribute('name', 'Андрій');
    tower3.setAttribute('cost', 100);
    tower3.setAttribute('special', "none");
    
    tower4 = document.getElementById('колесніков');
    tower4.setAttribute('radius',100);
    tower4.setAttribute('damage', 1);
    tower4.setAttribute('fireRate', 1);
    tower4.setAttribute('name', 'Михайло');
    tower4.setAttribute('cost', 100);
    tower4.setAttribute('special', "none");

    tower5 = document.getElementById('сергієнко');
    tower5.setAttribute('radius',100);
    tower5.setAttribute('damage', 1);
    tower5.setAttribute('fireRate', 1);
    tower5.setAttribute('name', 'Влад');
    tower5.setAttribute('cost', 100);
    tower5.setAttribute('special', "none");

    tower6 = document.getElementById('маламан');
    tower6.setAttribute('radius',100);
    tower6.setAttribute('damage', 1);
    tower6.setAttribute('fireRate', 1);
    tower6.setAttribute('name', 'Дімітрій');
    tower6.setAttribute('cost', 100);
    tower6.setAttribute('special', "none");

    tower7 = document.getElementById('кузь');
    tower7.setAttribute('radius',100);
    tower7.setAttribute('damage', 1);
    tower7.setAttribute('fireRate', 1);
    tower7.setAttribute('name', 'Євгеній');
    tower7.setAttribute('cost', 100);
    tower7.setAttribute('special', "none");

    tower8 = document.getElementById('кузь');
    tower8.setAttribute('radius',100);
    tower8.setAttribute('damage', 1);
    tower8.setAttribute('fireRate', 1);
    tower8.setAttribute('name', 'Євгеній');
    tower8.setAttribute('cost', 100);
    tower8.setAttribute('special', "none");

    tower9 = document.getElementById('кузь');
    tower9.setAttribute('radius',100);
    tower9.setAttribute('damage', 1);
    tower9.setAttribute('fireRate', 1);
    tower9.setAttribute('name', 'Євгеній');
    tower9.setAttribute('cost', 100);
    tower9.setAttribute('special', "none");

    //spells parametres
    spell1 = document.getElementById('розлитиПиво');
    spell1.setAttribute('name', 'Розлити пиво');
    spell1.setAttribute('cost', 50);
    spell1.setAttribute('power',100);
    spell1.setAttribute('special',"Вороги зупиняються на двох обраних блоках впродовж 4сек");

    spell2 = document.getElementById('панель');
    spell2.setAttribute('name', 'Спиздити панель');
    spell2.setAttribute('cost', 50);
    spell2.setAttribute('power',100);
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
function died(pict,hpBar,cost){
    let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    }; 
};

function nextWave(){
    money = document.getElementById("money").innerText;
    document.getElementById("money").innerText = Number(money) + Number(panelCount*5);

    unit = document.getElementById("p24");
    amount = document.getElementById("p25");
    skill = document.getElementById("p26");;
    if (waveCount == 1){
        mobName = "Філянін"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    if (waveCount == 2){
        mobName = "Сторожилова"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    if (waveCount == 3){
        mobName = "Розен"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    if (waveCount == 4){
        mobName = "Куліш"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    if (waveCount == 5){
        mobName = "Калінчик"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    if (waveCount == 6){
        mobName = "Дубровська"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    if (waveCount == 7){
        mobName = "Босак"; mobQuantity = 2; waitTime = 1000;
        runMob(mobName,mobQuantity,waitTime)
        unit.innerText = "Unit: "+mobName;
        amount.innerText = "Amount: "+mobQuantity;
        skill.innerText = "Skill: "+document.getElementById(mobName).getAttribute("special");
    }
    waveCount += 1;
};

async function runMob(mobName,mobQuantity,waitTime){    
    for(var i = 0; i < mobQuantity; i++){
        moveByPath(mobName);
        await sleep(waitTime);
    }
};
async function getInvisibility(pict){
    pict.setAttribute("invisible", 1);
    pict.setAttribute("invisibleDone", 1);
    pict.style.opacity = 0.3;
    await sleep(7000);
    pict.style.opacity = 1;
    pict.setAttribute("invisible", 0);
}
function moveByPath(mobName) {
    let hpBar = document.createElement("hpBar");
    hpBar.style.width = "3vw";
    hpBar.style.height = "0.5vh"; 
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
    
    img.style.width = "3vw";
    img.style.height = "4.5vh";
    img.style.display = "block";
    img.style.position = "absolute";
    img.style.padding = "0";
    img.style.zIndex = "4";
    img.style.top = topp + "vh"; 
    img.style.left = left + "vw";
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
    }
    if (mobName == "Сторожилова"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
    }
    if (mobName == "Розен"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
    }
    if (mobName == "Філянін"){
        changeCoord(img,topp,left,hpBar,cost,mobName);
    }
    if (mobName == "Калінчик"){
        changeCoordКалінчик(img,topp,left,hpBar,cost,mobName);
    }
    if (mobName == "Дубровська"){
        changeCoordДубровська(img,topp,left,hpBar,cost,mobName);
    }
    if (mobName == "Босак"){
        changeCoordБосак(img,topp,left,hpBar,cost,mobName);
    }
};
async function changeCoord(pict,up,onleft,hpBar,cost){
    let times = 70;
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost); 
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0;
        onleft += 0.2;;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);
        await sleep(50);
        };  
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 37;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 74;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw"
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 37;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 82;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 54;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 123;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 36;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 14;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 74;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 92;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 27;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 147;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 54;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 36;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
};
async function changeCoordКалінчик(pict,up,onleft,hpBar,cost,mobName){
    pict.setAttribute("invisible", 0);
    pict.setAttribute("invisibleDone", 0);
    let times = 70;
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
        let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost); 
        pict.remove();
        hpBar.remove();
        return
    };  
    if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
        getInvisibility(pict);
    };
        up += 0;
        onleft += 0.2;;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 37;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 74;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += 0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += 0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 37;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += 0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 82;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 54;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += 0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 123;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 36;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 14;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 74;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 92;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += 0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 27;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 147;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 54;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
        times = 36;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    let invisible = pict.getAttribute("invisible");
        let invisibleDone = pict.getAttribute("invisibleDone");
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };  
        if (Number(life) < Number(document.getElementById(mobName).getAttribute("life")) && invisibleDone == 0 ){
            getInvisibility(pict);
        }
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        if (invisible == 0){
            frameAction(pict,hpBar,mobName);;
        }
        await sleep(50);
        };  
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
};
async function changeCoordДубровська(pict,up,onleft,hpBar,cost,mobName){
    pict.setAttribute('ready', 0);
    pict.setAttribute('healReloading', 0);
    let times = 70;
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost); 
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0;
        onleft += 0.2;;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
        };  
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
        };
        times = 37;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
        };
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
        };
        times = 74;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw"
        frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
        };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 37;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 82;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 54;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 123;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 36;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 14;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 74;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 92;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 27;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 147;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 54;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 55;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 41;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
        times = 36;   
    for(var i = 0; i < times; i++){
        let life = pict.getAttribute('life');
    if (life <= 0) {
        money = document.getElementById("money").innerText;
        document.getElementById("money").innerText = Number(money) + Number(cost);
        pict.remove();
        hpBar.remove();
        return
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        HealframeAction(pict);
        await sleep(50);
            };
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
};
async function changeCoordБосак(pict,up,onleft,hpBar,cost,mobName){
    let lifeLossedCounter = 0;
    let times = 70;
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
         
    };
        up += 0;
        onleft += 0.2;;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);
        await sleep(50);
        };  
        times = 41;   
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
    };
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 37;   
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
    };
        up += 0;
        onleft += -0.2;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 41;   
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
    };
        up += 0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw";
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 74;   
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
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 55;   
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
    };
        up += -0.4;
        onleft += 0;
        hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
        pict.style.top = up + "vh"; 
        pict.style.left = onleft + "vw"
        frameAction(pict,hpBar,mobName);;
        await sleep(50);
        };
        times = 55;   
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
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 55;   
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
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 37;   
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
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 82;   
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
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 54;   
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
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 123;   
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
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 36;   
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
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 14;   
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
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 74;   
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
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 41;   
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
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 92;   
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
    };
            up += 0;
            onleft += 0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 27;   
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
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 147;   
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
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 54;   
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
    };
            up += -0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 55;   
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
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 41;   
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
    };
            up += 0.4;
            onleft += 0;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
        times = 36;   
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
    };
            up += 0;
            onleft += -0.2;
            hpBar.style.top = up + "vh"; 
        hpBar.style.left = onleft + "vw";
            pict.style.top = up + "vh"; 
            pict.style.left = onleft + "vw";
            frameAction(pict,hpBar,mobName);;
        await sleep(50);
            };
    pict.remove();
    hpBar.remove();
    lifeLoss.play();
};
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
};
function SpellDragEnd(ev){
    let roads = document.querySelectorAll(".spellDropDiv");
for(let i=0; i<roads.length; i++) {
    roads[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
    roads[i].style.border = "solid rgba(0, 0, 0, 0)";
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
    radDiv.style.width = "10vw";
    radDiv.innerText = "";
    radDiv.style.height =  radDiv.clientWidth * (100 / document.documentElement.clientWidth) * window.innerWidth / window.innerHeight + "vh";      
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
let towers = document.querySelectorAll(".towerDropDiv");

ev.dataTransfer.setData("text", ev.target.id);
ev.dataTransfer.setData("radius", ev.target.getAttribute('radius'));
ev.dataTransfer.setData("fireRate", ev.target.getAttribute('fireRate'));
ev.dataTransfer.setData("damage", ev.target.getAttribute('damage'));
ev.dataTransfer.setData("cost", ev.target.getAttribute('cost'));

for(let i=0; i<towers.length; i++) {
    towers[i].style.backgroundColor = "rgba(255, 255, 255, 1)";
    towers[i].style.border = "solid rgba(0, 0, 0, 1)";
    }
        
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
    clone.removeAttribute("ondragstart"); 
    clone.removeAttribute("ondragend");
    clone.classList.remove('towerimg');
    clone.classList.remove('spellimg');
    clone.removeAttribute("id");
    clone.classList.add('pixelimg');
    clone.classList.add('dropedTower');
    clone.addEventListener("click",towerOption)
    ev.target.append(clone);

    ev.target.classList.add('withTower');

    let rect = clone.getBoundingClientRect();//ev.target
    let midx = rect.left + rect.width/2;
    let midy = rect.top + rect.height/2;

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
    clone.removeAttribute("ondragstart"); 
    clone.removeAttribute("ondragend");
    clone.classList.remove('towerimg');
    clone.classList.remove('spellimg');
    clone.removeAttribute("id");
    clone.classList.add('pixelimg');
    clone.classList.add('dropedTower');
    clone.addEventListener("click",towerOption)
    ev.target.append(clone);

    ev.target.classList.add('withTower');

    let rect = ev.target.getBoundingClientRect();
    let midx = rect.left + rect.width/2;
    let midy = rect.top + rect.height/2;


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
    let towers = document.querySelectorAll(".towerDropDiv");
    for(let i=0; i<towers.length; i++) {
        towers[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
        towers[i].style.border = "solid rgba(0, 0, 0, 0)";
    }
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
    document.getElementById('p5').innerText = "Reload time: " + fireRate + "/c";
    document.getElementById('p6').innerText = "Radius: " + radius;
    document.getElementById('p7').innerText = "";
    document.getElementById('p8').innerText = "";

    let radDiv = document.getElementById("radDiv");
    radDiv.style.visibility = "visible";
    radDiv.style.width = "10vw";
    radDiv.style.height =  "20.26vh";
    radDiv.style.top = "38.8vh";
    radDiv.style.left = "37.2vw";
    radDiv.innerText = "Radius Comparison";

};
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
function frameAction(picture,hpBar,mobName){
    let rectp = picture.getBoundingClientRect();
    let midpx = rectp.left + rectp.width/2;
    let midpy = rectp.top + rectp.height/2;
    let ftd = document.getElementsByClassName('dropedTower');// dropedTower
// // RELOADING FUNCTION
for(let i=0; i<ftd.length; i++) {
//     let reloading = Number(ftd[i].getAttribute('reloading'));
//     //console.log("Recharging " + Number(ftd[i].getAttribute('reloading')))
//     if (reloading >= 100){
//         ftd[i].setAttribute('ready' , 1);
//         //console.log('Ready!!!')
//     } else{
//         let a = ftd[i].getAttribute('reloadRate')
//         let reloadRate = 5 / a;
//         reloading += Number(reloadRate);
//         //console.log(reloading)
//         ftd[i].setAttribute('reloading' , reloading);
//     }
//     //END OF RELOADING FUNCTION


let compmidx = ftd[i].getAttribute('midx');
let compmidy = ftd[i].getAttribute('midy');
let radius = ftd[i].getAttribute('radius');
let damage = ftd[i].getAttribute('damage');
let fireRate = ftd[i].getAttribute('fireRate');

let complenght = Math.sqrt((midpx-compmidx)*(midpx-compmidx)+(midpy-compmidy)*(midpy-compmidy));
    if (complenght <= radius) {
        let ready = ftd[i].getAttribute('ready');
    if (ready == 1){
        ftd[i].setAttribute('ready' , 0);
        reloadFunction(ftd,i,fireRate)
        let life = picture.getAttribute('life');
        life -= damage;
        picture.setAttribute('life' , life);
        PrimalLife = document.getElementById(mobName).getAttribute("life");
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
        }
    }  
};   
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