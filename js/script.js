// user-array with username & password.
let users = [
  {username: 'student', password: 'password1'},
  {username: 'teacher', password: 'password2'}
];

let button = document.getElementById('loginbutton'),
    loginBox = document.getElementById('login-box'),
    span = document.getElementsByClassName('close')[0];

button.onclick = function(){
  loginBox.style.display = 'block';
}

span.onclick = function(){
  loginBox.style.display = 'none';
}


// login function, directs the user to the right content.
function loginCheck(form){
  if(form.userId.value == '' || form.passwordId.value == ''){
    return alert('Sorry there are empty fields');
  }
  for(let i = 0; i < users.length; i++){
    if(form.userId.value === users[i].username && form.passwordId.value === users[i].password){
      if(form.userId.value === 'student'){
        return window.location.replace('student.html');
    } else if(form.userId.value === 'teacher'){
        return window.location.replace('?');
      }
    }
  }  alert('Sorry invalid username or password');
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

let featureBox = document.getElementById('feature'),
    btn = document.getElementById("compare"),
    span1 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    featureBox.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    featureBox.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == featureBox) {
        featureBox.style.display = "none";
    }
}
