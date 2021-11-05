var dropdown_btns = document.getElementsByClassName("dropdown");
for (let botones of dropdown_btns) {
  botones.parentNode.addEventListener("mouseover", function (e) {
    e.preventDefault();
    menu = botones.nextElementSibling;
    menu.style.display = "block";
    botones.ariaExpanded = true;
  });
  botones.parentNode.addEventListener("click", function (e) {
    if (menu.style.display === "block") {
      menu = botones.nextElementSibling;
      menu.style.display = "none";
      botones.ariaExpanded = false;
    } else {
      menu = botones.nextElementSibling;
      menu.style.display = "block";
    }
  });
  for (let elemento of botones.parentNode.getElementsByTagName("ul")) {
    let hijos = Array.from(elemento.children);
    hijos.forEach((hijo) => {
      hijo.addEventListener("keydown", (e) => {
        var current = 0;
        if (e.keyCode == 27) {
          menu = botones.nextElementSibling;
          menu.style.display = "none";
          botones.ariaExpanded = false;
          botones.focus();
        }
        if (e.keyCode == 9) {
          if (current + 1 <= hijos.length) {
            current++;
          } else {
            current = 0;
          }
          hijos[current].focus();
        }
      });
      hijo.addEventListener("clic", (e) => {
        menu = botones.nextElementSibling;
        menu.style.display = "none";
        botones.ariaExpanded = false;
        botones.focus();
      });
    });
  }
  botones.parentNode.addEventListener("mouseout", function (e) {
    e.preventDefault();
    menu = botones.nextElementSibling;
    menu.style.display = "none";
    botones.ariaExpanded = false;
  });
}

var submenu = document.getElementById("menuTienda");
submenu.addEventListener("click", (e) => {
  submenu.ariaExpanded = true;
});
