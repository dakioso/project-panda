// Get the modal
var modal = document.getElementById('mymodal');

// Get the button that opens the modal
var reviewbutton = document.getElementById("openreview");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closereview")[0];


//attendance DOM
let attendance = document.getElementById("attendanceCode");
let errorA = document.getElementById("errorAttendance");
let attendanceReg = false;


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
    errorA.style.color = "red";
    errorA.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
    return errorA.innerText = "Du har redan anmält din närvaro.";
  }

  if(attendance.value == "1q2w3e") {
    errorA.innerText = "Din närvaro är nu registrerad.";
    errorA.style.color = "green";
    errorA.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
    attendanceReg = true;
  } else {
    errorA.innerText = "Fel närvarokod. Var god försök igen.";
    errorA.style.color = "red";
    errorA.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
  }
}

function addHideMe() {
  errorA.classList.add("hideMe");
}
