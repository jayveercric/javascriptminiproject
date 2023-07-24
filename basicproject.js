/* npm install prompt-sync() use this in terminal to access package)
npm-node package manager this installs different dependencies on computer

*/

//QUIZ
const prompt = require("prompt-sync")() //to grab inout from user

console.log('welcome to the Jayveer quiz ! ');
let crctans = 0;
let totalqns = 3;

let answer1= prompt("did c programming has a oops concepts ?");
const correctAnswer1 = "NO";

if(answer1.toUpperCase() === correctAnswer1)
{
    console.log("you are right !");
    crctans++;
}
else{
    console.log("sorry wrong answer :-)");
}

let answer2= prompt("virat has how many centuries :");
const correctAnswer2 = "76";

if(answer2.toUpperCase() === correctAnswer2)
{
    console.log("you are right !");
    crctans++;
}
else{
    console.log("sorry wrong answer...");
}

let answer3= prompt("wh is prime minister of india ?");
const correctAnswer3 = "NARENDRA MODI";

if(answer3.toUpperCase() === correctAnswer3)
{
    console.log("you are right !");
    crctans++;
}
else{
    console.log("sorry wrong answer :-)");
}
const percent = Math.round((crctans/totalqns) *100);
console.log("you got", crctans, "questions correct !");
console.log("you scored", percent.toString() , "%");

