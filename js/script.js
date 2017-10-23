// user-array with username & password.
let users = [
  {username: 'student', password: 'password1'},
  {username: 'teacher', password: 'password2'}
];

// login-button function opens and close login-box
let button = document.getElementById('loginbutton'),
    loginBox = document.getElementById('login-box'),
    span = document.getElementsByClassName('close')[0],
    hiddenLogin = true;
let error = document.getElementById("errorCode");
let attendance = document.getElementById("attendanceCode");
let errorA = document.getElementById("errorAttendance");



button.onclick = function(){
  if(hiddenLogin){
    loginBox.style.display = 'block';
    hiddenLogin = false;
  } else {
      loginBox.style.display = 'none';
      hiddenLogin = true;
  }
}

span.onclick = function(){
  loginBox.style.display = 'none';
  hiddenLogin = true;
  error.innerText = "";
}

// login function, directs the user to the right content.
function loginCheck(form){
  if(form.userId.value == '' || form.passwordId.value == ''){
    return error.innerText = "Var god fyll i alla fält.";
  }
  for(let i = 0; i < users.length; i++){
    if(form.userId.value === users[i].username && form.passwordId.value === users[i].password){
      if(form.userId.value === 'student'){
        return window.location.replace('student.html');
    } else if(form.userId.value === 'teacher'){
        return window.location.replace('?');
      }
    }
  }  error.innerText = "Fel användarnamn eller lösenord.";
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

// open the feature-box
let featureBox = document.getElementById('feature'),
    btn = document.getElementById("compare"),
    span1 = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  featureBox.style.display = "block";
}

span1.onclick = function() {
  featureBox.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == featureBox) {
    featureBox.style.display = "none";
  }
}

//navbar open and close.
function togNav() {
  var nav = document.getElementById("nav");
  if (nav.style.height == '100%') {
    nav.style.height = '0';
   // nav.style.opacity = 0;
  } else {
    nav.style.height = "100%";
   // nav.style.opacity = 1
 }
}
