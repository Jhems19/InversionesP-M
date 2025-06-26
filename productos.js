const Imagen = document.getElementById("miImagen");
Imagen.addEventListener("click", () => {
    Imagen.style.transform="scale(1,2) rotate (10desg)";
    Imagen.style,opacity = "0.8";

    setTimeout(() => {
        Imagen.style.transform="sacale(1) rotate(0deg)";
        Imagen.style.opacity = "1";
    }, 1000);
})
