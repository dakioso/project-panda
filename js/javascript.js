// Get the modal
var modal = document.getElementById('mymodal');

// Get the button that opens the modal
var reviewbutton = document.getElementById("openreview");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closereview")[0];


//attendance DOM
let attendance = document.getElementById("attendanceCode");
let errorA = document.getElementById("errorAttendance");



// When the user clicks the button, open the modal
reviewbutton.onclick = function() {
modal.style.display = "block";

// daily vote dom
let answers = document.getElementById('answers'),
    happy = document.getElementById('happyF'),
    okey = document.getElementById('neutralF'),
    sad = document.getElementById('sadF'),
    dailyInvoke = false;

// When the user clicks the button, open the modal
btn.onclick = function() {
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
  if(attendance.value == "1q2w3e") {
    errorA.innerText = "Din närvaro är nu registrerad.";
    errorA.style.color = "green";
    errorA.classList.add("hideMe");
  } else {
    errorA.innerText = "Fel närvarokod. Var god försök igen.";
    errorA.style.color = "red";
    errorA.classList.add("hideMe");
  }
}

// Print out the daily evaluation
function printMess(face){
  answers.style.display = 'flex';

  if(dailyInvoke){
    answers.classList.remove("hideMe");
    answers.style.color = 'red';
    return answers.innerHTML = "Din dagliga utvärdering är redan avklarad.";
  }

  switch(face){
    case 'Nöjd':
      answers.innerHTML = face + " gubbe<br> Tack för din åsikt.";
      answers.style.color = '#00cc00';
      okey.style.filter = 'grayscale(100%)';
      sad.style.filter = 'grayscale(100%)';
      answers.classList.add('hideMe');
        dailyInvoke = true;
        break;

    case 'Neutral':
      answers.innerHTML = face + " gubbe<br> Tack för din åsikt.";
      answers.style.color = '#e6e600';
      happy.style.filter = 'grayscale(100%)';
      sad.style.filter = 'grayscale(100%)';
      answers.classList.add('hideMe');
        dailyInvoke = true;
        break;

    case 'Missnöjd':
      answers.innerHTML = face + " gubbe<br> Tack för din åsikt.";
      answers.style.color = '#e60000';
      happy.style.filter = 'grayscale(100%)';
      okey.style.filter = 'grayscale(100%)';
      answers.classList.add('hideMe');
        dailyInvoke = true;
        break;
  }
}
