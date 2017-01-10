var func = (function scripts(){
  //Initial *****TIME***** Set Up
  var currentlyPlaying = false,
      minutes = 15,
      seconds = 0,
      countDownTimer;
      if(seconds < 10) {
        seconds = "0" + seconds;
      }
      var time = `${minutes}:${seconds}`;
  document.getElementById("time").innerHTML = time;

//*****SCORE*****
  //Initial SCORE Set Up
  var guestPoints = 0;
  var homePoints = 0;
  document.getElementById("guest-points").innerHTML = guestPoints;
  document.getElementById("home-points").innerHTML = homePoints;

  //SCORE Button Variables
  var guestMinus = document.getElementById("guest-minus");
  var guestPlus = document.getElementById("guest-plus");
  var homeMinus = document.getElementById("home-minus");
  var homePlus = document.getElementById("home-plus");

  //SCORE BUTTON EVENT LISTENERS
    //Guest
  guestMinus.addEventListener("click", function() { subtractScore("guest") });
  guestPlus.addEventListener("click", function() { addScore("guest") });

    //Home
  homeMinus.addEventListener("click", function() { subtractScore("home") });
  homePlus.addEventListener("click", function() { addScore("home") });

  //SCORE Manipulation FUNCTIONS
  //Subtract Score function
  function subtractScore(team){
    if(team === "guest" && guestPoints > 0){
      guestPoints = guestPoints - 1;
      document.getElementById("guest-points").innerHTML = guestPoints;
    }else if(team === "home" && homePoints > 0){
      homePoints = homePoints - 1;
      document.getElementById("home-points").innerHTML = homePoints;
    }

    checkPointTotal();
  }

  //Add Score function
  function addScore(team){
    if(team === "guest"){
      //Sets Score Back to 0 When Score Reaches 100
      if(guestPoints > 98){
        guestPoints = 0;
        document.getElementById("guest-points").innerHTML = guestPoints;
        checkPointTotal();
        return false;
      }
      guestPoints = guestPoints + 1;
      document.getElementById("guest-points").innerHTML = guestPoints;
    }else if(team === "home"){
      //Sets Score Back to 0 When Score Reaches 100
      if(homePoints > 98){
        homePoints = 0;
        document.getElementById("home-points").innerHTML = homePoints;
        checkPointTotal();
        return false;
      }
      homePoints = homePoints + 1;
      document.getElementById("home-points").innerHTML = homePoints;
    }

    checkPointTotal();
  }

//Points Padding Check function
function checkPointTotal() {
  if(guestPoints >= 10 && homePoints >= 10){
    document.getElementById("guest-points").style.paddingLeft = "52px";
    document.getElementById("home-points").style.paddingLeft = "60px";
  }else if(guestPoints < 10 && homePoints >= 10){
    document.getElementById("guest-points").style.paddingLeft = "75px";
    document.getElementById("home-points").style.paddingLeft = "77px";
  }else if(guestPoints >= 10 && homePoints < 10){
    document.getElementById("guest-points").style.paddingLeft = "53px";
    document.getElementById("home-points").style.paddingLeft = "85px";
  }else {
    document.getElementById("guest-points").style.paddingLeft = "75px";
    document.getElementById("home-points").style.paddingLeft = "104px";
  }
}

//*****TIME*****
//ADD/Subtract Variables
var minutesPlus = document.getElementById("minutes-plus");
var minutesMinus = document.getElementById("minutes-minus");
var secondsPlus = document.getElementById("seconds-plus");
var secondsMinus = document.getElementById("seconds-minus");

//ADD/Subtract Button Event Listeners
//Minutes
//Plus
minutesPlus.addEventListener("click", function(){
  addTime("minutes");
});
//Minus
minutesMinus.addEventListener("click", function(){
  subtractTime("minutes");
});

//Seconds
secondsPlus.addEventListener("click", function(){
  addTime("seconds");
});
//Minus
secondsMinus.addEventListener("click", function(){
  subtractTime("seconds");
});

// *****BUTTON FUNCTIONS*****ADD/Subtract TIME FUNCTIONS
//Add Time
function addTime(min_sec){
  if(currentlyPlaying === true){
    return false;
  }else {
    if(min_sec === "minutes"){
      minutes = minutes + 1;
      updateHTML();
    } else if(min_sec === "seconds"){
      if(seconds >= 59){
        seconds = "0" + 0;
        updateHTML();
        return false;
      }
      seconds = parseInt(seconds) + 1;
      if(seconds < 10) {
        seconds = "0" + seconds;
      }
      updateHTML();
    }
  }
}

//Subtract Time
function subtractTime(min_sec){
  if(currentlyPlaying === true){
    return false;
  }else {
    if(min_sec === "minutes" && minutes != 1){
      minutes = minutes - 1;
      updateHTML();
    } else if(min_sec === "seconds" && seconds != 0){
      seconds = seconds - 1;
      if(seconds < 10) {
        seconds = "0" + seconds;
      }
      updateHTML();
    } else if(min_sec === "seconds" && seconds == 0){
      if(parseInt(seconds) == 0){
        seconds = 59;
        updateHTML();
      }
    }
  }
}

//Scoreboard TIME Button Events

//Time Button Variables
var playButton = document.getElementById("play-button");
var pauseButton = document.getElementById("pause-button");
var resetButton = document.getElementById("reset-button");

//Time Button addEventListeners
playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);


//Update HTML function
function updateHTML(){
  time = `${minutes}:${seconds}`;
  document.getElementById("time").innerHTML = time;
}

//CountDown Timer Function
var countDown = () => {

  countDownTimer = setInterval(function(){
  seconds--;
  if(seconds < 10) {
    seconds = "0" + seconds;
  }
  updateHTML();

  if(seconds == 00 && minutes > 0){
  minutes--;
  seconds += 60;
} else if ( minutes == 0 && seconds == 00){
  alert("Time is Up!");
  clearInterval(countDownTimer);
  return false;
}
}, 1000)//setInterval bracket end

}// countDown() bracket end

//Start
function start(){
  if(currentlyPlaying === true || minutes == 0 && seconds == 00){
    return false;
  } else {
    currentlyPlaying = true;

    if(seconds == 0){
      seconds = 0;
      seconds += 59;
      minutes--;
    } else {
      seconds = seconds;
    }

    updateHTML();
    countDown();
  }
}

//Pause
//pause button function ()
function pause(){
  currentlyPlaying = false;
  clearInterval(countDownTimer);
}

//Reset function
function reset(){
  if(currentlyPlaying === true){
    return false;
  }else {
    currentlyPlaying = false;
    minutes = 15;
    seconds = 0;
    if(seconds < 10) {
      seconds = "0" + seconds;
    }

    guestPoints = 0;
    homePoints = 0;
    document.getElementById("guest-points").innerHTML = guestPoints;
    document.getElementById("home-points").innerHTML = homePoints;
    document.getElementById("guest-points").style.paddingLeft = "75px";
    document.getElementById("home-points").style.paddingLeft = "104px";
    updateHTML();
  }
}

})();
