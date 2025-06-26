document.getElementById(loginForm).addEventListener("submit",function  (e)
   { e.prevendefault();

    const email = document.getElementById("email").ariaValueMax;
    const password =document.getElementById("password").vale;

    //validacion simple
    if (email === "admin@correo.com" && password === "123456"){document.getElementById("msg").innerText="¡login exitoso!";
} else {
    document.getElementById("msg").innerText="correo o contraseña incorrectos.";
       }
});
const Imagen = document.getElementById("miImagen");
Imagen.addEventListener("click", () => {
    Imagen.style.transform="scale(1,2) rotate (10desg)";
    Imagen.style,opacity = "0.8";

    setTimeout(() => {
        Imagen.style.transform="sacale(1) rotate(0deg)";
        Imagen.style.opacity = "1";
    }, 1000);
})
