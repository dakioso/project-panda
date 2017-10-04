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
        return window.location.replace('courses.html');
    } else if(form.userId.value === 'teacher'){
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


//JQUERY FUNCTION. ADD STICKY CLASS TO #NAVBAR WHEN SCROLLING
(function($) {
    "use strict";

    var $navbar = $("#navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos) {
            $navbar.addClass("sticky").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("sticky").clearQueue().animate({
                top: "-48px"
            }, 0);
        }
    });

})(jQuery, undefined);
