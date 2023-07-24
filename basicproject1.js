//RANDOM NUMBER GUESSER


const prompt = require("prompt-sync")()
const target =  Math.round(Math.random()*100);  // 10 + Math.round(Math.random()*50); range of 10 to 60
let guess = 0;
console.log(target);
while(true)
{
    guess++;
const number = Number(prompt("guess the number between 1 to 100 : ")); // convert string to number | hello -> NaN
if(target === number)
{
    console.log("brilliant !");
    break;
}
else if(target > number)
{
    console.log("your guess is too low...");
}
else{
    console.log("your guess is too high");
}
}
console.log("you guessed in",guess,"th time !");
