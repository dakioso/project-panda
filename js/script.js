// Javascript

// user-array with username & password.
let users = [
  {username: 'student', password: 'password1'},
  {username: 'teacher', password: 'password2'}
];

let button = document.getElementById('loginbutton');
let loginBox = document.getElementById('login-box');
let span = document.getElementsByClassName('close')[0];

button.onclick = function(){
  loginBox.style.display = 'block';
  button.style.color = "#ffa500";
  button.style.border = "1px solid #ffa500";
}

span.onclick = function(){
  loginBox.style.display = 'none';
  button.style.color = "#FFF";
  button.style.border = "1px solid #FFF";
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
