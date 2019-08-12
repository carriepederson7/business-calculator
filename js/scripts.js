var add = function (number1, number2){return number1 + number2};
var number1= parseInt(prompt("Enter a number:"));
var number2= parseInt(prompt("Enter another number:"));
alert(add(number1,number2));

var subtract = function (number1, number2){return number1 - number2};
var number1= parseInt(prompt("Enter a number:"));
var number2= parseInt(prompt("Enter another number:"));
alert(subtract(number1,number2));

var multiply = function (number1, number2){return number1 * number2};
var number1= parseInt(prompt("Enter a number:"));
var number2= parseInt(prompt("Enter another number:"));
alert(multiply(number1,number2));

var divide = function (number1, number2){return number1 / number2};
var number1= parseInt(prompt("Enter a number:"));
var number2= parseInt(prompt("Enter another number:"));
alert(divide(number1,number2));

var bodyMass = function(weightAsk, heightAsk) {
var height = parseInt(prompt(heightAsk));
var weight = parseInt(prompt(weightAsk));
var bmi = weight / (height * height);
alert("Your bmi is" + bmi)};

bodyMass("what is your weight?", "What is your height?");
