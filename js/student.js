/*------------------------------------------------------------------------
                 Popup-box (Weekly Review) & (assignments) 
------------------------------------------------------------------------*/
// Popup-box Weekly Review
var Reviewbox = document.getElementById('Reviewbox');

// IMG button to open  Popup-box Weekly Review
var reviewbutton = document.getElementById("openreview");

// Get the <span> element that closes the modal
var closereviewbox = document.getElementsByClassName("closereview")[0];

// When the user clicks on (x), close the Popup-box
closereviewbox.onclick = function() {
    Reviewbox.style.display = "none";
}

// When the user clicks the button, open the Reviewbox
reviewbutton.onclick = function() {
Reviewbox.style.display = "block";
}
// When the user clicks anywhere outside of the Reviewbox, close it
window.onclick = function(event) {
    if (event.target == Reviewbox) {
        Reviewbox.style.display = "none";
    }
}

// When the user send review, show input
function reviewinput() {
  	Reviewbox.style.display = "none";
	notif.innerText = "Tack för din åsikt.";
    notif.style.color = '#3dd43d';
    notif.style.borderColor ="#3dd43d";
    setInterval(addHideMe, 5000);
    dailyInvoke = true;
}
/*------------------------------------------------------------------------*/

//  Popup-box Weekly Review
var Assigmentbox = document.getElementById('Assigmentbox');

// navbar button to open Popup-box Assigment
var openAssigment = document.getElementById("opentask");

// Get the <span> element that closes the Assigmentbox
var closeAssigment = document.getElementsByClassName("closetask")[0];


// When the user clicks the button, open the Assigmentbox
 openAssigment.onclick = function() {
 Assigmentbox.style.display = "block";
}

// When the user clicks on <span> (x), close the Assigmentbox
 closeAssigment.onclick = function() {
 Assigmentbox.style.display = "none";
}

// When the user clicks anywhere outside of the Assigmentbox, close it
window.onclick = function(event) {
    if (event.target == Assigmentbox) {
        Assigmentbox.style.display = "none";
    }
}
// Input when user send/add assigment,show input
function teacherinput() {
  	Assigmentbox.style.display = "none";
	   notif.innerText = "Uppgifterna är nu tillagda.";
    notif.style.color = '#3dd43d';
    notif.style.borderColor ="#3dd43d";
    setInterval(addHideMe, 5000);
    dailyInvoke = true;
}

/*------------------------------------------------------------------------
                Popup-box (Weekly Review) & (assignments)  END
------------------------------------------------------------------------*/
  
 // Navbar 
  function togNav() {
  var nav = document.getElementById("nav");
  if (nav.style.height == '100%') {
    nav.style.height = '0';
  } else {
    nav.style.height = "100%";
  }
}

//attendance DOM
let attendance = document.getElementById("attendanceCode");
let attendanceReg = false;
let notif = document.getElementById("notification");

// daily vote dom
let happy = document.getElementById('happyF'),
    okey = document.getElementById('neutralF'),
    sad = document.getElementById('sadF'),
    dailyInvoke = false;

// Checks the attandance code, if correct then register attendance
function attendanceCheck() {
  if(attendanceReg) {
    notif.style.color = "red";
    notif.style.borderColor ="red";
    notif.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
    return notif.innerText = "Du har redan anmält din närvaro.";
  }

  if(attendance.value == "1q2w3e") {
    notif.innerText = "Din närvaro är nu registrerad.";
    notif.style.color = "#3dd43d";
    notif.style.borderColor ="#3dd43d";
    notif.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
    attendanceReg = true;
  } else {
    notif.innerText = "Fel närvarokod. Var god försök igen.";
    notif.style.color = "red";
    notif.style.borderColor ="red";
    notif.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
  }
}

// Print out the daily evaluation
function printMess(face){


  if(dailyInvoke){
    notif.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
    notif.style.color = 'red';
    notif.style.borderColor ="red";
    return notif.innerHTML = "Din dagliga utvärdering är redan avklarad.";
  }

  switch(face){
    case 'Nöjd':
      notif.innerHTML = "Tack för din åsikt.";
      notif.style.color = '#3dd43d';
      notif.style.borderColor ="#3dd43d";
      okey.style.filter = 'grayscale(100%)';
      sad.style.filter = 'grayscale(100%)';
      notif.classList.remove('hideMe');
      setInterval(addHideMe, 1000);
        dailyInvoke = true;
        break;

    case 'Neutral':
      notif.innerHTML = "Tack för din åsikt.";
      notif.style.color = '#3dd43d';
      notif.style.borderColor ="#3dd43d";
      happy.style.filter = 'grayscale(100%)';
      sad.style.filter = 'grayscale(100%)';
      notif.classList.remove('hideMe');
      setInterval(addHideMe, 1000);
        dailyInvoke = true;
        break;

    case 'Missnöjd':
      notif.innerHTML = "Tack för din åsikt.";
      notif.style.color = '#3dd43d';
      notif.style.borderColor ="#3dd43d";
      happy.style.filter = 'grayscale(100%)';
      okey.style.filter = 'grayscale(100%)';
      notif.classList.remove('hideMe');
      setInterval(addHideMe, 1000);
        dailyInvoke = true;
        break;
  }
}

function addHideMe() {
  notif.classList.add("hideMe");

}


