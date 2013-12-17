$(document).ready(function() {
  var bodyX, bodyY, headX, headY;
  var leftButtonDown = false;
  //Mouse press events
  $(document).mousedown(function(e) {
    //Left mouse button was pressed, set flag
    if (e.which == 1) 
      leftButtonDown = true;
  });
  $(document).mouseup(function(e) {
    //Left mouse button was released, clear flag
    if (e.which == 1) 
      leftButtonDown = false;
  });

  $("#div1").draggable({
    drag: function(event, ui) {
      headX = $('#div1').position().left;
      headY = $('#div1').position().top;
      //Display the positions of the head and the head
      console.log("head pos:" + headX + ', ' + headY + ', body pos: ' + bodyX + ', ' + bodyY);
      //Turn the body into an animation when its head is removed
      $('#image').attr({
        src: 'images/chicken-body-headless.gif'
      });
      //Make the body follows its head
      $('#image').animate({
        left: headX - 2,
        top: headY + 30
      }, 50, function() {
        bodyX = $('#image').position().left;
        bodyY = $('#image').position().top;
      });
    }
  });

  function checkIfChickenIsCaught() {
    //Chicken body caught its head
    if (Math.abs(bodyX - headX) < 80 && Math.abs(bodyY - headY) < 50) {
      console.log("CAUGHT");
      $('#div1').attr({
        src: 'images/chicken-head-wings.png'
      });
      $('#image').attr({
        src: 'images/chicken-body-wings.png'
      });
      $("div#text1").text("The body got its head back and IT'S TIME FOR REVENGE!");
      setTimeout(function() {
        window.location.reload(true);
      }, 1500);
    } 
    //Not clicking the chicken
    else if (!leftButtonDown) {
      console.log("NOT CAUGHT"); 
      $('#div1').attr({
        src: 'images/chicken-head.png'
      });
      $('#image').attr({
        src: 'images/chicken-body.png'
      });
    } 
    //Managed to take the chicken's head away from its body
    else {
      console.log("NOT CAUGHT");
      //Cook the body after 30 secs
      setInterval(function() {
        $('#div1').attr({
          src: 'images/chicken-head-dead.png'
        });
        $('#image').attr({
          src: 'images/chicken-body-roasted.png'
        });
        $("div#text1").text("Chicken Cooked!");
        setTimeout(function() {
          // window.location.reload(true);
          window.open("php/result.php", "_self");
        }, 1500);
      }, 10000);
    }
  }

  function update() {
    checkIfChickenIsCaught();
  }

  setInterval(function() {
    update();
  }, 1000 / 60);
});