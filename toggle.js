
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


//eventListeners

boxesButton.addEventListener("click",hideBoxesWindow,false);
blindsButtom.addEventListener("click",hideBlindsWindow,false);

