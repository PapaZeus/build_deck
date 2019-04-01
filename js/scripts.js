$(document).ready(function() {
  var suits = ["clubs", "hearts", "spades", "diamonds"];
  var numbers = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suits.forEach(function(suit) {
  numbers.forEach(function(number) {

    $(".putShitHere").append("<li>"+number +" of " + suit+"</li>")
  });

  });
});
