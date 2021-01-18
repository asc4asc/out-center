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
let i=0; // switch beetween start and stop counter.

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

document.body.addEventListener("click", event => {
   switch (i) {
    case 0:
      tmp.style.backgroundColor = "green"; 
      datms1 = 1000*60*3 ; 
      timeMe(datms1);
      break;
    case 1:
      tmp.style.backgroundColor = "red";
      datms1 = 0 ;  
      timeMe(datms1); 
      break;
    default:
      tmp.style.backgroundColor = "yellow"; 
      datms1 = 111 ; 
      timeMe(datms1);
      i=-1;
   }
   i=i+1;
});

var elem = document.documentElement;
dat = new Date();
datms1 = 1000*60*9;  
timeMe(datms1);
