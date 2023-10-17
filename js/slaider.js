(function(){
    "use strict";
    const d = document;

    const carrusel = d.querySelectorAll(".nak-cont3-carrusel-escenas");
    const btnLeft = d.querySelector(".nak-cont3-boton-left");
    const btnRight = d.querySelector(".nak-cont3-boton-right");
    let value = 0;

    btnLeft.addEventListener("click", (e)=>{
        value = (value - 1 + carrusel.length) % carrusel.length;

        carrusel.forEach((video,i )=>{
            if(i === value) video.classList.add("nak-cont3-carrusel-active");
            else video.classList.remove("nak-cont3-carrusel-active");
        })
    })
    
    btnRight.addEventListener("click", (e)=>{
        value = (value + 1) % carrusel.length;

        carrusel.forEach((video,i )=>{
            if(i === value) video.classList.add("nak-cont3-carrusel-active");
            else video.classList.remove("nak-cont3-carrusel-active");
        })
    })
    
})();