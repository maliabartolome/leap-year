// business logic

var result = function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
};

// user interface logic
$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var n = parseInt($("input#factor").val());

    $(".factor").text(n);
    $(".factorialResult").text(result(n));

    $("#result").show();
  });
});
