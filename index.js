let counter = 0;
let switcher = 0;
let intervalID;
let starter=0;
let menu = document.getElementById("interactive-block");
let announcement=document.getElementById("announcement");
let replay=document.getElementById("replay");
let home=document.getElementById("home");
let i=0;

function timeProgress() {
  let start=0;
  let timeElement=document.getElementById("time-progress");
  let ending=timeElement.max;
  intervalID = setInterval(function () {
    if (start > ending){
      replay.style.visibility="visible";
      home.style.visibility="visible";
      clearInterval(intervalID);
      announcement.innerHTML = "<span>LOOSER</span>";
    } else {
      timeElement.value = start;
      start++;
    }
  },100);
}

document.addEventListener('keydown', function(event){
  if (event.code!=null){
    starter++}
  if (starter==1){
document.addEventListener('keydown', function(event) {
  let gameElement=document.getElementById("game-progress");
  let winning = gameElement.max;
  let mainElement=document.getElementById("main");
  if (event.code == 'ArrowRight' && switcher % 2 == 0) {
    counter++;
    switcher++;
    mainElement.style.backgroundImage = 'url("../img/2.png")';
  }
  if (event.code == 'ArrowLeft' && switcher % 2 == 1) {
    counter++;
    switcher++;
    mainElement.style.backgroundImage = 'url("../img/1.png")';
  }


    if (counter > winning && home.style.visibility != "visible"){
      announcement.innerHTML = "<span>WIN</span>";
      clearInterval(intervalID);
      menu.style.visibility = "visible";
    } else{
      gameElement.value = counter;
    }
});
timeProgress();}});


