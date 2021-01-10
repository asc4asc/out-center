"use strict";  

let tmp=document.querySelector("body");
let tmp1=document.querySelector("clock");
let dat=new Date();
let dat1=new Date();
let dat2;
let datms1=dat.getTime();
let datms2=dat.getTime();

tmp.style.backgroundColor = "blue";


(function () {
  	function uhrzeit() {
          if (i == 1) {	
		dat = new Date();  
		datms2 = dat.getTime();  
		dat.setTime( datms1 - datms2 );   
		var jetzt = dat; // new Date(); //
		var h = jetzt.getHours(); 
		var m = jetzt.getMinutes();
		var s = jetzt.getSeconds();
		var ms = jetzt.getMilliseconds();
		m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		ms = fuehrendeNullen(ms);
		tmp1.innerHTML = h + ':' + m + ':' + s + ':' + ms;
	  }
	  // check it time is gone? Set timer to display to zero. 
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
    tmp.style.backgroundColor = "green"; 
    i=0; 
    window.navigator.vibrate(1000);
  } else {
    tmp.style.backgroundColor = "yellow";
    i=1; 
    dat2 = new Date();
    datms1=dat1.getTime()-1000*60*59; // Set countdown time to 1 min  
    datms2=dat2.getTime(); 	  
    dat.setTime( datms1 - datms2 );  
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
