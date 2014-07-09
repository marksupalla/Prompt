var prompt = require('sync-prompt').prompt;
/*
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var full = first + ' ' + last;
console.log ('your full  name is', full);

var color = prompt('What is your favorite color? ');
console.log('your favorite color is', color);

var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

var dogage = (age * 7);
console.log("my dog's age is", dogage);

var yourAge = prompt("What is your age? ");
youAge = parseInt(yourAge);
if (yourAge >= 21){
  console.log('you are legal to drink');
}else{
  console.log('you are not legal to drink');
}

var tempType  =  prompt("Do you want F or C? ");
var temp = prompt("what is the temp? ");
temp = parseInt(temp);
var C = (temp-32) * (5/9);
var F = (temp*9) / (5+32);
switch(tempType) {
  case 'F':
    console.log ('the temp in farenheit is ' + C + ' in celcius');
    break;
  case 'C':
    console.log ('the temp in celcius is ' + F + ' in farenheit');
    break;
}
*/
var height = prompt('What is your height in inches? ');
var weight = prompt('What is your weight in pounds? ');
height = parseInt(height);
weight = parseInt(weight);
var BMI = (weight/(height*height))*703
console.log ("Your BMI is: ", BMI.toFixed(1));

