var video = document.querySelector("#videoElement");
var siteActive = true;

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

document.getElementById("timer").innerHTML = 5 + ":" + 0;


function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    soundPlay("error sound src")
    return;
  }

  document.getElementById("timer").innerHTML = m + ":" + s;
  console.log(m);

  if (siteActive == true) {
    setTimeout(startTimer, 1000);
  }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    siteActive = true;
    setTimeout(startTimer, 1000);
  } else {
    siteActive = false;
  }
});

startTimer();

function soundPlay(src){
var audioElement = document.getElementById('player-src');
audioElement.src =src ; //src for the player
var myAudio = document.getElementById("player");
myAudio.load();
myAudio.play();
}