var music1 = document.getElementById("music1");
var music2 = document.getElementById("music2");
var music3 = document.getElementById("music3");
var music4 = document.getElementById("music4");

var musicContainer1 = document.getElementById("musicContainer1");
var musicContainer2 = document.getElementById("musicContainer2");
var musicContainer3 = document.getElementById("musicContainer3");
var musicContainer4 = document.getElementById("musicContainer4");

musicContainer1.addEventListener("mouseover", playMusic1);
musicContainer1.addEventListener("mouseout", pauseMusic1);
musicContainer2.addEventListener("mouseover", playMusic2);
musicContainer2.addEventListener("mouseout", pauseMusic2);
musicContainer3.addEventListener("mouseover", playMusic3);
musicContainer3.addEventListener("mouseout", pauseMusic3);
musicContainer4.addEventListener("mouseover", playMusic4);
musicContainer4.addEventListener("mouseout", pauseMusic4);

function playMusic1() {
    music1.play();
}

function pauseMusic1() {
    music1.pause();
}

function playMusic2() {
    music2.play();
}

function pauseMusic2() {
    music2.pause();
}

function playMusic3() {
    music3.play();
}

function pauseMusic3() {
    music3.pause();
}
function playMusic4() {
    music4.play();
}

function pauseMusic4() {
    music4.pause();
}