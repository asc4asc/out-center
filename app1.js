"use strict";  

// refactoring code!
let tmp=document.querySelector("body");
let tmp1=document.querySelector("clock");
let dat=new Date();
let dat1=new Date();
let dat2=new Date();
let datms1=dat.getTime();
    datms1=datms1-1000*60*59;
let datms2=dat.getTime();
let datms3=dat.getTime();

tmp.style.backgroundColor = "blue";

(function () {
  	function uhrzeit() {
	  var datms6 = datms1 - datms2 + 1000*60*60;
	  if ( datms6 < 0 ) { datms3= 0; }	
          if (i == 1) {	// display
		dat = new Date();  // if dat=0 do not set it!
		datms2 = dat.getTime(); 
		dat.setTime( datms1 - datms2 );   
		if ( datms3 == 0 ) {
		  var h=0; 
		  var m=0; 
		  var s=0; 
		  var ms=0;
		} else {
		  if ( sw1 > 0 ) { 
	            var jetzt = dat; // new Date(); //
		    var h = jetzt.getHours(); 
		    var m = jetzt.getMinutes();
		    var s = jetzt.getSeconds();
		    var ms = jetzt.getMilliseconds(); 
		  } else {
		    var h=0; 
		    var m=1; 
		    var s=0; 
		    var ms=0;  
		  }   		
		}
		if ( m < 1 && s < 10 ) { tmp.style.backgroundColor = "red"; }
		// put data out!  
		// m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		ms = fuehrendeNullen(ms);
		// tmp1.innerHTML = h + ':' + m + ':' + s + ':' + ms;
		tmp1.innerHTML = m + ':' + s + ':' + ms; // display only what is needed.
	  } 
	  if ( datms3 == 0 ) { i= 0; }		
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
// openFullscreen();
// set starttime display it and wait for click/touch
datms3 = 0;
let sw1 = 1;

document.body.addEventListener("click", event => {
  sw1 = 0;	
  if (i == 1) {
    tmp.style.backgroundColor = "green"; 
    i=0; 
    // window.navigator.vibrate(1000);
  } else {
    tmp.style.backgroundColor = "yellow";
    i=1; 
    dat2 = new Date();
	  
    datms2 = dat2.getTime(); 
    var datms4 = datms1 - datms2 + 1000*60*60; 
    // var datms5 = datms2 - datms1 + 1000*60*60; no use?  
  
    if ( datms4 > 0 ) {	  
      datms3 = datms1 - datms2 ;  
    }
    else {
      datms3 = 0 ;
    }
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
