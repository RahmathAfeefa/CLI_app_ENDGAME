var readLineSync = require('readline-sync');
var score = 0;
var userName = readLineSync.question("Whats your Name ? ")
console.log("Welcome to End Game "+ userName)

function play(question, answer)
  {
    var userAnswer = readLineSync.question(question)
    if(userAnswer === answer)
    {
      console.log("Right")
      score= score + 1
    }
    else
    {
      console.log("Wrong")
    }
    console.log("The current score is "+score)
    console.log("--------------")
    
  }

///ARRAY OF OBJECTS 
var Question1 = 
  {
    Q : "Where do you live?",
    A : "Kerala"
  }
var Question2 = 
  {
    Q : "Where do you work?",
    A : "Capgemini"
  }
// var questions = [
//   {
//     Q : "Where do you live?",
//     A : "Kerala"
//   },
//   {
//     Q : "Where do you work?",
//     A : "Capgemini"
//   } ,
//   {
//     Q : "What do you work?",
//     A : "Engineer"
//   }
// ]
var questions = [Question1,Question2 ];
for (var i=0;i<questions.length;i++)
{
  var current = questions[i];
  play(current.Q, current.A)
}
// var Q1 = "Where do you live?" 
// var A1 = "Kerala"

// var Q2 = "Where do you work?"
// var A2 = "Capgemini"

// play("Where do you live?" , "Kerala") //function call
// play("Where do you work?" , "Capgemini")

// play(Q1,A1)
// play(Q2,A2)

