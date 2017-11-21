// user-array with username & password.
let users = [
  {username: 'student', password: 'password1'},
  {username: 'lärare', password: 'password2'},
  {username: 'admin', password:'password3'}
];

// login-button function opens and close login-box
let button = document.getElementById('loginbutton'),
    loginBox = document.getElementById('login-box'),
    span = document.getElementsByClassName('close')[0],
    hiddenLogin = true;

// login errorcode
let error = document.getElementById("errorCode");

button.onclick = function(){
  if(hiddenLogin){
    loginBox.style.display = 'block';
    hiddenLogin = false;
    document.getElementById("userField").focus();
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
    } else if(form.userId.value === 'lärare'){
        return window.location.replace('teacher.html');
      }
      else if(form.userId.value === 'admin'){
          return window.location.replace('admin.html');
        }
    }
  }  error.innerText = "Fel användarnamn eller lösenord.";
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
