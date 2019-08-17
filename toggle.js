
//calculate boxes
const boxesWindow = document.querySelector("#boxesArea");
const boxesButton = document.querySelector("#button1");

function hideBoxesWindow() {
    boxesWindow.classList.toggle("hide");
}

//calculate blinds

const blindsWindow = document.querySelector("#blindArea");
const blindsButtom = document.querySelector("#button2");

function hideBlindsWindow() {
    blindsWindow.classList.toggle("hide");
}

//Convert area units
const convertWindow = document.querySelector("#convertArea");
const convertButton = document.querySelector("#button3");

function hideConvertWindow() {
    convertWindow.classList.toggle("hide");
}

//eventListeners

boxesButton.addEventListener("click",hideBoxesWindow,false);
blindsButtom.addEventListener("click",hideBlindsWindow,false);
convertButton.addEventListener("click",hideConvertWindow,false);

