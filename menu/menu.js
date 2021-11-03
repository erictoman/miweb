var dropdown_btns = document.getElementsByClassName("dropdown");
for (let botones of dropdown_btns) {
  botones.parentNode.addEventListener("mouseover", function (e) {
    e.preventDefault();
    menu = botones.nextElementSibling;
    menu.style.display = "block";
  });
  botones.parentNode.addEventListener("click", function (e) {
    menu = botones.nextElementSibling;
    menu.style.display = "block";
  });

  for (let elemento of botones.parentNode.getElementsByTagName("ul")) {
    let hijos = Array.from(elemento.children);
    hijos.forEach((hijo) => {
      hijo.addEventListener("keydown", (e) => {
        var current = 0;
        console.log(current);
        if (e.keyCode == 27) {
          menu = botones.nextElementSibling;
          menu.style.display = "none";
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
    });
  }

  botones.parentNode.addEventListener("mouseout", function (e) {
    e.preventDefault();
    menu = botones.nextElementSibling;
    menu.style.display = "none";
  });
}
