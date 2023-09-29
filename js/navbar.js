(function () {
  "use strict";

  const d = document;
  const nav = d.querySelector(".contH-nav");
  const close = d.querySelector(".contH-nav-close");
  const menu = d.querySelector(".contH-menu");
  const nav2 = d.querySelector(".contH-tripulacion");
  const btnT = d.querySelector(".tripulacion");
  const close2 = d.querySelector(".contH-tripulacion-close");

  menu.addEventListener("click", (e) => {
    nav.classList.add("contH-nav-show");
    close.classList.add("contH-nav-close-show");
    menu.classList.add("contH-menu-show");
  });

  close.addEventListener("click",(e)=>{
    nav.classList.remove("contH-nav-show");
    close.classList.remove("contH-nav-close-show");
    menu.classList.remove("contH-menu-show");
  })

  btnT.addEventListener("click", (e)=>{
    nav2.classList.add("contH-tripulacion-show")
  });

  close2.addEventListener("click",(e)=>{
    nav2.classList.remove("contH-tripulacion-show");
  })
})();
