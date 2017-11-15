// load line-chart api from google to daily line-graph
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCrosshairs);
// load Combo Chart api from google to course graph
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

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

// google line-chart function for daily graph
function drawCrosshairs() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', 'Hur känner du dig idag');
      data.addRows([ ["måndag 13/11\nAntal svar: 19", 2], ["tisdag 14/11\nAntal svar: 28", 3], ["onsdag 15/11\nAntal svar: 23", 2], ["torsdag 16/11\nAntal svar: 21", 4], ["fredag 17/11\nAntal svar: 31", 4] ]);

  var options = {
    colors: ['orange'],
    crosshair: {
    color: '#000',
    trigger: 'selection'
  }
};
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    chart.setSelection([{row: 5, column: 38}]);
}

// google combo-chart function for course graph
function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
         ['Month', 'Jättedåligt', 'Dåligt', 'Neutral', 'Bra', 'Jättebra'],
         ['Hur upplevde du tempot i denna kurs',  3, 4, 4, 6, 3],
         ['Hur svår upplevde du kursen',  3, 5, 3, 4, 2],
         ['Hur välplanerad var kursen under läsåret',  2, 3, 2, 6, 7],

      ]);

    var options = {
      title : 'Kursutvärdering',
      vAxis: {title: 'Antal svar'},
      hAxis: {title: 'Arbetsmetodik'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

// getElements for Canvas and optionlists
let chart_div = document.getElementById('chart_div'),
    chart_div_smileys = document.getElementById('smileys'),
    weeklyCanvas = document.getElementById('weeklyCanvas'),
    chart_div1 = document.getElementById('chart_div1'),
    courseOption = document.getElementById('courseOption'),
    weeklyResponse = document.getElementById('weeklyAnswers'),
    weekOption = document.getElementById('weekOption'),
    courseAnswers = document.getElementById('courseAnswers1');

// Weekly answers array with good and improvements from the students
let weekAnswer = [
  {week: 'v36', good: ['Stämningen i klassen', 'Bra att vi ska sätta igång med projektarbetet snart', 'Tobias och Kristian är kungar', 'Att vi har fått köra Codeschool och lära oss grunderna', 'Att lärarna lyssnar på oss elever'],
                improvement: ['Glassmaskin i köket', 'Mer specificerat, detaljerad förklaring på föreläsning', 'Jobbigt med dessa otydligheter i schemat. Det ändras hit och dit och på söndagkvällen kan det ibland vara oklart hur måndagen kommer att se ut', 'Mer specificerat, detaljerad förklaring på föreläsning', 'Toapapper måste fyllas på kontinuerligt, för nu kan det ibland vara slut']},
  {week: 'v37', good: ['Bra föreläsningar', 'Jag tycker att Codeschool är jättebra sätt att lära sig grunderna', 'Trevliga klasskamrater', 'Att ni lärare lyssnar på oss elever och vill förbättra för oss', 'Att hissen nu är lagad'],
                improvement: ['Allt, gör om gör rätt från början', 'Mer avancerade föreläsningar', 'Jag vill ha tydligare schema om vad lektionen ska handla om, så jag vet om jag ska behöva komma in eller inte', 'Ni lyssnar inte på oss elever', 'Tempot är alldeles för högt och jag känner att jag inte hänger med', 'Luften i stora klassrummet är jättedålig']},
  {week: 'v38', good: ['Tobias och Kristian e för jäkla bra', 'Nya glassmaskinen i köket är jättebra', 'Projektarbetet är ett jättebra sätt att lära sig', 'Hissen!!', 'Föreläsningarna har blivit toppen, mer avancerade och man kan livekoda med nu', 'Gruppindelningen för projektarbetet var jättebra', 'Kommunikationen har blivit mycket bättre, bra jobbat!'],
                improvement: ['Fixa en redbull-kyl till klassrummet', 'Kanske att Kristian kan ha mer livekodningar så man själv får hänga med', 'Dåligt städat på toaletten, skulle gärna vilja att dom städar oftare', 'Snabbare wifi', 'Tempot är galet högt och jag hinner inte med', 'Varför börjar vi inte skolan klockan 12 för istället, på tok för tidigt att börja klockan 9']},
  {week: 'v39', good: ['Våra innovation day på fredagar e svinkul', 'Den senaste föreläsning om Ecmascript 6 var bra', 'Tobias och Kristian', 'Luften i stora klassrummet har blivit mycket bättre', 'Allt är jättebra'],
                improvement: ['Fixa wifi det laggar', 'Jag tycker lärarna borde köra med mic så man hör längst bak', 'Det hade varit bra om det hade funnits flera grupprum med tv', 'Gratis SL kort som skolan står för', 'Vet ej']},
  {week: 'v40', good: ['Kristians kod-review var bra för att man fick feedback på sin kod', 'Allt e bra', 'Sköna klasskamrater', 'Fett bra uppstyrt på våra demodagar i arbetsmetodiken', 'Ni har verkligen fixat erat wifi, bra siffror på bredbandskollen.se'],
                improvement: ['Hur vore det om ni lyssnade på alla elever vad dom vill', 'Skönare stolar i klassrummet, typ riktiga kontorsstolar', 'Flera grenuttag så man kan ladda datorerna', 'Bättre uppdateringar i schemat, för nu kan det komma ändringar söndag kväll. Inte roligt tycker jag!']}

];

// Shows the optionlist for canvas

let attendance = document.getElementById("attendanceCode");
let notif = document.getElementById("notification");
let aCourse = document.getElementById("attendanceCourse");

//shows the canvas evaluation
let showBox = function(box){

  if(box == 'daglig'){
      chart_div.style.display = 'flex';
      chart_div_smileys.style.display = 'block';
      weeklyCanvas.style.display = 'none';
      chart_div1.style.display = 'none';
      courseOption.style.display = 'none';
      weeklyAnswers1.style.display = 'none';
      weekOption.style.display = 'none';
      courseAnswers1.style.display = 'none';
  } else if(box == 'vecko'){
      weeklyCanvas.style.display = 'flex';
      weekOption.style.display = 'block';
      chart_div1.style.display = 'none';
      courseOption.style.display = 'none';
      courseAnswers1.style.display = 'none';
      chart_div.style.display = 'none';
      chart_div_smileys.style.display = 'none';
      return drawWeek();
  } else if(box == 'kurs'){
      chart_div1.style.display = 'flex';
      chart_div1.style.visibility = 'visible';
      chart_div1.style.right = 'unset';
      chart_div1.style.position = 'unset';
      courseOption.style.display = 'block';
      chart_div.style.display = 'none';
      chart_div_smileys.style.display = 'none';
      weeklyCanvas.style.display = 'none';
      weeklyAnswers1.style.display = 'none';
      weekOption.style.display = 'none';
  }
}

function drawWeek(){
  let canvasAreaWeekly = document.getElementById('weeklyCanvas'),
      week = canvasAreaWeekly.getContext('2d'),
      result = canvasAreaWeekly.getContext('2d'),
      graphInfo = canvasAreaWeekly.getContext('2d'),
      lines = canvasAreaWeekly.getContext('2d'),
      red = canvasAreaWeekly.getContext('2d'),
      blue = canvasAreaWeekly.getContext('2d'),
      yellow = canvasAreaWeekly.getContext('2d'),
      green = canvasAreaWeekly.getContext('2d');

      week.save();
      week.fillStyle = '#292929';
      week.font = 'bold 16px Lato, sans-serif';
      week.fillText('Vecka' , 15, 390)
      let weekXvalue = 100;
        for(let i = 36; i < 46; i++){ // print out weeknumber 36 - 45
          week.fillText(i, weekXvalue, 390);
            weekXvalue += 50;
        }
      week.restore();

      result.save();
      result.fillStyle = '#292929';
      result.font = '16px Lato, sans-serif';
      result.fillText('Dåligt', 15, 370);
      result.fillText('1', 15, 340);
      result.fillText('2', 15, 290);
      result.fillText('3', 15, 240);
      result.fillText('4', 15, 190);
      result.fillText('5', 15, 140);
      result.fillText('Bra', 15, 110);
      result.restore();

      graphInfo.save();
      graphInfo.fillStyle = '#292929';
      graphInfo.font = 'bold 16px Lato, sans-serif';
      graphInfo.fillText('Hur upplever du', 30, 20);
      graphInfo.fillText('tempot just nu', 30, 35);

      graphInfo.fillText('Hur upplever du', 160, 20);
      graphInfo.fillText('nivån på innehållet', 160, 35);

      graphInfo.fillText('Hur upplever du', 305, 20);
      graphInfo.fillText('trivseln i klassen', 305, 35);

      graphInfo.fillText('Hur upplever du', 445, 20);
      graphInfo.fillText('föreläsningarna', 445, 35);

      graphInfo.fillStyle = 'red';
      graphInfo.fillRect(45, 50, 50, 15);

      graphInfo.fillStyle = 'blue';
      graphInfo.fillRect(185, 50, 50, 15);

      graphInfo.fillStyle = '#e6e600';
      graphInfo.fillRect(330, 50, 50, 15);

      graphInfo.fillStyle = 'green';
      graphInfo.fillRect(470, 50, 50, 15);
      graphInfo.restore();

      lines.save();
      lines.fillStyle = "rgba(41, 41, 41, 0.5)";
      lines.lineWidth = 0.2;

      let yValue = 335;
      for(let i = 0; i < 9; i++){ //print out 9 vertical lines
        lines.beginPath();
        lines.moveTo(30, yValue);
        lines.lineTo(600, yValue);
        lines.stroke();
        yValue -= 25;
      }
        lines.restore();

        red.save();
        red.strokeStyle='red';
        red.lineWidth = 2;
        red.beginPath();
        red.moveTo(110, 285);
        red.lineTo(160, 235);
        red.lineTo(205, 260);
        red.lineTo(255, 185);
        red.lineTo(305, 210);
        red.lineTo(355, 185);
        red.lineTo(405, 185);
        red.lineTo(455, 210);
        red.lineTo(505, 185);
        red.lineTo(560, 135);
        red.stroke();
        red.restore();

        blue.save();
        blue.strokeStyle='blue';
        blue.lineWidth = 2;
        blue.beginPath();
        blue.moveTo(110, 235);
        blue.lineTo(160, 185);
        blue.lineTo(205, 210);
        blue.lineTo(255, 185);
        blue.lineTo(305, 195);
        blue.lineTo(355, 210);
        blue.lineTo(405, 189);
        blue.lineTo(455, 200);
        blue.lineTo(505, 235);
        blue.lineTo(560, 174);
        blue.stroke();
        blue.restore();

        yellow.save();
        yellow.strokeStyle='#e6e600';
        yellow.lineWidth = 2;
        yellow.beginPath();
        yellow.moveTo(110, 185);
        yellow.lineTo(160, 189);
        yellow.lineTo(205, 205);
        yellow.lineTo(255, 135);
        yellow.lineTo(305, 175);
        yellow.lineTo(355, 175);
        yellow.lineTo(405, 189);
        yellow.lineTo(455, 175);
        yellow.lineTo(505, 210);
        yellow.lineTo(560, 275);
        yellow.stroke();
        yellow.restore();

        green.save();
        green.strokeStyle='green';
        green.lineWidth = 2;
        green.beginPath();
        green.moveTo(110, 310);
        green.lineTo(160, 300);
        green.lineTo(205, 300);
        green.lineTo(255, 285);
        green.lineTo(305, 235);
        green.lineTo(355, 235);
        green.lineTo(405, 210);
        green.lineTo(455, 185);
        green.lineTo(505, 160);
        green.lineTo(560, 155);
        green.stroke();
        green.restore();
}

// Return the right week and pass in good and improvements to pushWeek function
function checkWeek(value){
  for(let i = 0, x = weekAnswer.length; i < x; i++){
    if(value == weekAnswer[i].week ){
    return pushWeek(weekAnswer[i].good, weekAnswer[i].improvement);
    }
  }
}

// create answer fragment from weekAnswer array
function pushWeek(good, improvement){

  let showWeeklyAnswer = document.getElementById('weeklyAnswers1'),
      fragment = document.createDocumentFragment(),
      element1;

      showWeeklyAnswer.style.display = 'block';
      showWeeklyAnswer.innerHTML = "";
      element1 = document.createElement('h2');
      element1.appendChild(document.createTextNode('Vad har varit bra'));
      fragment.appendChild(element1);

// create fragment with answers from good array
  for(let i = 0, x = good.length; i < x; i++){
        let element = document.createElement('li');
        element.appendChild(document.createTextNode(good[i]));
        fragment.appendChild(element);
      }
        let element2 = document.createElement('h2');
            element2.appendChild(document.createTextNode('Förbättringar'));
            fragment.appendChild(element2);

// create fragment with answers from improvement arrray
  for(let i = 0, x = improvement.length; i < x; i++){
        let elements = document.createElement('li');
            elements.appendChild(document.createTextNode(improvement[i]));
            fragment.appendChild(elements);
  }
            showWeeklyAnswer.appendChild(fragment);
}



// Get the modal
var modal = document.getElementById('modalteacher');

// Get the button that opens the modal
var taskbutton = document.getElementById("opentask");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closetask")[0];



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

function teacherinput() {
  	modal.style.display = "none";
	   notif.innerText = "Uppgifterna är nu tillagda.";
    notif.style.color = '#3dd43d';
    notif.style.borderColor ="#3dd43d";
    setInterval(addHideMe, 5000);
    dailyInvoke = true;
}
// Generates a random number for attendance
function numGen() {
let i = attendanceCourse.selectedIndex;
let randomAttendance = Math.random().toString(36).substr(2, 6);
    notif.innerText = "Närvarokod genererad för lektion: " + attendanceCourse.options[i].text + ".";
    notif.style.color = "#3dd43d";
    notif.style.borderColor ="#3dd43d";
    notif.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
  return attendanceCode.value = randomAttendance;

}

function addHideMe() {
  notif.classList.add("hideMe");
}

function clearAttendance() {
  attendanceCode.value = "";
}
function showCourseBox(value){
  if(value == 'arbetsmetodik'){
    courseAnswers.style.display = 'block';
  }
}



function visanärvarolista() {
   document.getElementById('närvaro-hidden').style.display = "block";
}
