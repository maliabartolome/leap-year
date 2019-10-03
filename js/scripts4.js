// business logic
let result = function primeFinder(numberInput) {
  //create an array of numbers n : number
  let numbers = new Array(numberInput);
  console.log(numbers.length)
  //set prime as 2
  let prime = 2;
  //Loop through <= numberInput, incrementing var prime
  for (i = 0; i <= numbers.length; i++) {
    if(prime / 2 || prime / 4 || prime / 6 || prime / 8)
    
    // (prime - Math.floor(prime)) !== 0) determines where or not a number is whole 

    {
      console.log("Not a prime number!");
    }
    //if prime === numberInput then return number array of primes

  }
  console.log("Number input: " + numberInput + " Numbers:" + (numbers.length - 1) + " Prime:" + prime);
}
// user interface logic
$(document).ready(function () {
  $("form#primes").submit(function (event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    console.log(numberInput);
    console.log(result(numberInput));

    $(".factor").text(numberInput);
    // $(".factorialResult").text(result(n));

    $("#result").show();
  });
});
