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
