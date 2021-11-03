var tabs = document.querySelectorAll(".tab");
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    for (let tab of tabs) {
      tab.ariaExpanded = false;
    }
    this.ariaExpanded = true;
    var panels = document.querySelectorAll(".panel");
    for (var j = 0; j < panels.length; j++) {
      panels[j].classList.remove("open");
      panels[j].ariaHidden = false;
    }
    pid = this.getAttribute("id").split("-").pop() - 1;
    panels[pid].classList.add("open");
    panels[pid].ariaHidden = true;
  });
}
