var outputNumbers = [];

function makePingPong (inputNumber) {
  for (i = 1; i <= inputNumber; i++) {
    if (i % 15 === 0) {
      outputNumbers.push("pingpong");
    } else if (i % 5 === 0) {
      outputNumbers.push("pong");
    } else if (i % 3 === 0) {
      outputNumbers.push("ping");
    } else {
      outputNumbers.push(i);
    }
  }
};

//----Business Logic above--^^-----

// ----User interface logic below-----

$(document).ready(function() {
  $("form").submit(function(event) {
    $("#input").click(function() {
      $("#list").empty();
    });
    var inputNumber = $("#input-number").val()
    makePingPong(inputNumber);
    for (i = 0; i < outputNumbers.length; i++) {
      $("#list").append("<li>" + outputNumbers[i] + "</li>");
    };
    event.preventDefault();
  });
});
