// business logic

var word2 = function reverseString(word) {
    return word.split("").reverse().join("");
}

// user interface logic
$(document).ready(function() {
  $("form#Palindrome").submit(function(event) {
    event.preventDefault();

    var word = $("input#word").val();
    var answer = (word === word2(word));

    $(".word").text(word);

    if (!answer) {
      $(".not").text("not a");
    } else {
      $(".not").text("a");
    }

    $("#result").show();
  });
});
