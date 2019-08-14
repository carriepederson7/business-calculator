// Back-end logic:



var add = function (number1, number2){
return number1 + number2};
// var newNumber = parseInt($("number1, number2"))};


var subtract = function (number1, number2){
  return number1 - number2};

// var number1= parseInt(prompt("Enter a number:"));
// var number2= parseInt(prompt("Enter another number:"));


var multiply = function (number1, number2){
  return number1 * number2};

// var number1= parseInt(prompt("Enter a number:"));
// var number2= parseInt(prompt("Enter another number:"));


var divide = function (number1, number2){
  return number1 / number2};

// var number1= parseInt(prompt("Enter a number:"));
// var number2= parseInt(prompt("Enter another number:"));





// User logic:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#subtract1").val());
  var number2 = parseInt($("#subtract2").val());
  var result = subtract(number1, number2);
  $("#output2").text(result);
  });

});





























// carrie's Monday extra notes
// var bodyMass = function(weightAsk, heightAsk) {
// var height = parseInt(prompt(heightAsk));
// var weight = parseInt(prompt(weightAsk));
// var bmi = weight / (height * height);
// alert("Your bmi is" + bmi)};
//
// bodyMass("what is your weight?", "What is your height?");
//
// var farenheittocelcius = function (number1, number2){return number1 / number2};
// var number1= parseInt(prompt("Enter a number:"));
// var number2= parseInt(prompt("Enter another number:"));
// alert(divide(number1,number2));
//
// var farenheittocelcius = function (number1){return (number1 - 32)*(5/9)};
// var number1= parseInt(prompt("Enter temperature in farenheit:"));
// alert(farenheittocelcius(number1));
