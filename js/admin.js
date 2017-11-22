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


// Get the modal
var modal = document.getElementById('modaladmin');

// Get the button that opens the modal
var taskbutton = document.getElementById("opentask");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeadminform")[0];



// When the user clicks the button, open the modal
taskbutton.onclick = function() {
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
function admininput() {
  	modal.style.display = "none";
	   notif.innerText = "Utvärderingen är nu tillagd.";
    notif.style.color = '#3dd43d';
    notif.style.borderColor ="#3dd43d";
    setInterval(addHideMe, 5000);
    dailyInvoke = true;
}

let formen = document.getElementById('addQuestion');
let listan = document.getElementById('items');


// formen submit event
formen.addEventListener('submit', addItem);
// Delete event
listan.addEventListener('click', tabortsvar);


// Add item
function addItem(event){
  event.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // Create new li element
  let tr = document.createElement('tr');
  // Add text node with input value
  tr.appendChild(document.createTextNode(newItem));

  // Create del button element
  let tabortsvar = document.createElement('button');

  // Add classes to del button
  tabortsvar.className = "delete";

  // Append text node
  tabortsvar.appendChild(document.createTextNode("X"));

  // Append button to li
  tr.appendChild(tabortsvar);

  // Append li to list
  listan.appendChild(tr);
}

// Remove item
function tabortsvar(event){
  if(event.target.classList.contains("delete")){
    if(confirm("Är du saker att du vill radera svaret?")){
      let li = event.target.parentElement;
      listan.removeChild(li);
    }
  }
}




let form = document.getElementById('addoption');
let itemList = document.getElementById('options');


// Form submit event
form.addEventListener('submit', addoption);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addoption(event){
  event.preventDefault();

  // Get input value
  let newItem = document.getElementById('submitaddoptions').value;

  // Create new li element
  let tr = document.createElement('tr');
  // Add text node with input value
  tr.appendChild(document.createTextNode(newItem));

  // Create del button element
  let removeAnswer = document.createElement('button');

  // Add classes to del button
  removeAnswer.className = "delete";

  // Append text node
  removeAnswer.appendChild(document.createTextNode("X"));

  // Append button to li
  tr.appendChild(removeAnswer);

  // Append li to list
  itemList.appendChild(tr);

}

// Remove item
function removeItem(event){
  if(event.target.classList.contains("delete1")){
    if(confirm("Är du saker att du vill radera svaret?")){
      let li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Get the modal
var modaladminchange = document.getElementById('modaladminchange');

// Get the button that opens the modal
var openadminchange = document.getElementById("openadminchange");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closechangeform")[0];



// When the user clicks the button, open the modal
openadminchange.onclick = function() {
modaladminchange.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modaladminchange.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modaladminchange) {
        modaladminchange.style.display = "none";
    }
}

function adminchangeinput() {
  	modaladminchange.style.display = "none";
	   notif.innerText = "Veckoutvärding Uppdaterad!";
    notif.style.color = '#3dd43d';
    notif.style.borderColor ="#3dd43d";
    setInterval(addHideMe, 5000);
    dailyInvoke = true;
}

let addAdminchange = document.getElementById('sven');
let addAdminchangelist = document.getElementById('items1');


// addAdminchange submit event
addAdminchange.addEventListener('submit', addchangeitem);
// Delete event
addAdminchangelist.addEventListener('click', removechangeanswer);


// Add item
function addchangeitem(event){
  event.preventDefault();

  // Get input value
  let newItem = document.getElementById('item1').value;

  // Create new li element
  let li = document.createElement('li');
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  let removechangeanswer = document.createElement('button');

  // Add classes to del button
  removechangeanswer.className = "delete1";

  // Append text node
  removechangeanswer.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(removechangeanswer);

  // Append li to list
  addAdminchangelist.appendChild(li);
}

// Remove item
function removechangeanswer(event){
  if(event.target.classList.contains("delete1")){
    if(confirm("Är du saker att du vill radera svaret?")){
      let li = event.target.parentElement;
      addAdminchangelist.removeChild(li);
    }
  }
}




let form2 = document.getElementById('addoption1');
let itemlistAdmin = document.getElementById('options1');



form2.addEventListener('submit', addoption1);

itemlistAdmin.addEventListener('click', removeItem);



function addoption1(event){
  event.preventDefault();

  let newItem = document.getElementById('submitaddoptions1').value;

  let li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  let removeAnswer = document.createElement('button');
  removeAnswer.className = "delete1";

  removeAnswer.appendChild(document.createTextNode("X"));

  li.appendChild(removeAnswer);

  itemlistAdmin.appendChild(li);

}

function removeItem(event){
  if(event.target.classList.contains("delete1")){
    if(confirm("Är du saker att du vill radera svaret?")){
      let li = event.target.parentElement;
      itemlistAdmin.removeChild(li);
    }
  }
}

