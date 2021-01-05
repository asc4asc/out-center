"use strict";  

let tmp=document.querySelector("body");
let tmp1=document.querySelector("clock");
let dat=new Date();

tmp.style.backgroundColor = "blue";


(function () {
  	function uhrzeit() {
          if (i == 1) {
		
		var jetzt = dat, // new Date(),
			h = jetzt.getHours(), 
			m = jetzt.getMinutes(),
			s = jetzt.getSeconds(),
		        ms = jetzt.getMilliseconds();
		m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		ms = fuehrendeNullen(ms);
		tmp1.innerHTML = h + ':' + m + ':' + s + ':' + ms;
	  }
	  setTimeout(uhrzeit, 1);	
	}

	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}
	function fuehrendeNullen(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		zahl = (zahl < 100 ? '0' : '') + zahl;
		return zahl;
	}

	document.addEventListener('DOMContentLoaded', uhrzeit);
}());

let i=1;
document.body.addEventListener("click", event => {
  if (i == 1) {
    tmp.style.backgroundColor = "green"; i=0; window.navigator.vibrate(100);
  } else {
    tmp.style.backgroundColor = "yellow"; i=1; dat =  new Date() - dat;  
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
