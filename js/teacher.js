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

let dailySurvey = [
  {day: 'måndag', survey: ['bra', 'bra', 'dåligt','bra', 'bra', 'bra', 'dåligt', 'neutral', 'bra', 'neutral', 'bra', 'bra', 'bra', 'dåligt']},
  {day: 'tisdag', survey: ['dåligt', 'bra', 'neutral', 'bra', 'bra', 'bra', 'dåligt', 'neutral', 'neutral', 'dåligt', 'bra', 'dåligt', 'neutral', 'dåligt', 'bra']},
  {day: 'onsdag', survey: ['neutral', 'dåligt', 'bra', 'neutral', 'neutral', 'dåligt', 'dåligt', 'neutral', 'dåligt', 'bra', 'dåligt', 'bra', 'neutral', 'bra', 'dåligt', 'neutral', 'neutral', 'dåligt', 'bra', 'dåligt' ]},
  {day: 'torsdag', survey: ['dåligt', 'neutral', 'dåligt', 'dåligt', 'neutral', 'dåligt', 'bra', 'dåligt', 'neutral', 'dåligt', 'bra', 'dåligt', 'neutral', 'neutral', 'dåligt', 'bra', 'dåligt']},
  {day: 'fredag', survey: ['bra','dåligt', 'bra', 'dåligt', 'bra', 'bra', 'bra','dåligt', 'neutral', 'dåligt', 'bra', 'neutral', 'neutral', 'dåligt', 'dåligt', 'neutral', 'dåligt']}
];

let attendance = document.getElementById("attendanceCode");
let notif = document.getElementById("notification");


/*
let showSurveyButton = document.getElementById('surveybutton');
showSurveyButton.addEventListener('click', show);
*/
let show = function(){
  document.getElementsByClassName('canv')[0].style.display = 'flex';
}

let showBox = function(box){
  let survey = document.getElementById('myCanvas');

  if(box == 'daglig'){
      myCanvas.style.display = 'flex';
  }
}

function checkDay(dag){
    for(let i = 0, x = dailySurvey.length; i < x; i++){
      if(dag == dailySurvey[i].day ){
      return pushSurvey(dailySurvey[i].survey);
    }
  }
}

function pushSurvey(list){
  let arr = [];
  for(let i = 0, x = list.length; i < x; i++){
    arr.push(list[i]);
  }
  return countSurvey(arr);
}

function countSurvey(array){
  let good = 0,
      neutral = 0,
      bad = 0;
  for(let i = 0, x = array.length; i < x; i++){
    switch(array[i]){
      case 'bra':
        good ++;
        break;
      case 'neutral':
        neutral ++;
        break;
      case 'dåligt':
        bad ++;
        break;
      default: console.log("oops error");
    }
  } return surveyXY(good, neutral, bad);
}

function surveyXY(good, neutral, bad){
  const heightPerSmiley = 20;
  let totalSmileys = good + neutral + bad,
      braY = good * heightPerSmiley,
      bra = good,
      middleY = neutral * heightPerSmiley,
      middle = neutral,
      dåligtY = bad * heightPerSmiley;
      dåligt = bad;

      return draw(braY, bra, middleY, middle, dåligtY, dåligt, totalSmileys);
}

function draw(a, a1, b, b1, c, c1, total ){
  let canvasArea = document.getElementById('myCanvas'),
      col1 = canvasArea.getContext('2d'),
      col2 = canvasArea.getContext('2d'),
      col3 = canvasArea.getContext('2d'),
      col4 = canvasArea.getContext('2d'),
      sidenumber = canvasArea.getContext('2d'),
      lines = canvasArea.getContext('2d');
      sidenumber.clearRect(0, 0 , 400, 400);
      sidenumber.save();
      sidenumber.fillStyle = '#292929';
      sidenumber.font = 'bold 16px Arial, sans-serif';

      let y = 370;
      for(let i = 0; i < 16; i++){
        if(i < 10){
          sidenumber.fillText(i , 15, y);
        } else if(i < 15) {
          sidenumber.fillText(i , 7, y);
        } else {
          sidenumber.font = 'bold 22px Arial, sans-serif';
          sidenumber.fillText('Antal Elever', 7, y);
        }
          y-= 20;
}
        sidenumber.restore();

let yValue = 367;
for(let i = 0; i < 15; i++){
  lines.fillStyle = "rgba(41, 41, 41, 0.5)";
  lines.lineWidth = 0.2;
  lines.beginPath();
  lines.moveTo(20, yValue);
  lines.lineTo(400, yValue);
  lines.stroke();
yValue -= 20;
}

      col1.save();
      col1.fillStyle = '#ffa500';
      col1.fillRect (110, 367, 15, -a );
      col1.font = 'bold 16px Arial, sans-serif';
      col1.fillText(a1, 114, (373-a) - 10);
      col1.fillText('Bra', 105, 390);
      col1.restore();


      col2.save();
      col2.fillStyle = '#ffa500';
      col2.fillRect (180, 367, 15, -b );
      col2.font = 'bold 16px Arial, sans-serif';
      col2.fillText(b1, 184, (373-b) - 10);
      col2.fillText('Neutral', 160, 390);
      col2.restore();

      col3.save();
      col3.fillStyle = '#ffa500';
      col3.fillRect (250, 367, 15, -c );
      col3.font = 'bold 16px Arial, sans-serif';
      col3.fillText(c1, 255, (373-c) - 10);
      col3.fillText('Dåligt', 240, 390);
      col3.restore();

      col4.save();
      col4.fillStyle = '#ffa500';
      col3.font = 'bold 16px Arial, sans-serif';
      col4.fillText('totalt: ' + total, 320, 390);
      col4.restore();
}

function numGen() {
let randomAttendance = Math.ceil(Math.random() * 999999) + 100000;
if(randomAttendance > 999999){
  numGen();
} else {
   notif.innerText = "Närvarokod genererad.";
    notif.style.color = "#3dd43d";
    notif.style.borderColor ="#3dd43d";
    notif.classList.remove("hideMe");
    setInterval(addHideMe, 1000);
  return attendanceCode.value = randomAttendance;
  }
}

function addHideMe() {
  notif.classList.add("hideMe");
}
