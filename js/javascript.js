// Get the modal
var modal = document.getElementById('mymodal');

// Get the button that opens the modal
var reviewbutton = document.getElementById("openreview");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closereview")[0];


//attendance DOM
let attendance = document.getElementById("attendanceCode");
let attendanceReg = false;
let notif = document.getElementById("notification");


// When the user clicks the button, open the modal
reviewbutton.onclick = function() {
modal.style.display = "block";
}

// daily vote dom
let happy = document.getElementById('happyF'),
    okey = document.getElementById('neutralF'),
    sad = document.getElementById('sadF'),
    dailyInvoke = false;


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

  function togNav() {
  var nav = document.getElementById("nav");
  if (nav.style.height == '100%') {
    nav.style.height = '0';
  } else {
    nav.style.height = "100%";
  }
}



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

function utvard() {
  	modal.style.display = "none";
	   notif.innerText = "Tack för din åsikt.";
    notif.style.color = '#3dd43d';
    notif.style.borderColor ="#3dd43d";
    setInterval(addHideMe, 5000);
    dailyInvoke = true;
}


