var menuBtn = document.getElementById("menu-icon");
var menuContainer = document.getElementById("body");

var menuContClosed = "menu-closed";
var menuContOpened = "menu-open";
var withoutJS = "without-js";

if (menuContainer.className == withoutJS) {
  menuContainer.className = menuContClosed;
}

menuBtn.onclick = function() {
  if (menuContainer.className == menuContClosed) {
    menuContainer.className = menuContOpened;
  } else if (menuContainer.className == menuContOpened) {
    menuContainer.className = menuContClosed;
  }
}
