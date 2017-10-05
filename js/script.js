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
        return window.location.replace('?');
    } else if(form.userid.value === 'teacher'){
        return window.location.replace('?');
      }
    }
  }  alert('Sorry invalid username or password');
}
