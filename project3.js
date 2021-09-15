/*
        espace
        , 
       () => { }
*/

const star = document.getElementById("star");
const stop = document.getElementById("stop");
const restar = document.getElementById("restar");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mill = document.getElementById("mill");
let isec = 1;
let imin = 1;
let ihour = 1;
let imill = 1;

// star.addEventListener("click", (eo) => {
//         var myhhh = setInterval(hhh, 1000);
// });











function hhh() {
  // mill
  if (imill < 10) {
    mill.innerText = `0${imill}`;
  } else {
    mill.innerText = imill;
  }

  imill++;
  if (imill  > 99) {
    console.log("yes");
    imill = 0;
    // second
    if (isec < 10) {
      sec.innerText = `0${isec}`;
    } else {
      sec.innerText = isec;
    }

    isec++;
    
    if (isec > 59) {
     
        isec = 0;
    
    
      // minute
      if (imin < 10) {
        min.innerText = `0${imin}`;
      } else {
        min.innerText = imin;
      }

      imin++;
      if (imin > 59) {
        imin = 0;

        // hour
        if (ihour < 10) {
          hour.innerText = `0${ihour}`;
        } else {
          hour.innerText = ihour;
        }

        ihour++;
      }
    }
  }
}

restar.setAttribute("disabled","");
restar.addEventListener("click", (eo) => {
 imill=0
 isec=0
 imin=1
 ihour=0
 mill.innerText="00"
 sec.innerText="00"
 min.innerText="00"
 hour.innerText="00"
 crono.classList.remove("loop");
 restar.setAttribute("disabled","");
});

var myhhh;
function mmm() {
  clearInterval(myhhh);
}
function loops() {
  crono.classList.add("loop");
}
const part = document.getElementById("part");
const crono = document.getElementById("crono");

part.addEventListener("click", (eo) => {
  if (eo.target.className == "starname") {
    myhhh = setInterval(hhh, 10);
    star.setAttribute("disabled","");
    stop.removeAttribute("disabled");
    restar.setAttribute("disabled","");
    crono.classList.remove("loop");
    console.log("wow");
  }
  if (eo.target.className == "stopname") {
    eo.target.onclick = mmm();

    star.removeAttribute("disabled");
    stop.setAttribute("disabled","");
    restar.removeAttribute("disabled");
    setTimeout(loops, 300);
  }
});

