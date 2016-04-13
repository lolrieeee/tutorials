(function() {

  'use strict';

  var mute = document.getElementById('mute');
  var muteContainer = document.getElementById('mute-container');
  var unmute = document.getElementById('unmute');
  var unmuteContainer = document.getElementById('unmute-container');
  var audio = document.getElementById('audio');
  var night = document.getElementById('night');
  var nightContainer = document.getElementById('night-container');
  var day = document.getElementById('day');
  var dayContainer = document.getElementById('day-container');
  var darker = document.getElementById('darker');

  mute.addEventListener("click", function () {
    muteContainer.className += " audio-hide";
    unmuteContainer.className = "audio-off";
    audio.muted = true;
  });

  unmute.addEventListener("click", function () {
    unmuteContainer.className += " audio-hide";
    muteContainer.className = "audio-on";
    audio.muted = false;
  });

  night.addEventListener("click", function () {
    nightContainer.className += " day-hide";
    dayContainer.className = "night-off";
    darker.className += " darken-on";
  });

  day.addEventListener("click", function () {
    dayContainer.className += " day-hide";
    nightContainer.className = "night-on";
    darker.className = "darken";
  });

  var timer;
  var execute = false;
  document.body.onmousemove = function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById('coor').className="";
    document.getElementById("coor").innerHTML = coor;
    clearTimeout(timer);
    timer=setTimeout(mouseStopped,400);

    setTimeout(function() {
      if(!execute) {
          document.getElementById('credit').className += " hide-control";
          document.getElementById('instructions').className += " hide-control";
          execute = true;
        };
      }, 1000);
  };

  function mouseStopped(){                                 // the actual function that is called
    document.getElementById('coor').className="hide-control";
  };

  $(document).ready(function(){
    // Add smooth scrolling on all links inside the navbar
    $("#navi-spy a").on('click', function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    });
  });


}());

$('window').ready(function(){
  setTimeout(function() {
  document.getElementById('pageload').className = "load hide-control";
},2000);
  setTimeout(function() {
  document.getElementById('pageload').className += " load-done";
  document.body.style.overflow = "scroll";
},3000);
});
