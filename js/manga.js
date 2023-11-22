(function () {
  "use strict";

  const d = document;
  const btn = d.querySelectorAll(".mCap-cont-2-button");
  const cont = d.querySelectorAll(".mCap-cont-2");
  let click = 0;

  btn.forEach((valor, i) => {
    valor.addEventListener("click", (e) => {
      click++;
      if (click == 1) {
        cont[i].classList.add("mCap-cont-2-show");
        btn[i].classList.add("mCap-cont-2-button-show");
      }
      else{
        cont[i].classList.remove("mCap-cont-2-show");
        btn[i].classList.remove("mCap-cont-2-button-show");
        click = 0;
      }
    });
  });
})();
