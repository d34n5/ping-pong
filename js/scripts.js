var inputNumbers = $("#inputNumber").val();








//----Business Logic above--^^-----

// ----User interface logic below-----

$(document).ready(function() {
  $("form").submit(function(event) {

    // for (i = 1; i <= inputNumber; i++) {
    //   console.log(inputNumber);
    //   if (i % 15 === 0) {
    //     $("#list").append('<li>'+"pingpong"+'</li>');
    //   } else if (i % 5 === 0) {
    //     $("#list").append('<li>'+"pong"+'</li>');
    //   } else if (i % 3 === 0) {
    //     $("#list").append('<li>'+"ping"+'</li>');
    //   } else {
    //     $("#list").append('<li>'+i+'</li>');
    //   }
    // };


    // for(i = 1; i <= inputNumber; index += 1) {
    //     console.log(i);
    //     if (i % 15 === 0) {
    //         $("#list").append("<li>ping-pong</li>");
    //     } else if (i % 3 === 0) {
    //         $("#list").append("<li>ping</li>");
    //     } else if (i % 5 === 0) {
    //         $("#list").append("<li>pong</li>");
    //     } else {
    //         $("#list").append("<li>" + i + "</li>");
    //     }
    // }


    for (i=1; i <= 100; i++){
      if ( i % 3 && i % 5 ) {
        document.write(i);
      } else if ( x % 3 == 0 ) {
        document.write("ping");
      }
        if( x % 5 == 0 ) {
        document.write("pong");
      }
    }
    document.write('<br>');
});




    event.preventDefault();
  })
