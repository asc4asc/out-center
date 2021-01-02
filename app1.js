"use strict";  

let tmp=document.querySelector("body");
let tmp1=document.querySelector("clock");

tmp.style.backgroundColor = "blue";

(function () {
	function uhrzeit() {
		var jetzt = new Date(),
			h = jetzt.getHours(),
			m = jetzt.getMinutes(),
			s = jetzt.getSeconds();
		m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		tmp1.innerHTML = h + ':' + m + ':' + s;
		setTimeout(uhrzeit, 500);
	}

	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}
	document.addEventListener('DOMContentLoaded', uhrzeit);
}());

let i=1;
document.body.addEventListener("click", event => {
  if (i == 1) {
    tmp.style.backgroundColor = "green"; i=0; window.navigator.vibrate(100);
  } else {
    tmp.style.backgroundColor = "yellow"; i=1; 
    openFullscreen();
  }
});

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
