window.onscroll = function () {
  scrollFunction();
};

var lastScrollTop = 0;
var trigger = false;
const toggleMenu = () => {
  var menu = document.getElementById("topnav").querySelector("nav");
  if (menu.style.display !== "block") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};
const scrollFunction = () => {
  var header = document.getElementById("header");
  var offset = window.pageYOffset || document.documentElement.scrollTop;
  if (offset < lastScrollTop) {
    if (trigger == true) {
      // UP
      trigger = false;
      header.style.cssText = "top:0px;";
    }
  } else if (trigger == false) {
    // DOWN
    trigger = true;
    header.style.cssText = "top:-60px;";
  }
  lastScrollTop = offset <= 0 ? 0 : offset;

};
