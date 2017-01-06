var func = (function scripts(){
  //Initial *****TIME***** Set Up
  var currentlyPlaying = false;
  var minutes = 15;
  var seconds = 0;
    if(seconds === 0){
      seconds = "00";
    } else if(seconds < 10) {
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
    document.getElementById("home-points").style.paddingLeft = "81px";
  }else {
    document.getElementById("guest-points").style.paddingLeft = "75px";
    document.getElementById("home-points").style.paddingLeft = "102px";
  }

  console.log("asdsa");
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

// ADD/Subtract TIME FUNCTIONS
//Add Time
function addTime(min_sec){
  if(currentlyPlaying === true){
    return false;
  }else {
    if(min_sec === "minutes"){
      minutes = minutes + 1;
      time = `${minutes}:${seconds}`;
      document.getElementById("time").innerHTML = time;
    } else if(min_sec === "seconds"){
      seconds = parseInt(seconds) + 1;
      // ADD THE CONDITION THAT WHEN THE SECONDS GO OVER 60 SECONDS GOES BACK DOWN TO 0
      if(seconds < 10) {
        seconds = "0" + seconds;
      }
      time = `${minutes}:${seconds}`;
      document.getElementById("time").innerHTML = time;
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
      time = `${minutes}:${seconds}`;
      document.getElementById("time").innerHTML = time;
    } else if(min_sec === "seconds" && seconds != 0){
      seconds = seconds - 1;
      if(seconds < 10) {
        seconds = "0" + seconds;
      }
      time = `${minutes}:${seconds}`;
      document.getElementById("time").innerHTML = time;
    }
  }
}

})();
