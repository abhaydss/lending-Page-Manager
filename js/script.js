// var x;
var arrid = ["avatar1", "avatar2", "avatar3", "avatar4"];
var crid = ["cr-1", "cr-2", "cr-3", "cr-4"];
var count = 0;

var touchsection = document.getElementById("wholebox");

function showmenu() {
  document.getElementById("list").style.display = "flex";
  document.getElementById("list").style.flexDirection = "column";
  document.getElementById("cross-icon").style.display = "block";

  document.getElementById("ham-icon").style.display = "none";
}
function hidemenu() {
  document.getElementById("list").style.display = "none";
  document.getElementById("cross-icon").style.display = "none";

  document.getElementById("ham-icon").style.display = "block";
}

var expression =
  /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
function validation(value) {
  return expression.test(String(value).toLowerCase());
}

function checkemail() {
  let mail = document.getElementById("footerinp").value;
  let x = validation(mail);
  console.log(x);
  if (x == true) {
    if ((document.getElementById("incorrect").style.display = "block")) {
      document.getElementById("incorrect").style.display = "none";
      document.getElementById("footerinp").style.border = "0px";
    }
    document.getElementById("footerinp").value = "";
    alert("your response have been submitted sucessfully ");
  } else if (x == false) {
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("footerinp").style.border = "2px solid #df5329";
  } else {
    console.log("error");
  }
}

var startX;
var startY;
var dist;
var threshholdist = 60;
var ellapsedtime;
var time;
var allowedtime = 200;

touchsection.addEventListener(
  "touchstart",
  function (e) {
    var touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    time = new Date().getTime;
    e.preventDefault();
  },
  false
);

touchsection.addEventListener(
  "touchmove",
  function (e) {
    e.preventDefault();
  },
  false
);

touchsection.addEventListener(
  "touchend",
  function (e) {
    var touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX;
    ellapsedtime = new Date().getTime - time;
    var swipecheck = (dist <= 0);
    if ((Math.abs(dist) >= threshholdist) && Math.abs(touchobj.pageY - startY) <= 100) {
      swipebox(swipecheck);
    }
    e.preventDefault();
  },
  false
);

swipebox = (istrue) => {
  if (istrue) {
    changeboxleft(count);
    // if(count != 0){
    //   count++;
    // }
    // else if(count == 0){
    //   count = 3;
    // }
  } else {
    changeboxright(count);
    // if(count != 3){
    //   count++;
    // }
    // else if(count == 3){
    //   count = 0;
    // }
  }
};

getindex = () => {
  let i = 0;
  while (i < 4) {
    let elem = document.getElementsByClassName("avatarbox")[i];
    if (elem.style.display == "flex") {
      count = i;
    }
    i++;
  }
};

changeboxleft = (x) => {
  if (x != 3) {
    document.getElementById(arrid[x]).style.display = "none";
    document.getElementById(arrid[x + 1]).style.display = "flex";
    document.getElementById(arrid[x + 1]).style.flexDirection = "column";
    document.getElementById(crid[x + 1]).style.background = "#df5329";
    document.getElementById(crid[x]).style.background = "white";
    count++;
  } else if (x == 3) {
    document.getElementById(arrid[3]).style.display = "none";
    document.getElementById(arrid[0]).style.display = "flex";
    document.getElementById(arrid[0]).style.flexDirection = "column";
    document.getElementById(crid[0]).style.background = "#df5329";
    document.getElementById(crid[3]).style.background = "white";
    count = 0;
  }
};
changeboxright = (x) => {
  if (x != 0) {
    document.getElementById(arrid[x]).style.display = "none";
    document.getElementById(arrid[x - 1]).style.display = "flex";
    document.getElementById(arrid[x - 1]).style.flexDirection = "column";
    document.getElementById(crid[x - 1]).style.background = "#df5329";
    document.getElementById(arrid[x - 1]).classList.add("aniright");
    document.getElementById(crid[x]).style.background = "white";
    count--;
  } else if (x == 0) {
    document.getElementById(arrid[0]).style.display = "none";
    document.getElementById(arrid[3]).style.display = "flex";
    document.getElementById(arrid[3]).style.flexDirection = "column";
    document.getElementById(crid[3]).style.background = "#df5329";
    document.getElementById(crid[0]).style.background = "white";
    count = 3;
  }
};
