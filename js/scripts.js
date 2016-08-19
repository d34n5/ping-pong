
// I realize something should exist here, and for a long time I considered putting my conditional statements up here  -  but since they append results to the user's display I kept them on the user side -  Perhaps I need clarification here...

//----Business Logic above--^^-----

// ----User interface logic below-----

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#input").click(function() {
      $("#list").empty();
    });
    var inputNumber = $("#input-number").val()
    for (i = 1; i <= inputNumber; i++) {
      if (i % 15 === 0) {
        $("#list").append("<li>" + "pingpong" + "</li>");
      } else if (i % 3 === 0) {
        $("#list").append("<li>" + "ping" + "</li>");
      } else if (i % 5 === 0) {
        $("#list").append("<li>" + "pong" + "</li>");
      } else {
        $("#list").append("<li>" + i + "</li>");
      }
    }
    if (i > 50) {
      $("#list").prepend(
        '<img src="https://media.giphy.com/media/OK27wINdQS5YQ/giphy.gif" alt="mind blown">'
      );
    }
  });
});
