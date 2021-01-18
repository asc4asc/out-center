"use strict";  

// refactoring code! Better var names, less global vars!
const CountTime= 3; // examole 1 min
const WarnTime= 5; // example 10 seconds

const EndTime = 1000*60*60; 
const StartTime= 1000*60*(60-CountTime);  

let tmp=document.querySelector("body");
let tmp1=document.querySelector("clock");

let dat=new Date(); // init var only for cases that something go wrong?
let datms1=dat.getTime()-StartTime;
let sw1 = 1; // switch1 is start count time.
let i=1; // switch beetween start and stop counter.

let datms2=dat.getTime(); // temp var for time? why?
// let datms3=dat.getTime(); // globale end time. if 0 stop.
let datms3 = 0;

tmp.style.backgroundColor = "blue";

function timeMe(datms1) {
  dat.setTime( datms1 ); 
  var h = dat.getHours(); 
  var m = dat.getMinutes();
  var s = dat.getSeconds();
  var ms = dat.getMilliseconds(); 
        
  // m = fuehrendeNull(m);
  s = fuehrendeNull(s);
  ms = fuehrendeNullen(ms);
  // tpm1.innerHTML = h + ':' + m + ':' + s + ':' + ms;
  tmp1.innerHTML = m + ':' + s + ':' + ms; // display only what is needed.		
  
  function fuehrendeNull(zahl) {
    zahl = (zahl < 10 ? '0' : '') + zahl;
    return zahl;
  }
  function fuehrendeNullen(zahl) {
    zahl = (zahl < 10 ? '0' : '') + zahl;
    zahl = (zahl < 100 ? '0' : '') + zahl;
    return zahl;
  }
} 
	  
	
//  document.addEventListener('DOMContentLoaded', timeMe);
// }());

document.body.addEventListener("click", event => {
  if ( sw1 > 0 ) {	  
    datms1 = 100*60*60 ;  
    timeMe(datms1);
  }
  sw1 = 0;	
  if (i == 1) {
    tmp.style.backgroundColor = "green"; 
    i=0;
    datms1 = 100*60*40 ; 
    timeMe(datms1);
    // window.navigator.vibrate(1000);
  } else {
    tmp.style.backgroundColor = "yellow";
    i=1; 
    datms1 = 1000 ;  
    timeMe(datms1); 
  }
});

var elem = document.documentElement;
dat = new Date();
datms1 = 1000*60;  
timeMe(datms1);
