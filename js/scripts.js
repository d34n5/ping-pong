



//----Business Logic above--^^-----

// ----User interface logic below-----

$(document).ready(function(){
  $("form").submit(function(event){
    // $("#input").click(function(){
    //     $("ul").remove();
    // });

    var inputNumber = $('#input-number').val()

      for (i = 1; i <= inputNumber; i++) {
      if (i % 15 === 0) {
        $('#list').append('<li>'+"pingpong"+'</li>');}
      else if (i % 3 === 0) {
        $('#list').append('<li>'+"ping"+'</li>');}
      else if (i % 5 === 0) {
        $('#list').append('<li>'+"pong"+'</li>');}
      else{
        $('#list').append('<li>'+i+'</li>');}
      };

        event.preventDefault();


  });
});
