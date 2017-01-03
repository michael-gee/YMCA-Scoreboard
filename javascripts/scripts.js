var func = (function scripts(){
  //Initial TIME Set Up
  var minutes = 15;
  var seconds = 0;
    if(seconds === 0){
      seconds = "00";
    } else if(seconds < 10) {
      seconds = "0" + seconds;
    }
  var time = `${minutes}:${seconds}`;
  document.getElementById("time").innerHTML = time;

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

  //SCORE FUNCTIONS

  //Subtract Score function
  function subtractScore(team){
    if(team === "guest" && guestPoints > 0){
      guestPoints = guestPoints - 1;
      document.getElementById("guest-points").innerHTML = guestPoints;
    }else if(team === "home" && homePoints > 0){
      homePoints = homePoints - 1;
      document.getElementById("home-points").innerHTML = homePoints;
    }

    //Padding Maintenance when score gets subtracted under 10
    if(homePoints < 10){
      document.getElementById("home-points").style.paddingLeft = "102px";
    }
  }

  function addScore(team){
    if(team === "guest"){
      guestPoints = guestPoints + 1;
      document.getElementById("guest-points").innerHTML = guestPoints;
    }else if(team === "home"){
      homePoints = homePoints + 1;
      document.getElementById("home-points").innerHTML = homePoints;
    }

    //Padding Maintenance when score goes above 10
    if(homePoints > 9){
      document.getElementById("home-points").style.paddingLeft = "77px";
    }
    // padding-left 75px
  }


})();
