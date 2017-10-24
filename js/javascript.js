// Get the modal
var modal = document.getElementById('mymodal');

// Get the button that opens the modal
var reviewbutton = document.getElementById("openreview");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closereview")[0];

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
