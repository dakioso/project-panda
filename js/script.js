// Javascript

// user-array with username & password.
let student = {username: 'student', password: 'password1'};
let teacher = {username: 'teacher', password: 'password2'};

let users = [student, teacher];

// login function, directs the user to the right content.
function loginChecker(form){
  if(form.userid.value == '' || form.passwordid.value == ''){
    return alert('Sorry there are empty fields');
  }
  for(let i = 0; i < users.length; i++){
    if(form.userid.value === users[i].username && form.passwordid.value === users[i].password){
      if(form.userid.value === 'student'){
        return window.location.replace('student.html');
    } else if(form.userid.value === 'teacher'){
        return window.location.replace('?');
      }
    }
  }  alert('Sorry invalid username or password');
}

let button = document.getElementById("loginBtn");
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];

// onclick button to log in, shows the login modal
button.onclick = function() {
  modal.style.display = "block";
}

// Close the login box if user click x or outside loginbox
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
        modal.style.display = "none";
  }
}
