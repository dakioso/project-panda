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
    notif.style.color = "green";
    notif.style.borderColor ="green";
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

function addHideMe() {
  notif.classList.add("hideMe");
}
