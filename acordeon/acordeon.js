var containerTemas = document.getElementsByClassName("acordtema");
for (var i = 0; i < containerTemas.length; i++) {
  var temaBtn = containerTemas[i].getElementsByTagName("button");
  temaBtn[0].addEventListener("click", function () {
    subacord = this.parentNode.nextElementSibling;
    if (subacord.classList.contains("open")) {
      this.ariaExpanded = false;
      subacord.classList.remove("open");
      subacord.ariaHidden = true;
      this.classList.remove("openTitle");
    } else {
      this.ariaExpanded = true;
      subacord.classList.add("open");
      subacord.ariaHidden = false;
      subacord.tabIndex = 0;
      this.classList.add("openTitle");
    }
  });

  /*listeners para mostrar el foco*/
}
