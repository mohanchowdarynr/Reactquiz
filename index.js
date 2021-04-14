var readlineSync = require("readline-sync");
const chalk = require("chalk");

var playerName = readlineSync.question(chalk.bold.rgb(0, 191, 255)(`Please enter your name: `));

var scoreBoard = [{
  name:"Ramu",
  score:1
},
{
  name:"Somu",
  score:0
},
{
  name:"yash",
  score:8
},
{
  name:"Suji",
  score:9
}]
var score = 0;
var questionBank = [
  {
    question : `1.Everything in react is ____________
 a.Module
 b.Component
 c.Package
 d.class\n`,
    answer : "b"
  },
  {
    question : `2.How many elements does a react component return
a:1
b:2
c:multiple
d:few\n`,
    answer : "c"
  },
  {
    question : `3.what is babel?
a:compiler
b:transpiler
c:Both
d:None\n`,
    answer : "c"
  },
  {
    question : `4.Default port for web-pack-dev server
a:3000
b:8080
c:1234
d:3030\n`,
    answer : "b"
  },
  {
    question : `5.What is used to pass a data to a component?
 a:setState
 b:render with arguments
 c:props
 d:PropTypes\n`,
    answer : "a"
  }
]


console.log(chalk`\n{bold Hi {bgRed ${playerName}}, Welcome to {bgRed Reactjs quiz}!}\n`);
console.log(
  chalk.bold.bgRed.black ("Rules:")+chalk.bold(" Choose the right option, if you choose the correct answer, you will gain 2 points and for the wrong answer, there will be a negative marking of -1.\nIf you want to exit the quiz, press \"e\".\n")+chalk.blue.bold("All the best!\n")
)

currentLeaderBoard();

var start = readlineSync.question(chalk.bold.green("Shall we go to quiz?(Y/N) "));
if(start.toLowerCase()==="y"){

  for(var i=0;i<questionBank.length;i++){
  var returnedAns=play(questionBank[i].question,questionBank[i].answer);
  if(returnedAns === "e"){
    break;
  }
}
}




function play(question,answer){
  var playerAnswer = readlineSync.question(chalk`\n{cyanBright.bold ${question}}`);
  console.log(chalk`{bold You selected {rgb(255,0,255) ${playerAnswer}}}`)
  if(playerAnswer.toLowerCase()===answer){
    console.log(chalk`{bgGreen.black.bold Bravo,You are right!}`);
    score+=2;
  }
  else if(playerAnswer === "e"){
    return "e"
  }
  else{
    console.log(chalk`{bgRed.bold Oops,You are wrong!}`);
    console.log(chalk`{bold The right answer is {green "option ${answer}"}}`)
    score-=1;
  }
  console.log(chalk`{bold Your current score : ${score}}`)
  console.log("_____________________________________________\n")
  
}



console.log(chalk`{bgRgb(255,255,0).black.bold Your final score : ${score}}\n`);

if(hasBeaten(score)==1){
  console.log(chalk.bgRgb(255,255,0).black.bold("Hurray!You have beaten the highest score!\n")+chalk.bold("Send your screenshot \n"));
}
else if(hasBeaten(score)==2){
  console.log(chalk.bgRgb(255,255,0).black.bold("Hurray!You are one among the top 3 players now!\n")+chalk.bold("Send your screenshot\n"));
}

console.log(chalk.bold.rgb(255,255,0)("Thanks for playing...\nHope you have learnt something!"));


function currentLeaderBoard(){
  scoreBoard.sort((personOne,personTwo)=>(personTwo.score-personOne.score))
  console.log(chalk.bgRgb(255,255,0).black.bold("CURRENT LEADERBOARD "));
  for(var i=0;i<3;i++){
    console.log(chalk`{bold [${i+1}] ${scoreBoard[i].name} : ${scoreBoard[i].score}}`)
  }

  
}

function hasBeaten(score){
  for(var i=0;i<3;i++){
    if(i==0 & score>=scoreBoard[i].score){
      return 1;
    }
    else if(score>=scoreBoard[i].score){
      return 2;
    }
  }
}