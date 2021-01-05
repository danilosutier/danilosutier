const circle = document.getElementsByClassName('circle');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const btn = document.getElementById('submit');
const title = document.getElementById('title');
var len = circle.length;

const on = function () {
  for (var i = 0; i < len; i++) {if (window.CP.shouldStopExecution(0)) break;
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
  }window.CP.exitedLoop(0);
};

const off = function () {
  title.style.animation = "none";

  for (var i = 0; i < len; i++) {if (window.CP.shouldStopExecution(1)) break;
    circle[i].style.animation = "none";
    circle[i].style.background = "#563260";
  }window.CP.exitedLoop(1);
};

function convert() {
  var speed = document.getElementById('quantity').value;
  for (var i = 0; i < len; i++) {if (window.CP.shouldStopExecution(2)) break;
    circle[i].style.animationDuration = speed + "s";
  }window.CP.exitedLoop(2);
}

play.addEventListener('click', on);
stop.addEventListener('click', off);