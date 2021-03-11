

(function (window) {
  
  
  var helloSpeaker = {}

  var speakWord = "Hello";

  helloSpeaker.Hello =  function (y) {
    console.log(speakWord + " " + y);
  }

  window.helloSpeaker = helloSpeaker;





}) (window)

