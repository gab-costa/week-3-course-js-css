
(function (window) {

  var byeSpeaker = {}

  var speakWord = "Good Bye"

  byeSpeaker.Bye =  function (x) {
    console.log(speakWord + " " + x )
  }
    window.byeSpeaker = byeSpeaker
  })(window)