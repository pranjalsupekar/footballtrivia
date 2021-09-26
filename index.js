var readlineSync = require('readline-sync');
 
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName + ' TO FOOTBALL QUIZ');

var score = 0;
var ans1 = "ronaldo";
var ans2 = "real madrid";
var ans3 = "messi";
var ans4 = "manchester united";
var ans5 = "maradona"

var userAnswer1 = readlineSync.question('who is top scorer of UEFA champion league ')

if(userAnswer1 == ans1){
  console.log('Right answer ');
  score++
}
else {
      console.log('wrong answer')
}

var userAnswer2 = readlineSync.question('which team has won UEFA champion league most ')

if(userAnswer2 == ans2){
  console.log('Right answer')
  score++
}
else{
  console.log('Wrong answer')
}

var userAnswer3 = readlineSync.question('Which player has won most no of ballondor ')
if(userAnswer3 == ans3){
  console.log('Right Answer')
  score++
}
else{
  console.log('Wrong Answer')
}

var userAnswer4 = readlineSync.question('which premier league team has most no of title ')

if(userAnswer4 == ans4){
  console.log('Right Answer')
  score++
}
else{
  console.log('Wrong answer')
}

var userAnswer5 = readlineSync.question('which player has scored hand of god goal ')

if(userAnswer5 == ans5){
  console.log('Right Answer')
  score++
}
else{
  console.log('Wrong answer')
}

console.log(score)