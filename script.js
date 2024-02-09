document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.getElementById("carrusel");
    const imagenesFondo = ["/img/imagen1.png", "/img/imagen2.avif", "/img/imagen3.png" , "/img/imagen4.avif" 
    , "/img/imagen5.png" , "/img/imagen6.avif" , "/img/imagen7.avif" , "/img/imagen8.png" , "/img/imagen9.png"];
    let indiceImagenActual = 0;

    function cambiarFondo() {
        carrusel.style.backgroundImage = `url(${imagenesFondo[indiceImagenActual]})`;
        indiceImagenActual = (indiceImagenActual + 1) % imagenesFondo.length;
    }
    
    setInterval(cambiarFondo, 5000);
});
