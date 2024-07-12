
    /* funcionamiento de la licuadora*/
var estadoLicuadora = "apagado";
/*funciones del sonido de licuadora*/

var sonidoLicuadora = document.getElementById( "blender-sound" );
/*sonido del boton*/
var botonLicuadora = document.getElementById( "blender-button-sound" );
/*<div id="blender" class="blender">*/
var Licuadora = document.getElementById( "blender" );


function controlarLicuadora(){
    if ( estadoLicuadora == "apagado" ) {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        Licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagado";
        hacerBrrBrr();
        Licuadora.classList.remove("active");
    }
}

/*si funciona*/

/*funcion de sonido pausa y play y tiempo de sonido*/
function hacerBrrBrr() {
    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}








