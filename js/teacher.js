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

// Shows the optionlist for canvas
let show = function(){
  document.getElementsByClassName('canv')[0].style.display = 'flex';
}

let showBox = function(box){
  let dailyCanvas = document.getElementById('dailyCanvas'),
      weeklyCanvas = document.getElementById('weeklyCanvas'),
      courseCanvas = document.getElementById('courseCanvas'),
      dayOption = document.getElementById('dayOption'),
      courseOption = document.getElementById('courseOption');

  if(box == 'daglig'){
      dailyCanvas.style.display = 'flex';
      dayOption.style.display = 'flex';
      weeklyCanvas.style.display = 'none';
      courseCanvas.style.display = 'none';
      courseOption.style.display = 'none';
  } else if(box == 'vecko'){
      dailyCanvas.style.display = 'none';
      dayOption.style.display = 'none';
      weeklyCanvas.style.display = 'flex';
      courseCanvas.style.display = 'none';
      courseOption.style.display = 'none';
      drawWeek();
  } else if(box == 'kurs'){
      dailyCanvas.style.display = 'none';
      weeklyCanvas.style.display = 'none';
      dayOption.style.display = 'none';
      courseCanvas.style.display = 'flex';
      courseOption.style.display = 'flex';

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
      goodY = good * heightPerSmiley,
      neutralY = neutral * heightPerSmiley,
      badY = bad * heightPerSmiley;

      return drawDay(goodY, good, neutralY, neutral, badY, bad, totalSmileys);
}

function drawDay(a, a1, b, b1, c, c1, total ){
  let canvasAreaDaily = document.getElementById('dailyCanvas'),
      col1 = canvasAreaDaily.getContext('2d'),
      col2 = canvasAreaDaily.getContext('2d'),
      col3 = canvasAreaDaily.getContext('2d'),
      col4 = canvasAreaDaily.getContext('2d'),
      sidenumber = canvasAreaDaily.getContext('2d'),
      lines = canvasAreaDaily.getContext('2d');
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
      week.font = 'bold 16px Arial, sans-serif';
      week.fillText('Vecka' , 15, 390)
      let weekXvalue = 100;
        for(let i = 36; i < 46; i++){
          week.fillText(i, weekXvalue, 390);
            weekXvalue += 50;
        }
      week.restore();

      result.save();
      result.fillStyle = '#292929';
      result.font = '16px Arial, sans-serif';
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
      graphInfo.font = '16px Arial, sans-serif';
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

      graphInfo.fillStyle = 'yellow';
      graphInfo.fillRect(330, 50, 50, 15);

      graphInfo.fillStyle = 'green';
      graphInfo.fillRect(470, 50, 50, 15);
      graphInfo.restore();

      lines.save();
      lines.fillStyle = "rgba(41, 41, 41, 0.5)";
      lines.lineWidth = 0.2;

      let yValue = 335;
      for(let i = 0; i < 9; i++){
        lines.beginPath();
        lines.moveTo(30, yValue);
        lines.lineTo(600, yValue);
        lines.stroke();
        yValue -= 25;
      }
        lines.restore();

        red.save();
        red.strokeStyle='red';
        red.lineWidth = 3;
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
        blue.lineWidth = 3;
        blue.beginPath();
        blue.moveTo(110, 135);
        blue.lineTo(160, 185);
        blue.lineTo(205, 210);
        blue.lineTo(255, 185);
        blue.lineTo(305, 185);
        blue.lineTo(355, 210);
        blue.lineTo(405, 185);
        blue.lineTo(455, 260);
        blue.lineTo(505, 235);
        blue.lineTo(560, 285);
        blue.stroke();
        blue.restore();

}
