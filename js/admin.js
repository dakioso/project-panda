var fnamntest = document.getElementById("fnamn");
var enamn = document.getElementById("enamn");
var datum = document.getElementById("datum");
var anvnamn = document.getElementById("anvnamn");
var lösen = document.getElementById("lösen");

let notif = document.getElementById("notification");

function reg() {
  fnamntest.value = "";
  enamn.value = "";
  datum.value = "";
  anvnamn.value = "";
  lösen.value = "";
  notif.innerText = "Ny användare skapad!";
  notif.style.color = "#3dd43d";
  notif.style.borderColor ="#3dd43d";
  notif.classList.remove("hideMe");
  setInterval(addHideMe, 1000);
}



function addHideMe() {
  notif.classList.add("hideMe");

}
